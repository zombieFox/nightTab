import { state } from '../state';
import { bookmark } from '../bookmark';
import { menu } from '../menu';
import { version } from '../version';
import { update } from '../update';
import { appName } from '../appName';

import { Modal } from '../modal';
import { ImportForm } from '../importForm';

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

data.import = {
  state: {
    setup: { include: true },
    bookmark: { include: true, type: 'restore' },
    theme: { include: true }
  },
  reset: () => {

    data.import.state.setup.include = true;

    data.import.state.bookmark.include = true;

    data.import.state.bookmark.type = 'restore';

    data.import.state.theme.include = true;

  },
  file: ({
    fileList = false,
    feedback = false,
    input = false
  } = {}) => {

    if (fileList.length > 0) {
      data.validateFile({
        fileList: fileList,
        feedback: feedback,
        input: input
      });
    };

  },
  drop: ({
    fileList = false,
    feedback = false
  }) => {

    if (fileList.length > 0) {
      data.validateFile({
        fileList: fileList,
        feedback: feedback
      });
    };

  }
};

data.validateFile = ({
  fileList = false,
  feedback = false,
  input = false
} = {}) => {

  // make new file reader
  var reader = new FileReader();

  // define the on load event for the reader
  reader.onload = (event) => {

    // is this a JSON file
    if (isJson(event.target.result)) {

      // is this JSON from this app
      if (JSON.parse(event.target.result)[appName] || JSON.parse(event.target.result)[appName.toLowerCase()]) {

        const validFileSuccessAction = () => {

          menu.close();

          let dataToImport = JSON.parse(event.target.result);

          if (dataToImport.version != version.number) {

            dataToImport = data.update(JSON.parse(event.target.result));

          };

          const importForm = new ImportForm({
            dataToImport: dataToImport,
            state: data.import.state
          });

          const importModal = new Modal({
            heading: 'Restoring from a ' + appName + ' backup',
            content: importForm.form(),
            successText: 'Import',
            width: 'small',
            successAction: () => {

              if (data.import.state.setup.include || data.import.state.theme.include || data.import.state.bookmark.include) {

                let dataToRestore = JSON.parse(event.target.result);

                if (dataToRestore.version != version.number) {

                  data.backup(dataToRestore);

                  dataToRestore = data.update(dataToRestore);

                };

                data.restore(dataToRestore);

                data.save();

                data.reload.render();

              };

              data.import.reset();

            },
            cancelAction: () => { data.import.reset(); },
            closeAction: () => { data.import.reset(); }
          });

          importModal.open();

        };

        data.feedback.clear.render(feedback);

        data.feedback.success.render(feedback, fileList[0].name, validFileSuccessAction);

        if (input) {

          input.value = '';

        };

      } else {

        data.feedback.clear.render(feedback);

        data.feedback.fail.notAppJson.render(feedback, fileList[0].name);

        if (input) {

          input.value = '';

        };

      };

    } else {

      // not a JSON file

      data.feedback.clear.render(feedback);

      data.feedback.fail.notJson.render(feedback, fileList[0].name);

      if (input) {

        input.value = '';

      };

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

    data.set(appName + 'Backup', JSON.stringify(dataToBackup));

    console.log('data version ' + dataToBackup.version + ' backed up');

  };

};

data.update = (dataToUpdate) => {

  if (dataToUpdate.version != version.number) {

    dataToUpdate = update.run(dataToUpdate);

  } else {

    console.log('data version:', version.number, 'no need to run update');

  };

  return dataToUpdate;

};

data.restore = (dataToRestore) => {

  if (dataToRestore) {

    console.log('data found to load');

    if (data.import.state.setup.include) {
      state.set.restore.setup(dataToRestore);
    };

    if (data.import.state.theme.include) {
      state.set.restore.theme(dataToRestore);
    };

    if (data.import.state.bookmark.include) {

      switch (data.import.state.bookmark.type) {

        case 'restore':
          bookmark.restore(dataToRestore);
          break;

        case 'append':
          bookmark.append(dataToRestore);
          break;

      };

    };

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

    let dataToLoad = JSON.parse(data.get(appName));

    if (dataToLoad.version != version.number) {

      data.backup(dataToLoad);

      dataToLoad = data.update(dataToLoad);

    };

    return dataToLoad;

  } else {

    return false;

  };

};

data.wipe = {
  all: () => {

    data.remove(appName);

    data.reload.render();

  },
  partial: () => {

    bookmark.reset();

    data.set(appName, JSON.stringify({
      [appName]: true,
      version: version.number,
      state: state.get.default(),
      bookmark: bookmark.all
    }));

    data.reload.render();

  }
};

data.reload = {
  render: () => {
    location.reload();
  }
};

data.clear = {
  all: {
    render: () => {

      const clearModal = new Modal({
        heading: 'Clear all ' + appName + ' data?',
        content: node('div', [
          node('p:Are you sure you want to clear all ' + appName + ' Bookmarks and Settings? ' + appName + ' will be restore to the default state.'),
          node('p:This can not be undone.')
        ]),
        successText: 'Clear all data',
        width: 'small',
        successAction: () => {
          data.wipe.all();
        }
      });

      clearModal.open();

    }
  },
  partial: {
    render: () => {

      const clearModal = new Modal({
        heading: 'Clear ' + appName + ' data except bookmarks?',
        content: node('div', [
          node('p:Are you sure you want to clear all ' + appName + ' Settings? ' + appName + ' will be restore to the default state but your Bookmarks and Groups will remain.'),
          node('p:This can not be undone.')
        ]),
        successText: 'Clear all except bookmarks',
        width: 35,
        successAction: () => {
          data.wipe.partial();
        }
      });

      clearModal.open();

    }
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
