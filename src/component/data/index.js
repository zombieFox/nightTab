import { state } from '../state';
import { bookmark } from '../bookmark';
import { version } from '../version';
import { update } from '../update';
import { appName } from '../appName';

import { Modal } from '../modal';

import { dateTime } from '../../utility/dateTime';
import { node } from '../../utility/node';
import { isJson } from '../../utility/isJson';
import { clearChildNode } from '../../utility/clearChildNode';

const data = {};

data.set = (key, data) => {
  localStorage.setItem(key, data);
};

data.get = (key) => {
  return localStorage.getItem(key);
};

data.import = (input, feedback) => {
  const fileList = input.files;

  if (fileList.length > 0) {
    data.validateJsonFile(fileList, input, feedback);
  };
};

data.validateJsonFile = (fileList, input, feedback) => {

  // make new file reader
  var reader = new FileReader();

  // define the on load event for the reader
  reader.onload = (event) => {

    // is this a JSON file
    if (isJson(event.target.result)) {

      // is this JSON from this app
      if (JSON.parse(event.target.result)[appName] || JSON.parse(event.target.result)[appName.toLowerCase()]) {

        data.feedback.clear.render(feedback);

        data.feedback.success.render(feedback, fileList[0].name, () => {
          data.restore(JSON.parse(event.target.result));
          data.save();
          data.reload.render();
        });

        input.value = '';

      } else {

        data.feedback.clear.render(feedback);
        data.feedback.fail.notAppJson.render(feedback, fileList[0].name);
        input.value = '';

      };
    } else {

      // not a JSON file
      data.feedback.clear.render(feedback);
      data.feedback.fail.notJson.render(feedback, fileList[0].name);
      input.value = '';

    };

  };

  // invoke the reader
  reader.readAsText(fileList.item(0));

};

data.export = () => {
  let timestamp = dateTime();

  const leadingZero = (value) => {
    if (value < 10) {
      value = '0' + value;
    };
    return value;
  };

  timestamp.hours = leadingZero(timestamp.hours);
  timestamp.minutes = leadingZero(timestamp.minutes);
  timestamp.seconds = leadingZero(timestamp.seconds);
  timestamp.date = leadingZero(timestamp.date);
  timestamp.month = leadingZero(timestamp.month + 1);
  timestamp.year = leadingZero(timestamp.year);
  timestamp = timestamp.year + '.' + timestamp.month + '.' + timestamp.date + ' - ' + timestamp.hours + ' ' + timestamp.minutes + ' ' + timestamp.seconds;

  const fileName = appName + ' backup - ' + timestamp + '.json';

  const dataToExport = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data.load()));

  const link = document.createElement('a');

  link.setAttribute('href', dataToExport);

  link.setAttribute('download', fileName);

  link.addEventListener('click', () => { link.remove(); });

  document.querySelector('body').appendChild(link);

  link.click();
};

data.remove = (key) => {
  localStorage.removeItem(key);
};

data.backup = (dataToBackup) => {
  if (dataToBackup) {
    console.log('data version ' + dataToBackup.version + ' backed up');
    data.set(appName + 'Backup', JSON.stringify(dataToBackup));
  };
};

data.restore = (dataToRestore) => {
  if (dataToRestore) {
    if (dataToRestore.version != version.number) {
      // backup save data before running update
      data.backup(dataToRestore);
      // run update on save data
      dataToRestore = update.run(dataToRestore);
      // save data
      data.set(appName, JSON.stringify(dataToRestore));
    } else {
      console.log('data version:', version.number, 'no need to run update');
    };
    // restore state and bookmarks from save data
    state.set.restore(dataToRestore);
    bookmark.restore(dataToRestore);
  } else {
    console.log('no data found to load');
    state.set.default();
  };
};

data.save = () => {
  data.set(appName, JSON.stringify({
    [appName]: true,
    version: version.number,
    state: state.get.current(),
    bookmark: bookmark.all
  }));
};

data.load = () => {
  if (data.get(appName) != null && data.get(appName) != undefined) {
    return JSON.parse(data.get(appName));
  } else {
    return false;
  };
};

data.wipe = () => {
  data.remove(appName);
  data.reload.render();
};

data.reload = {
  render: () => {
    location.reload();
  }
};

data.clear = {
  render: () => {

    const clearContent = node('div');

    const para1 = node('p:Are you sure you want to clear all ' + appName + ' Bookmarks and Settings? ' + appName + ' will be restore to the default state.');

    const para2 = node('p:This can not be undone.');

    clearContent.appendChild(para1);

    clearContent.appendChild(para2);

    const clearModal = new Modal({
      heading: 'Clear all ' + appName + ' data?',
      content: clearContent,
      successText: 'Clear all data',
      width: 'small',
      successAction: () => {
        data.wipe();
      }
    });

    clearModal.open();

  }
};

data.feedback = {};

data.feedback.empty = {
  render: (feedback) => {
    feedback.appendChild(node('p:No JSON file selected.|class:muted small'));
  }
};

data.feedback.clear = {
  render: (feedback) => {
    clearChildNode(feedback);
  }
};

data.feedback.success = {
  render: (feedback, filename, action) => {
    feedback.appendChild(node('p:Success! Restoring ' + appName + ' Bookmarks and Settings.|class:muted small'));
    feedback.appendChild(node('p:' + filename));
    if (action) {
      data.feedback.animation.set.render(feedback, 'is-pop', action);
    };
  }
};

data.feedback.fail = {
  notJson: {
    render: (feedback, filename) => {
      feedback.appendChild(node('p:Not a JSON file. Make sure the selected file came from ' + appName + '.|class:small muted'));
      feedback.appendChild(node('p:' + filename));
      data.feedback.animation.set.render(feedback, 'is-shake');
    }
  },
  notAppJson: {
    render: (feedback, filename) => {
      feedback.appendChild(node('p:Not the right kind of JSON file. Make sure the selected file came from ' + appName + '.|class:small muted'));
      feedback.appendChild(node('p:' + filename));
      data.feedback.animation.set.render(feedback, 'is-shake');
    }
  }
};

data.feedback.animation = {
  set: {
    render: (feedback, animationClass, action) => {
      feedback.classList.add(animationClass);

      const animationEndAction = () => {
        if (action) {
          action();
        };
        data.feedback.animation.reset.render(feedback);
      };

      feedback.addEventListener('animationend', animationEndAction);
    }
  },
  reset: {
    render: (feedback) => {
      feedback.classList.remove('is-shake');
      feedback.classList.remove('is-pop');
      feedback.classList.remove('is-jello');
      feedback.removeEventListener('animationend', data.feedback.animation.reset.render);
    }
  }
};

data.init = () => {
  data.restore(data.load());
};

export { data };
