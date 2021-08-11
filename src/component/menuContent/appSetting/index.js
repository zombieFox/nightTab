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

const appSetting = {};

appSetting[appName.toLowerCase()] = (parent) => {

  parent.appendChild(
    node('div', [
      node('div|class:version', [
        logo.render(),
        node('div|class:version-details', [
          node('h1:' + appName + '|class:version-app-name'),
          node('p:Version ' + version.number + '|class:version-number'),
          node('p:' + version.name + '|class:version-name small')
        ])
      ]),
      node('hr'),
      complexNode({ tag: 'p', text: 'Project repository on ', node: [link.render({ text: 'GitHub.', href: 'https://github.com/zombieFox/' + appName, openNew: true })] }),
      complexNode({ tag: 'p', text: 'For feedback and support, submit an <a tabindex="1" href="https://github.com/zombieFox/' + appName + '/issues" target="_blank">Issue</a> or check the <a tabindex="1" href="https://github.com/zombieFox/' + appName + '/wiki" target="_blank">Wiki</a>.' }),
      complexNode({ tag: 'p', text: appName + ' uses the <a tabindex="1" href="https://github.com/zombieFox/' + appName + '/blob/master/license" target="_blank">GNU General Public License v3.0</a>.' })
    ])
  );

};

export { appSetting }
