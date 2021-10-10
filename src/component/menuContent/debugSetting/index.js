import { data } from '../../data';
import { bookmark } from '../../bookmark';
import { group } from '../../group';
import { icon } from '../../icon';
import { layout } from '../../layout';
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

debugSetting.state = {
  input: {
    radio: { a: 'a', b: 'a', c: 'a', d: 'a', e: 'a', grid3x3: 'a', grid3x1: 'a', grid1x3: 'a' },
    checkbox: { a: true, b: true, c: false }
  }
};

debugSetting.control = {
  input: {},
  button: {},
  bookmark: {},
  icon: {}
};

debugSetting.input = (parent) => {

  debugSetting.control.input.radio = {
    a: new Control_radio({
      object: debugSetting.state,
      radioGroup: [
        { id: 'input-radio-a-a', labelText: 'Radio A A', description: 'Description for radio A A.', value: 'a' },
        { id: 'input-radio-a-b', labelText: 'Radio A B', description: 'Description for radio A B.', value: 'b' },
        { id: 'input-radio-a-c', labelText: 'Radio A C', description: 'Description for radio A C.', value: 'c' }
      ],
      label: 'Radio group A',
      groupName: 'input-radio-a',
      path: 'input.radio.a',
      action: () => { console.log(debugSetting.state); }
    }),
    b: new Control_radio({
      object: debugSetting.state,
      radioGroup: [
        { id: 'input-radio-b-a', labelText: 'B A', value: 'a' },
        { id: 'input-radio-b-b', labelText: 'B B', value: 'b' },
        { id: 'input-radio-b-c', labelText: 'B C', value: 'c' }
      ],
      label: 'Radio group',
      groupName: 'input-radio-b',
      path: 'input.radio.b',
      action: () => { console.log(debugSetting.state); }
    }),
    c: new Control_radio({
      object: debugSetting.state,
      radioGroup: [
        { id: 'input-radio-c-a', labelText: 'C A', value: 'a' },
        { id: 'input-radio-c-b', labelText: 'C B', value: 'b' },
        { id: 'input-radio-c-c', labelText: 'C C', value: 'c' }
      ],
      label: 'Radio group',
      groupName: 'input-radio-c',
      path: 'input.radio.c',
      inputButton: true,
      action: () => { console.log(debugSetting.state); }
    }),
    d: new Control_radio({
      object: debugSetting.state,
      radioGroup: [
        { id: 'input-radio-d-a', labelText: 'D A', value: 'a' },
        { id: 'input-radio-d-b', labelText: 'D B', value: 'b' },
        { id: 'input-radio-d-c', labelText: 'D C', value: 'c' }
      ],
      label: 'Radio group',
      groupName: 'input-radio-d',
      path: 'input.radio.d',
      inputButton: true,
      inputButtonStyle: ['line'],
      action: () => { console.log(debugSetting.state); }
    }),
    e: new Control_radio({
      object: debugSetting.state,
      radioGroup: [
        { id: 'input-radio-e-a', labelText: 'E A', value: 'a' },
        { id: 'input-radio-e-b', labelText: 'E B', value: 'b' },
        { id: 'input-radio-e-c', labelText: 'E C', value: 'c' }
      ],
      label: 'Radio group',
      groupName: 'input-radio-e',
      path: 'input.radio.e',
      inputButton: true,
      inputHide: true,
      inputButtonStyle: ['ring'],
      action: () => { console.log(debugSetting.state); }
    }),
    grid3x3: new Control_radioGrid({
      object: debugSetting.state,
      radioGroup: [
        { id: 'input-radio-grid3x3-a', labelText: 'A', value: 'a', position: 1 },
        { id: 'input-radio-grid3x3-b', labelText: 'B', value: 'b', position: 2 },
        { id: 'input-radio-grid3x3-c', labelText: 'C', value: 'c', position: 3 },
        { id: 'input-radio-grid3x3-d', labelText: 'D', value: 'd', position: 4 },
        { id: 'input-radio-grid3x3-e', labelText: 'E', value: 'e', position: 5 },
        { id: 'input-radio-grid3x3-f', labelText: 'F', value: 'f', position: 6 },
        { id: 'input-radio-grid3x3-g', labelText: 'G', value: 'g', position: 7 },
        { id: 'input-radio-grid3x3-h', labelText: 'H', value: 'h', position: 8 },
        { id: 'input-radio-grid3x3-i', labelText: 'I', value: 'i', position: 9 }
      ],
      label: 'Radio group grid 3x3',
      groupName: 'input-radio-grid3x3',
      path: 'input.radio.grid3x3',
      gridSize: '3x3',
      action: () => { console.log(debugSetting.state); }
    }),
    grid3x1: new Control_radioGrid({
      object: debugSetting.state,
      radioGroup: [
        { id: 'input-radio-grid3x1-a', labelText: 'A', value: 'a', position: 1 },
        { id: 'input-radio-grid3x1-b', labelText: 'B', value: 'b', position: 2 },
        { id: 'input-radio-grid3x1-c', labelText: 'C', value: 'c', position: 3 }
      ],
      label: 'Radio group grid 3x1',
      groupName: 'input-radio-grid3x1',
      path: 'input.radio.grid3x1',
      gridSize: '3x1',
      action: () => { console.log(debugSetting.state); }
    }),
    grid1x3: new Control_radioGrid({
      object: debugSetting.state,
      radioGroup: [
        { id: 'input-radio-grid1x3-a', labelText: 'A', value: 'a', position: 1 },
        { id: 'input-radio-grid1x3-b', labelText: 'B', value: 'b', position: 2 },
        { id: 'input-radio-grid1x3-c', labelText: 'C', value: 'c', position: 3 }
      ],
      label: 'Radio group grid 1x3',
      groupName: 'input-radio-grid1x3',
      path: 'input.radio.grid1x3',
      gridSize: '1x3',
      action: () => { console.log(debugSetting.state); }
    })
  };

  debugSetting.control.input.checkbox = {
    a: new Control_checkbox({
      object: debugSetting.state,
      id: 'input-checkbox-a',
      path: 'input.checkbox.a',
      labelText: 'Checkbox A',
      action: () => { console.log(debugSetting.state); }
    }),
    b: new Control_checkbox({
      object: debugSetting.state,
      id: 'input-checkbox-b',
      path: 'input.checkbox.b',
      labelText: 'Checkbox B',
      action: () => { console.log(debugSetting.state); }
    }),
    c: new Control_checkbox({
      object: debugSetting.state,
      id: 'input-checkbox-c',
      path: 'input.checkbox.c',
      labelText: 'Checkbox C',
      action: () => { console.log(debugSetting.state); }
    })
  };

  parent.appendChild(
    node('div', [
      debugSetting.control.input.radio.a.wrap(),
      node('hr'),
      debugSetting.control.input.radio.b.inline(),
      debugSetting.control.input.radio.c.inputButton(),
      debugSetting.control.input.radio.d.inputButton(),
      debugSetting.control.input.radio.e.inputButton(),
      node('hr'),
      debugSetting.control.input.radio.grid3x3.wrap(),
      debugSetting.control.input.radio.grid3x1.wrap(),
      debugSetting.control.input.radio.grid1x3.wrap(),
      node('hr'),
      debugSetting.control.input.checkbox.a.wrap(),
      debugSetting.control.input.checkbox.b.wrap(),
      debugSetting.control.input.checkbox.c.wrap()
    ])
  );

};

debugSetting.button = (parent) => {

  debugSetting.control.button.small = new Button({ text: 'Small button', size: 'small' });

  debugSetting.control.button.medium = new Button({ text: 'Medium button', size: 'medium' });

  debugSetting.control.button.large = new Button({ text: 'Large button', size: 'large' });

  debugSetting.control.button.ring = new Button({ text: 'Ring button', size: 'medium', style: ['ring'] });

  debugSetting.control.button.line = new Button({ text: 'Line button', size: 'medium', style: ['line'] });

  debugSetting.control.button.ring = new Button({ text: 'Ring button', size: 'medium', style: ['ring'] });

  debugSetting.control.button.link = new Button({ text: 'Link button', size: 'medium', style: ['link'] });

  parent.appendChild(
    node('div', [
      debugSetting.control.button.small.wrap(),
      debugSetting.control.button.medium.wrap(),
      debugSetting.control.button.large.wrap(),
      debugSetting.control.button.ring.wrap(),
      debugSetting.control.button.line.wrap(),
      debugSetting.control.button.ring.wrap(),
      debugSetting.control.button.link.wrap(),
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
