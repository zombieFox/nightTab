import { state } from '../../state';
import { data } from '../../data';
import { header } from '../../header';
import { bookmark } from '../../bookmark';
import { theme } from '../../theme';
import { version } from '../../version';
import { menu } from '../../menu';
import { icon } from '../../icon';
import { logo } from '../../logo';
import { layout } from '../../layout';
import { toolbar } from '../../toolbar';
import { appName } from '../../appName';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';
import { Edge } from '../../edge';
import { Alert } from '../../alert';
import { Link } from '../../link';

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

  const githubLink = new Link({ text: 'GitHub.', href: 'https://github.com/zombieFox/' + appName, openNew: true });

  const redditLink = new Link({ text: `Reddit ${appName} community.`, href: 'https://www.reddit.com/r/' + appName, openNew: true });

  const licenseLink = new Link({ text: 'GNU General Public License v3.0', href: 'https://github.com/zombieFox/' + appName + '/blob/master/license', openNew: true });

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
      complexNode({ tag: 'p', text: `This project can be found on ${githubLink.link().outerHTML}` }),
      complexNode({ tag: 'p', text: `Share your setup with the ${redditLink.link().outerHTML}` }),
      complexNode({ tag: 'p', text: `${appName} uses the ${licenseLink.link().outerHTML}` }),
    ])
  );

};

export { appSetting }
