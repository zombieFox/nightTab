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

const supportSetting = {};

supportSetting.link = {
  url: 'https://github.com/zombieFox/' + appName + '/wiki/',
  page: {
    applyToAll: 'Applying-bookmark-settings-to-all',
    browser: 'Browser-support',
    cookies: 'Cookies-and-cache',
    data: 'Data-backup-and-restore',
    localBackgroundImage: 'Local-background-image',
    protectedUrl: 'Protected-URLs',
    recovering: 'Recovering-settings-and-bookmarks',
    resetting: 'Resetting-when-opening-the-browser',
    privacy: 'Respecting-your-privacy',
    backgroundImageVideo: 'Setting-a-background-video-or-image',
    firefox: 'Setting-' + appName + '-as-your-Firefox-homepage'
  }
};

supportSetting.support = (parent) => {

  const makeLinks = () => {

    const wrap = form.wrap();

    const list = node('ul|class:list-feature');

    for (var key in supportSetting.link.page) {

      const supportLink = new Link({
        text: supportSetting.link.page[key].replace(/-/g, ' '),
        href: supportSetting.link.url + supportSetting.link.page[key],
        openNew: true
      });

      list.appendChild(node('li', [supportLink.link()]));

    };

    wrap.appendChild(list);

    return wrap;

  };

  const para = node('p');

  para.innerHTML = `For more support or feedback, submit an ${(new Link({ text:'Issue', href: `https://github.com/zombieFox/${appName}/issues`, openNew: true })).link().outerHTML} or check the ${(new Link({ text:'Wiki', href: `https://github.com/zombieFox/${appName}/wiki`, openNew: true })).link().outerHTML}.`;

  parent.appendChild(
    node('div', [
      makeLinks(),
      node('hr'),
      para
    ])
  );

};

export { supportSetting }
