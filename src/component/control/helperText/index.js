
import * as form from '../../form';



export const Control_helperText = function ({
  text = [],
  complexText = false
} = {}) {

  this.para = [];

  text.forEach((item) => {
    this.para.push(form.helper({
      tag: 'p',
      text: item,
      complexText: complexText
    }));
  });

  this.wrap = () => {
    const formWrap = form.wrap();

    this.para.forEach((item) => {
      formWrap.appendChild(item);
    });

    return formWrap;
  };

  this.disable = () => {
    this.para.forEach((item) => {
      item.classList.add('disabled');
    });
  };

  this.enable = () => {
    this.para.forEach((item) => {
      item.classList.remove('disabled');
    });
  };

};
