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

debugSetting.control = {
  alignment: {},
  name: {},
  open: {}
};

debugSetting.bookmark = (parent) => {

  debugSetting.bookmark.letter = new Button({
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

  debugSetting.bookmark.icon = new Button({
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

  debugSetting.bookmark.image = new Button({
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

  debugSetting.bookmark.image = new Button({
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

  debugSetting.bookmark.nameHide = new Button({
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

  debugSetting.bookmark.nameShow = new Button({
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

  parent.appendChild(
    node('div', [
      form.wrap({
        children: [
          form.inline({
            gap: 'small',
            wrap: true,
            equalGap: true,
            children: [
              debugSetting.bookmark.letter.wrap(),
              debugSetting.bookmark.icon.wrap(),
              debugSetting.bookmark.image.wrap(),
              debugSetting.bookmark.nameHide.wrap(),
              debugSetting.bookmark.nameShow.wrap(),
            ]
          })
        ]
      })
    ])
  );

};

export { debugSetting }
