import { version } from '../version';
import { node } from '../../utility/node';

import { Logo } from '../logo';

import { APP_NAME } from '../../constant';

import './index.css';

export const Splash = function() {

  this.logo = new Logo();

  this.element = {
    splash: node('div|class:splash'),
    logo: node('div|class:splash-logo'),
    description: {
      description: node('div|class:splash-description'),
      name: node('h1:' + APP_NAME + '|class:splash-name'),
      versionName: node('p:' + version.name + '|class:splash-version-name small'),
      versionNumber: node('p:Version ' + version.number + '|class:splash-version-number')
    }
  };

  this.assemble = () => {

    this.element.logo.appendChild(this.logo.logo());

    this.element.splash.appendChild(this.element.logo);

    this.element.description.description.appendChild(this.element.description.name);

    this.element.description.description.appendChild(this.element.description.versionNumber);

    this.element.description.description.appendChild(this.element.description.versionName);

    this.element.splash.appendChild(this.element.description.description);

  };

  this.splash = () => {
    return this.element.splash;
  };

  this.assemble();

};
