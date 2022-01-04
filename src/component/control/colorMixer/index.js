import { message } from '../../message';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';

import { node } from '../../../utility/node';
import { get } from '../../../utility/get';
import { set } from '../../../utility/set';
import { convertColor } from '../../../utility/convertColor';

import { Control_color } from '../color';
import { Control_sliderSlim } from '../sliderSlim';

export const Control_colorMixer = function ({
  object = {},
  path = false,
  defaultValue = false,
  minMaxObject = false,
  id = 'name',
  labelText = 'name',
  srOnly = false,
  randomColor = false,
  action = false
} = {}) {

  this.moreControlsToggle = new Button({
    text: message.get('controlColorMixerMoreControls'),
    iconName: 'arrowKeyboardDown',
    style: ['line'],
    classList: ['collapse-toggle', 'form-group-item-small'],
    title: message.get('controlColorMixerMoreControls'),
    srOnly: true,
    func: () => {
      this.moreControlsCollapse.toggle();
      this.moreControlsUpdate();
    }
  });

  this.color = new Control_color({
    object: object,
    path: path,
    id: id + '-rgb',
    labelText: labelText,
    srOnly: srOnly,
    value: get({ object: object, path: path + '.rgb' }),
    defaultValue: defaultValue,
    extraButtons: [this.moreControlsToggle],
    randomColor: randomColor,
    action: () => {
      set({
        object: object,
        path: path + '.hsl',
        value: convertColor.rgb.hsl(get({ object: object, path: path + '.rgb' }))
      });
      this.colorSliderR.update();
      this.colorSliderG.update();
      this.colorSliderB.update();
      this.colorSliderH.update();
      this.colorSliderS.update();
      this.colorSliderL.update();
      if (action) {
        action();
      }
    }
  });

  this.colorSliderH = new Control_sliderSlim({
    object: object,
    path: path + '.hsl.h',
    id: id + '-hsl-h',
    labelText: message.get('controlColorMixerSliderH'),
    value: get({ object: object, path: path + '.hsl.h' }),
    min: get({ object: minMaxObject, path: path + '.hsl.h.min' }),
    max: get({ object: minMaxObject, path: path + '.hsl.h.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.rgb',
        value: convertColor.hsl.rgb(get({ object: object, path: path + '.hsl' }))
      });
      this.color.update({ all: true });
      this.colorSliderR.update();
      this.colorSliderG.update();
      this.colorSliderB.update();
      this.colorSliderS.update();
      this.colorSliderL.update();
      if (action) {
        action();
      }
    }
  });

  this.colorSliderS = new Control_sliderSlim({
    object: object,
    path: path + '.hsl.s',
    id: id + '-hsl-s',
    labelText: message.get('controlColorMixerSliderS'),
    value: get({ object: object, path: path + '.hsl.s' }),
    min: get({ object: minMaxObject, path: path + '.hsl.s.min' }),
    max: get({ object: minMaxObject, path: path + '.hsl.s.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.rgb',
        value: convertColor.hsl.rgb(get({ object: object, path: path + '.hsl' }))
      });
      this.color.update({ all: true });
      this.colorSliderR.update();
      this.colorSliderG.update();
      this.colorSliderB.update();
      this.colorSliderH.update();
      this.colorSliderL.update();
      if (action) {
        action();
      }
    }
  });

  this.colorSliderL = new Control_sliderSlim({
    object: object,
    path: path + '.hsl.l',
    id: id + '-hsl-l',
    labelText: message.get('controlColorMixerSliderL'),
    value: get({ object: object, path: path + '.hsl.l' }),
    min: get({ object: minMaxObject, path: path + '.hsl.l.min' }),
    max: get({ object: minMaxObject, path: path + '.hsl.l.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.rgb',
        value: convertColor.hsl.rgb(get({ object: object, path: path + '.hsl' }))
      });
      this.color.update({ all: true });
      this.colorSliderR.update();
      this.colorSliderG.update();
      this.colorSliderB.update();
      this.colorSliderH.update();
      this.colorSliderS.update();
      if (action) {
        action();
      }
    }
  });

  this.colorSliderR = new Control_sliderSlim({
    object: object,
    path: path + '.rgb.r',
    id: id + '-rgb-r',
    labelText: message.get('controlColorMixerSliderR'),
    value: get({ object: object, path: path + '.rgb.r' }),
    min: get({ object: minMaxObject, path: path + '.rgb.r.min' }),
    max: get({ object: minMaxObject, path: path + '.rgb.r.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.hsl',
        value: convertColor.rgb.hsl(get({ object: object, path: path + '.rgb' }))
      });
      this.color.update({ all: true });
      this.colorSliderG.update();
      this.colorSliderB.update();
      this.colorSliderH.update();
      this.colorSliderS.update();
      this.colorSliderL.update();
      if (action) {
        action();
      }
    }
  });

  this.colorSliderG = new Control_sliderSlim({
    object: object,
    path: path + '.rgb.g',
    id: id + '-rgb-g',
    labelText: message.get('controlColorMixerSliderG'),
    value: get({ object: object, path: path + '.rgb.g' }),
    min: get({ object: minMaxObject, path: path + '.rgb.g.min' }),
    max: get({ object: minMaxObject, path: path + '.rgb.g.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.hsl',
        value: convertColor.rgb.hsl(get({ object: object, path: path + '.rgb' }))
      });
      this.color.update({ all: true });
      this.colorSliderR.update();
      this.colorSliderB.update();
      this.colorSliderH.update();
      this.colorSliderS.update();
      this.colorSliderL.update();
      if (action) {
        action();
      }
    }
  });

  this.colorSliderB = new Control_sliderSlim({
    object: object,
    path: path + '.rgb.b',
    id: id + '-rgb-b',
    labelText: message.get('controlColorMixerSliderB'),
    value: get({ object: object, path: path + '.rgb.b' }),
    min: get({ object: minMaxObject, path: path + '.rgb.b.min' }),
    max: get({ object: minMaxObject, path: path + '.rgb.b.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.hsl',
        value: convertColor.rgb.hsl(get({ object: object, path: path + '.rgb' }))
      });
      this.color.update({ all: true });
      this.colorSliderR.update();
      this.colorSliderG.update();
      this.colorSliderH.update();
      this.colorSliderS.update();
      this.colorSliderL.update();
      if (action) {
        action();
      }
    }
  });

  this.moreControls = node('div', [
    this.colorSliderH.wrap(),
    this.colorSliderS.wrap(),
    this.colorSliderL.wrap(),
    this.colorSliderR.wrap(),
    this.colorSliderG.wrap(),
    this.colorSliderB.wrap()
  ]);

  this.moreControlsCollapse = new Collapse({
    type: 'toggle',
    target: [{
      toggle: this.moreControlsToggle.button,
      content: this.moreControls
    }]
  });

  this.wrap = () => {
    return form.wrap({
      children: [
        this.color.wrap(),
        form.wrap({
          children: [
            form.indent({
              children: [
                this.moreControlsCollapse.collapse()
              ]
            })
          ]
        })
      ]
    });
  };

  this.disable = () => {
    this.color.disable();

    if (!this.moreControlsCollapse.target()[0].state.collapsed) {
      this.colorSliderH.disable();
      this.colorSliderS.disable();
      this.colorSliderL.disable();
      this.colorSliderR.disable();
      this.colorSliderG.disable();
      this.colorSliderB.disable();
    } else {
      this.moreControlsUpdate();
    }
  };

  this.enable = () => {
    this.color.enable();

    if (!this.moreControlsCollapse.target()[0].state.collapsed) {
      this.colorSliderH.enable();
      this.colorSliderS.enable();
      this.colorSliderL.enable();
      this.colorSliderR.enable();
      this.colorSliderG.enable();
      this.colorSliderB.enable();
    } else {
      this.moreControlsUpdate();
    }
  };

  this.moreControlsUpdate = () => {

    if (this.moreControlsCollapse.target()[0].state.collapsed) {
      this.colorSliderH.disable();
      this.colorSliderS.disable();
      this.colorSliderL.disable();
      this.colorSliderR.disable();
      this.colorSliderG.disable();
      this.colorSliderB.disable();
    } else {
      this.colorSliderH.enable();
      this.colorSliderS.enable();
      this.colorSliderL.enable();
      this.colorSliderR.enable();
      this.colorSliderG.enable();
      this.colorSliderB.enable();
    }

  };

  this.update = () => {
    this.color.update({ all: true });
    this.colorSliderR.update();
    this.colorSliderG.update();
    this.colorSliderB.update();
    this.colorSliderH.update();
    this.colorSliderS.update();
    this.colorSliderL.update();
  };

  this.moreControlsUpdate();

};
