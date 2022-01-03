import { message } from '../message';

import { bookmark } from '../bookmark';

import * as form from '../form';

import { Button } from '../button';

import { Control_checkbox } from '../control/checkbox';
import { Control_text } from '../control/text';
import { Control_select } from '../control/select';

import { node } from '../../utility/node';
import { ordinalNumber } from '../../utility/ordinalNumber';
import { randomString } from '../../utility/randomString';
import { randomNumber } from '../../utility/randomNumber';

import './index.css';

export const GroupForm = function({
  groupData = false
} = {}) {

  this.element = {
    form: node('form|class:group-form'),
    main: node('div|class:group-form-main')
  };

  this.selectOption = {};

  this.selectOption.group = () => {

    const option = [];

    if (bookmark.all.length > 0) {

      let count = bookmark.all.length;

      if (groupData.type.new) {
        count++;
      }

      for (var i = 1; i <= count; i++) {

        option.push(ordinalNumber(i));

      }

    } else {

      option.push(ordinalNumber(1));

    }

    return option;

  };

  this.control = {};

  this.control.group = {
    name: {
      show: new Control_checkbox({
        object: groupData.group,
        path: 'name.show',
        id: 'name-show',
        labelText: message('groupFormNameShow'),
        action: () => {
          this.disable();
        }
      }),
      text: new Control_text({
        object: groupData.group,
        path: 'name.text',
        id: 'name-text',
        value: groupData.group.name.text,
        placeholder: message('groupFormNameTextPlaceholder'),
        labelText: message('groupFormNameTextLabel'),
        srOnly: true
      }),
      random: new Button({
        text: message('groupFormNameRandom'),
        style: ['line'],
        func: () => {
          groupData.group.name.text = randomString({ adjectivesCount: randomNumber(1, 3) });
          this.control.group.name.text.update();
        }
      })
    },
    collapse: {
      show: new Control_checkbox({
        object: groupData.group,
        path: 'toolbar.collapse.show',
        id: 'toolbar-collapse-show',
        labelText: message('groupFormCollapseShowLabel'),
        description: message('groupFormCollapseShowDescription')
      })
    },
    openAll: {
      show: new Control_checkbox({
        object: groupData.group,
        path: 'toolbar.openAll.show',
        id: 'toolbar-openAll-show',
        labelText: message('groupFormOpenAllShowLabel'),
        description: message('groupFormOpenAllShowDescription')
      })
    }
  };

  this.control.destination = new Control_select({
    object: groupData,
    path: 'position.destination',
    id: 'position-destination',
    labelText: message('groupFormDestination'),
    option: this.selectOption.group(),
    selected: groupData.position.destination
  });

  this.disable = () => {

    if (groupData.group.name.show) {
      this.control.group.name.text.enable();
      this.control.group.name.random.enable();
    } else {
      this.control.group.name.text.disable();
      this.control.group.name.random.disable();
    }

  };

  this.update = () => {
    this.control.group.name.text.update();
    this.control.group.name.show.update();
  };

  this.assemble = () => {

    this.element.main.appendChild(
      form.fieldset({
        children: [
          form.wrap({
            children: [
              node('div|class:group-form-description', [
                node(`h2:${message('groupFormSectionNameHeading')}`),
                node(`p:${message('groupFormSectionNameDescription')}`)
              ])
            ]
          }),
          form.wrap({
            children: [
              form.indent({
                children: [
                  this.control.group.name.show.wrap(),
                  form.wrap({
                    children: [
                      form.indent({
                        children: [
                          this.control.group.name.text.wrap(),
                          this.control.group.name.random.wrap()
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    );

    this.element.main.appendChild(
      node('hr'),
    );

    this.element.main.appendChild(
      form.fieldset({
        children: [
          form.wrap({
            children: [
              node('div|class:group-form-description', [
                node(`h2:${message('groupFormSectionToolbarHeading')}`),
                node(`p:${message('groupFormSectionToolbarDescription')}`)
              ])
            ]
          }),
          form.wrap({
            children: [
              form.indent({
                children: [
                  this.control.group.collapse.show.wrap(),
                  this.control.group.openAll.show.wrap()
                ]
              })
            ]
          })
        ]
      })
    );

    this.element.main.appendChild(
      node('hr'),
    );

    this.element.main.appendChild(
      form.fieldset({
        children: [
          form.wrap({
            children: [
              node('div|class:group-form-description', [
                node(`h2:${message('groupFormSectionOrderingHeading')}`),
                node(`p:${message('groupFormSectionOrderingDescription')}`)
              ])
            ]
          }),
          form.wrap({
            children: [
              form.indent({
                children: [
                  this.control.destination.wrap()
                ]
              })
            ]
          })
        ]
      })
    );

    this.element.form.appendChild(this.element.main);

    this.bind();

  };

  this.bind = () => {

    this.element.form.addEventListener('keydown', (event) => {

      if (event.keyCode == 13) { event.preventDefault(); return false; }

    });

  };

  this.form = () => {

    return this.element.form;

  };

  this.assemble();

  this.disable();

  this.update();

};
