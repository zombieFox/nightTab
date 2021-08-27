import { state } from '../../state';
import { data } from '../../data';
import { header } from '../../header';
import { bookmark } from '../../bookmark';
import { group } from '../../group';
import { theme } from '../../theme';
import { version } from '../../version';
import { menu } from '../../menu';
import { icon } from '../../icon';
import { logo } from '../../logo';
import { link } from '../../link';
import { layout } from '../../layout';
import { toolbar } from '../../toolbar';
import { groupAndBookmark } from '../../groupAndBookmark';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';
import { Edge } from '../../edge';
import { Alert } from '../../alert';

import { Control_helperText } from '../../control/helperText';
import { Control_inputButton } from '../../control/inputButton';
import { Control_groupText } from '../../control/groupText';
import { Control_radio } from '../../control/radio';
import { Control_radioGrid } from '../../control/radioGrid';
import { Control_checkbox } from '../../control/checkbox';
import { Control_slider } from '../../control/slider';
import { Control_sliderSlim } from '../../control/sliderSlim';
import { Control_sliderDouble } from '../../control/sliderDouble';
import { Control_colorMixer } from '../../control/colorMixer';
import { Control_color } from '../../control/color';
import { Control_text } from '../../control/text';
import { Control_textReset } from '../../control/textReset';
import { Control_textarea } from '../../control/textarea';

import { node } from '../../../utility/node';
import { complexNode } from '../../../utility/complexNode';
import { applyCSSVar } from '../../../utility/applyCSSVar';
import { applyCSSClass } from '../../../utility/applyCSSClass';
import { applyCSSState } from '../../../utility/applyCSSState';

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

  debugSetting.control.button.link = new Button({ text: 'Link button', size: 'medium', style: ['link'] });

  parent.appendChild(
    node('div', [
      debugSetting.control.button.small.wrap(),
      debugSetting.control.button.medium.wrap(),
      debugSetting.control.button.large.wrap(),
      debugSetting.control.button.ring.wrap(),
      debugSetting.control.button.line.wrap(),
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
              debugSetting.control.bookmark.nameHide.wrap()
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
    )
  };

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
