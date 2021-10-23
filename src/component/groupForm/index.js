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
      text: new Control_text({
        object: groupData.group,
        path: 'name.text',
        id: 'name-text',
        value: groupData.group.name.text,
        placeholder: 'Example group',
        labelText: 'Group name',
        srOnly: true
      }),
      show: new Control_checkbox({
        object: groupData.group,
        path: 'name.show',
        id: 'name-show',
        labelText: 'Show Group name',
        action: () => {
          this.disable();
        }
      }),
      random: new Button({
        text: 'Random Group name',
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
        labelText: 'Show Collapse',
        description: 'The Collapse button will show or hide the Bookmaks in this Group.'
      })
    },
    openAll: {
      show: new Control_checkbox({
        object: groupData.group,
        path: 'toolbar.openAll.show',
        id: 'toolbar-openAll-show',
        labelText: 'Show Open all',
        description: 'Open all button will appear if there is at least one Bookmark in this Group.'
      })
    }
  };

  this.control.destination = new Control_select({
    object: groupData,
    path: 'position.destination',
    id: 'position-destination',
    labelText: 'Position',
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
                node('h2:Name'),
                node('p:Display a Name above this Group.')
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
                node('h2:Toolbar'),
                node('p:Display controls to open all or show/hide the Bookmarks in this Group.')
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
                node('h2:Ordering'),
                node('p:The position of this Group.')
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
