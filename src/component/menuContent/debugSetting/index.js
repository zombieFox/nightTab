import { data } from '../../data';
import { menu } from '../../menu';
import { bookmark } from '../../bookmark';
import { group } from '../../group';
import { icon } from '../../icon';
import { layout } from '../../layout';
import { showcase } from '../../showcase';
import { groupAndBookmark } from '../../groupAndBookmark';
import { fontawesome } from '../../fontawesome';

import * as form from '../../form';

import { Button } from '../../button';
import { StagedGroup } from '../../stagedGroup';
import { StagedBookmark } from '../../stagedBookmark';

import { Control_radio } from '../../control/radio';
import { Control_radioGrid } from '../../control/radioGrid';
import { Control_checkbox } from '../../control/checkbox';

import { node } from '../../../utility/node';
import { randomNumber } from '../../../utility/randomNumber';
import { randomString } from '../../../utility/randomString';

const debugSetting = {};

debugSetting.control = {
  showcase: {},
  bookmark: {},
  icon: {}
};

debugSetting.showcase = (parent) => {

  debugSetting.control.showcase.start = new Button({
    text: 'Showcase controls',
    style: ['line'],
    func: () => {
      menu.close();
      layout.area.remove();
      showcase.area.render();
    }
  });

  parent.appendChild(
    node('div', [
      debugSetting.control.showcase.start.wrap()
    ])
  );

};

debugSetting.bookmark = (parent) => {

  debugSetting.control.bookmark.letter = new Button({
    text: 'Only letters',
    style: ['line'],
    func: () => {
      bookmark.all.forEach(item => {
        item.items.forEach(item => {

          item.display.visual.type = 'letter';

        });
      });
      groupAndBookmark.render();
      data.save();
    }
  });

  debugSetting.control.bookmark.icon = new Button({
    text: 'Only icons',
    style: ['line'],
    func: () => {
      bookmark.all.forEach(item => {
        item.items.forEach(item => {

          item.display.visual.type = 'icon';

        });
      });
      groupAndBookmark.render();
      data.save();
    }
  });

  debugSetting.control.bookmark.image = new Button({
    text: 'Only images',
    style: ['line'],
    func: () => {
      bookmark.all.forEach(item => {
        item.items.forEach(item => {

          item.display.visual.type = 'image';

        });
      });
      groupAndBookmark.render();
      data.save();
    }
  });

  debugSetting.control.bookmark.image = new Button({
    text: 'Only images',
    style: ['line'],
    func: () => {
      bookmark.all.forEach(item => {
        item.items.forEach(item => {

          item.display.visual.type = 'image';

        });
      });
      groupAndBookmark.render();
      data.save();
    }
  });

  debugSetting.control.bookmark.nameShow = new Button({
    text: 'Name show',
    style: ['line'],
    func: () => {
      bookmark.all.forEach(item => {
        item.items.forEach(item => {

          item.display.name.show = true;

        });
      });
      groupAndBookmark.render();
      data.save();
    }
  });

  debugSetting.control.bookmark.nameHide = new Button({
    text: 'Name hide',
    style: ['line'],
    func: () => {
      bookmark.all.forEach(item => {
        item.items.forEach(item => {

          item.display.name.show = false;

        });
      });
      groupAndBookmark.render();
      data.save();
    }
  });

  debugSetting.control.bookmark.add = {
    group: new Button({
      text: 'Add a group',
      style: ['line'],
      func: () => {

        const newGroupData = new StagedGroup();

        newGroupData.group.name.text = randomString({ adjectivesCount: randomNumber(1, 3) });

        newGroupData.newGroup();

        group.item.mod.add(newGroupData);

        group.add.mod.close();

        groupAndBookmark.render();

        layout.area.assemble();

        data.save();

      }
    }),
    bookmark: new Button({
      text: 'Add 10 random bookmarks',
      style: ['line'],
      func: () => {

        for (var i = 0; i < 10; i++) {

          const newBookmarkData = new StagedBookmark();

          newBookmarkData.type.new = true;

          newBookmarkData.position.destination.item = (bookmark.all.length > 0) ? bookmark.all[0].items.length : 0;

          newBookmarkData.position.destination.group = randomNumber(0, (bookmark.all.length - 1));

          newBookmarkData.link.timestamp = new Date().getTime();

          const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

          newBookmarkData.link.display.visual.letter.text = alphabet[randomNumber(0, (alphabet.length - 1))] + alphabet[randomNumber(0, (alphabet.length - 1))];

          newBookmarkData.link.display.visual.type = 'icon';

          const randomIcon = fontawesome[randomNumber(0, fontawesome.length - 1)];

          newBookmarkData.link.display.visual.icon.label = randomIcon.label;
          newBookmarkData.link.display.visual.icon.name = randomIcon.name;

          if (randomIcon.styles.includes('solid')) {
            newBookmarkData.link.display.visual.icon.prefix = 'fas';
          } else if (randomIcon.styles.includes('brands')) {
            newBookmarkData.link.display.visual.icon.prefix = 'fab';
          }

          newBookmarkData.link.display.name.text = randomString({ adjectivesCount: 1 });

          newBookmarkData.link.url = randomString({ adjectivesCount: 1 });

          bookmark.item.mod.add(newBookmarkData);

        }

        groupAndBookmark.render();

        data.save();

      }
    })
  };

  parent.appendChild(
    node('div', [
      form.wrap({
        children: [
          form.inline({
            gap: 'small',
            wrap: true,
            equalGap: true,
            children: [
              debugSetting.control.bookmark.letter.wrap(),
              debugSetting.control.bookmark.icon.wrap(),
              debugSetting.control.bookmark.image.wrap(),
              debugSetting.control.bookmark.nameShow.wrap(),
              debugSetting.control.bookmark.nameHide.wrap(),
              debugSetting.control.bookmark.add.group.wrap(),
              debugSetting.control.bookmark.add.bookmark.wrap()
            ]
          })
        ]
      })
    ])
  );

};

debugSetting.icon = (parent) => {

  debugSetting.control.icon = [];

  for (let key in icon.all) {
    debugSetting.control.icon.push(
      form.wrap({
        children: [
          node('div|class:d-flex d-horizontal d-gap d-center', [
            node('div|class:large', [icon.render(key)]),
            node(`p:${key}|class:small`)
          ])
        ]
      })
    );
  }

  parent.appendChild(
    node('div', [
      form.wrap({
        children: [
          form.inline({
            gap: 'small',
            wrap: true,
            equalGap: true,
            children: debugSetting.control.icon
          })
        ]
      })
    ])
  );

};

export { debugSetting };