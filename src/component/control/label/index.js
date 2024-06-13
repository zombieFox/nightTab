import * as form from '../../form';

export const Control_label = function({
  text = 'Label',
  description = false,
  srOnly = false,
  icon = false,
  noPadding = false,
  classList = []
} = {}) {

  this.label = form.label({
    text: text,
    description: description,
    srOnly: srOnly,
    icon: icon,
    noPadding: noPadding,
    classList: classList
  });

  this.disable = () => {
    this.label.classList.add('disabled');
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
  };

  this.wrap = () => {
    const formWrap = form.wrap({
      children: this.label
    });

    return formWrap;
  };

};
