import { easterEgg } from '../easterEgg';

import { node } from '../../utility/node';

import './index.css';

export const Logo = function() {

  this.element = {
    logo: node('div|class:logo'),
    svg: '<svg class="logo-shapes" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">' +
      '<circle cx="256" cy="256" r="256" class="logo-circle"/>' +
      '<path d="M374 224H138C132.477 224 128 228.477 128 234V278C128 283.523 132.477 288 138 288H374C379.523 288 384 283.523 384 278V234C384 228.477 379.523 224 374 224Z" class="logo-cross-x"/>' +
      '<path d="M278 128H234C228.477 128 224 132.477 224 138V374C224 379.523 228.477 384 234 384H278C283.523 384 288 379.523 288 374V138C288 132.477 283.523 128 278 128Z" class="logo-cross-y"/>' +
      '</svg>'
  };

  this.assemble = () => {

    this.element.logo.innerHTML = this.element.svg;

  };

  this.bind = () => {

    this.element.logo.addEventListener('dblclick', () => { easterEgg.toaster.bind.add(); });

  };

  this.logo = () => {
    return this.element.logo;
  };

  this.assemble();

  this.bind();

};
