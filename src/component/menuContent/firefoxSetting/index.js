import { state } from '../../state';
import { data } from '../../data';
import { header } from '../../header';
import { bookmark } from '../../bookmark';
import { theme } from '../../theme';
import { version } from '../../version';
import { menu } from '../../menu';
import { icon } from '../../icon';
import { logo } from '../../logo';
import { link } from '../../link';
import { layout } from '../../layout';
import { toolbar } from '../../toolbar';
import { appName } from '../../appName';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';
import { Edge } from '../../edge';

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

const firefoxSetting = {};

firefoxSetting.firefox = (parent) => {

  parent.appendChild(
    node('div', [
      complexNode({
        tag: 'p',
        text: 'Firefox does not allow addons to replace the "homepage". However there is a workaround:'
      }),
      form.wrap({
        children: [
          node('ol', [
            node('li:Open a new Firefox window'),
            node('li:Open Firefox <code>Preferences</code> and open a new tab (nightTab)'),
            node('li:In Firefox preferences under <code>Home</code>, change <code>Homepage and new windows</code> to <code>Custom URLs...</code>'),
            node('li:Then click <code>Use Current Page</code>'),
          ]),
          node('p:nightTab will now appear as the homepage.'),
        ]
      })
    ])
  );

};

export { firefoxSetting }
