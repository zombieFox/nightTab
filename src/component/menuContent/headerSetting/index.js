import { message } from '../../message';

import { state } from '../../state';
import { data } from '../../data';
import { header } from '../../header';
import { layout } from '../../layout';
import { searchEnginePreset } from '../../searchEnginePreset';

import * as form from '../../form';

import { Collapse } from '../../collapse';
import { Edge } from '../../edge';

import { Control_helperText } from '../../control/helperText';
import { Control_radio } from '../../control/radio';
import { Control_radioGrid } from '../../control/radioGrid';
import { Control_checkbox } from '../../control/checkbox';
import { Control_sliderSlim } from '../../control/sliderSlim';
import { Control_text } from '../../control/text';
import { Control_textReset } from '../../control/textReset';

import { node } from '../../../utility/node';
import { applyCSSVar } from '../../../utility/applyCSSVar';
import { applyCSSClass } from '../../../utility/applyCSSClass';
import { applyCSSState } from '../../../utility/applyCSSState';

const headerSetting = {};

headerSetting.control = {
  alignment: {},
  greeting: {},
  transitional: {},
  clock: {},
  date: {},
  search: {}
};

headerSetting.disable = () => {

  if (state.get.current().header.greeting.show) {
    headerSetting.control.greeting.size.enable();
    headerSetting.control.greeting.newLine.enable();
    headerSetting.control.greeting.type.enable();
    headerSetting.control.greeting.name.enable();
  } else {
    headerSetting.control.greeting.size.disable();
    headerSetting.control.greeting.newLine.disable();
    headerSetting.control.greeting.type.disable();
    headerSetting.control.greeting.name.disable();
  }

  if (state.get.current().header.greeting.show) {

    switch (state.get.current().header.greeting.type) {

      case 'good':
      case 'hello':
      case 'hi':
        headerSetting.control.greeting.custom.text.disable();
        break;

      case 'custom':
        headerSetting.control.greeting.custom.text.enable();
        break;

    }

  } else {

    headerSetting.control.greeting.custom.text.disable();

  }

  if (state.get.current().header.clock.second.show ||
    state.get.current().header.clock.minute.show ||
    state.get.current().header.clock.hour.show) {

    headerSetting.control.clock.hour24.show.enable();
    headerSetting.control.clock.size.enable();
    headerSetting.control.clock.newLine.enable();

    if (state.get.current().header.clock.second.show) {
      headerSetting.control.clock.second.display.enable();
    } else {
      headerSetting.control.clock.second.display.disable();
    }

    if (state.get.current().header.clock.hour.show) {
      headerSetting.control.clock.hour.display.enable();
    } else {
      headerSetting.control.clock.hour.display.disable();
    }

    if (state.get.current().header.clock.second.show) {
      headerSetting.control.clock.second.display.enable();
    } else {
      headerSetting.control.clock.second.display.disable();
    }

    if (state.get.current().header.clock.hour24.show) {
      headerSetting.control.clock.meridiem.show.disable();
    } else {
      headerSetting.control.clock.meridiem.show.enable();
    }

  } else {

    headerSetting.control.clock.hour24.show.disable();
    headerSetting.control.clock.meridiem.show.disable();
    headerSetting.control.clock.size.disable();
    headerSetting.control.clock.newLine.disable();

  }

  if ([state.get.current().header.clock.second.show, state.get.current().header.clock.minute.show, state.get.current().header.clock.hour.show].filter(Boolean).length > 1) {

    headerSetting.control.clock.separator.show.enable();

  } else {

    headerSetting.control.clock.separator.show.disable();

  }

  if (
    [state.get.current().header.clock.second.show, state.get.current().header.clock.minute.show, state.get.current().header.clock.hour.show].filter(Boolean).length > 1 &&
    state.get.current().header.clock.separator.show
  ) {

    headerSetting.control.clock.separator.text.enable();

  } else {

    headerSetting.control.clock.separator.text.disable();

  }

  if (
    (state.get.current().header.clock.second.show && state.get.current().header.clock.minute.show) ||
    (state.get.current().header.clock.second.show && state.get.current().header.clock.hour.show) ||
    (state.get.current().header.clock.minute.show && state.get.current().header.clock.hour.show)
  ) {

    headerSetting.control.clock.separator.show.enable();

  } else {

    headerSetting.control.clock.separator.show.disable();

  }

  if (
    ((state.get.current().header.clock.second.show && state.get.current().header.clock.minute.show) ||
      (state.get.current().header.clock.second.show && state.get.current().header.clock.hour.show) ||
      (state.get.current().header.clock.minute.show && state.get.current().header.clock.hour.show)) &&
    state.get.current().header.clock.separator.show
  ) {

    headerSetting.control.clock.separator.text.enable();

  } else {

    headerSetting.control.clock.separator.text.disable();

  }

  if (state.get.current().header.date.day.show ||
    state.get.current().header.date.date.show ||
    state.get.current().header.date.month.show ||
    state.get.current().header.date.year.show) {

    headerSetting.control.date.size.enable();
    headerSetting.control.date.newLine.enable();

  } else {

    headerSetting.control.date.size.disable();
    headerSetting.control.date.newLine.disable();

  }

  if (state.get.current().header.date.date.show && state.get.current().header.date.month.show) {

    headerSetting.control.date.format.enable();

  } else {

    headerSetting.control.date.format.disable();

  }

  if (state.get.current().header.date.day.show) {

    headerSetting.control.date.day.display.enable();

    switch (state.get.current().header.date.day.display) {

      case 'word':
        headerSetting.control.date.day.length.enable();
        headerSetting.control.date.day.weekStart.disable();
        break;

      case 'number':
        headerSetting.control.date.day.length.disable();
        headerSetting.control.date.day.weekStart.enable();
        break;

    }

  } else {

    headerSetting.control.date.day.display.disable();
    headerSetting.control.date.day.length.disable();
    headerSetting.control.date.day.weekStart.disable();

  }

  if (state.get.current().header.date.date.show) {

    headerSetting.control.date.date.display.enable();
    headerSetting.control.date.date.ordinal.enable();

  } else {

    headerSetting.control.date.date.display.disable();
    headerSetting.control.date.date.ordinal.disable();

  }

  if (state.get.current().header.date.month.show) {

    switch (state.get.current().header.date.month.display) {

      case 'word':
        headerSetting.control.date.month.ordinal.disable();
        headerSetting.control.date.month.length.enable();
        break;

      case 'number':
        headerSetting.control.date.month.ordinal.enable();
        headerSetting.control.date.month.length.disable();
        break;

    }

    headerSetting.control.date.month.display.enable();

  } else {

    headerSetting.control.date.month.display.disable();
    headerSetting.control.date.month.ordinal.disable();
    headerSetting.control.date.month.length.disable();

  }

  if (state.get.current().header.date.year.show) {

    headerSetting.control.date.year.display.enable();

  } else {

    headerSetting.control.date.year.display.disable();

  }

  if ([state.get.current().header.date.day.show, state.get.current().header.date.date.show, state.get.current().header.date.month.show, state.get.current().header.date.year.show].filter(Boolean).length > 1) {

    headerSetting.control.date.separator.show.enable();

  } else {

    headerSetting.control.date.separator.show.disable();

  }

  if (
    [state.get.current().header.date.day.show, state.get.current().header.date.date.show, state.get.current().header.date.month.show, state.get.current().header.date.year.show].filter(Boolean).length > 1 &&
    state.get.current().header.date.separator.show
  ) {

    headerSetting.control.date.separator.text.enable();

  } else {

    headerSetting.control.date.separator.text.disable();

  }

  if (
    state.get.current().header.clock.second.show ||
    state.get.current().header.clock.minute.show ||
    state.get.current().header.clock.hour.show ||
    state.get.current().header.date.day.show ||
    state.get.current().header.date.date.show ||
    state.get.current().header.date.month.show ||
    state.get.current().header.date.year.show
  ) {
    headerSetting.control.transitional.show.enable();
    headerSetting.control.transitional.newLine.enable();
  } else {
    headerSetting.control.transitional.show.disable();
    headerSetting.control.transitional.newLine.disable();
  }

  if ((
    state.get.current().header.clock.second.show ||
      state.get.current().header.clock.minute.show ||
      state.get.current().header.clock.hour.show ||
      state.get.current().header.date.day.show ||
      state.get.current().header.date.date.show ||
      state.get.current().header.date.month.show ||
      state.get.current().header.date.year.show
  ) &&
    state.get.current().header.transitional.show) {
    headerSetting.control.transitional.type.enable();
    headerSetting.control.transitional.size.enable();
    headerSetting.control.transitional.newLine.enable();
  } else {
    headerSetting.control.transitional.type.disable();
    headerSetting.control.transitional.size.disable();
    headerSetting.control.transitional.newLine.disable();
  }

  if (state.get.current().header.search.show) {
    headerSetting.control.search.width.by.enable();
    headerSetting.control.search.newTab.enable();
    headerSetting.control.search.size.enable();
    headerSetting.control.search.newLine.enable();
  } else {
    headerSetting.control.search.width.by.disable();
    headerSetting.control.search.newTab.disable();
    headerSetting.control.search.size.disable();
    headerSetting.control.search.newLine.disable();
  }

  if (state.get.current().header.search.show) {

    switch (state.get.current().header.search.width.by) {

      case 'auto':
        headerSetting.control.search.width.size.disable();
        break;


      case 'custom':
        headerSetting.control.search.width.size.enable();
        break;

    }

  } else {

    headerSetting.control.search.width.size.disable();

  }

  switch (state.get.current().header.search.engine.selected) {

    case 'custom':
      headerSetting.control.search.engine.custom.name.enable();
      headerSetting.control.search.engine.custom.url.enable();
      headerSetting.control.search.engine.custom.urlHelper.enable();
      headerSetting.control.search.engine.custom.queryName.enable();
      headerSetting.control.search.engine.custom.queryNameHelper.enable();
      break;

    default:
      headerSetting.control.search.engine.custom.name.disable();
      headerSetting.control.search.engine.custom.url.disable();
      headerSetting.control.search.engine.custom.urlHelper.disable();
      headerSetting.control.search.engine.custom.queryName.disable();
      headerSetting.control.search.engine.custom.queryNameHelper.disable();
      break;

  }

};

headerSetting.edge = {
  alignment: {},
  greeting: {},
  transitional: {},
  clock: {},
  date: {},
  search: {}
};

headerSetting.update = () => {

  for (let key in headerSetting.control) {

    headerSetting.control[key].forEach((item) => {
      item.update();
    });

  }

};

headerSetting.alignment = (parent) => {

  headerSetting.alignment.alignment = new Control_radioGrid({
    object: state.get.current(),
    radioGroup: [
      { id: 'header-item-justify-left', labelText: message.get('menuContentHeaderAlignmentJustifyLeft'), value: 'left', position: 1 },
      { id: 'header-item-justify-center', labelText: message.get('menuContentHeaderAlignmentJustifyCenter'), value: 'center', position: 2 },
      { id: 'header-item-justify-right', labelText: message.get('menuContentHeaderAlignmentJustifyRight'), value: 'right', position: 3 }
    ],
    label: message.get('menuContentHeaderAlignmentJustifyLabel'),
    groupName: 'header-item-justify',
    path: 'header.item.justify',
    gridSize: '3x1',
    action: () => {
      applyCSSClass('header.item.justify');
      data.save();
    }
  });

  headerSetting.alignment.alignmentHelper = new Control_helperText({
    complexText: true,
    text: [message.get('menuContentHeaderAlignmentHelperPara1')]
  });

  parent.appendChild(
    node('div', [
      headerSetting.alignment.alignment.wrap(),
      headerSetting.alignment.alignmentHelper.wrap()
    ])
  );

};

headerSetting.greeting = (parent) => {

  headerSetting.edge.greeting.size = new Edge({ primary: header.element.greeting.greeting(), secondary: [header.element.area] });

  headerSetting.control.greeting.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.greeting.show',
    id: 'header-greeting-show',
    labelText: message.get('menuContentHeaderGreetingShow'),
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.disable();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      headerSetting.control.greeting.collapse.update();
      data.save();
    }
  });

  headerSetting.control.greeting.size = new Control_sliderSlim({
    object: state.get.current(),
    path: 'header.greeting.size',
    id: 'header-greeting-size',
    labelText: message.get('menuContentHeaderGreetingSize'),
    value: state.get.current().header.greeting.size,
    defaultValue: state.get.default().header.greeting.size,
    min: state.get.minMax().header.greeting.size.min,
    max: state.get.minMax().header.greeting.size.max,
    action: () => {
      applyCSSVar('header.greeting.size');
      headerSetting.edge.greeting.size.track();
      data.save();
    },
    mouseDownAction: () => {
      headerSetting.edge.greeting.size.show();
    },
    mouseUpAction: () => {
      headerSetting.edge.greeting.size.hide();
    }
  });

  headerSetting.control.greeting.newLine = new Control_checkbox({
    object: state.get.current(),
    path: 'header.greeting.newLine',
    id: 'header-greeting-newLine',
    labelText: message.get('menuContentHeaderGreetingNewLineLabel'),
    description: message.get('menuContentHeaderGreetingNewLineDescription'),
    action: () => {
      applyCSSState('header.greeting.newLine');
      data.save();
    }
  });

  headerSetting.control.greeting.type = new Control_radio({
    object: state.get.current(),
    label: message.get('menuContentHeaderGreetingTypeLabel'),
    radioGroup: [
      { id: 'header-greeting-type-good', labelText: message.get('menuContentHeaderGreetingTypeGood'), value: 'good' },
      { id: 'header-greeting-type-hello', labelText: message.get('menuContentHeaderGreetingTypeHello'), value: 'hello' },
      { id: 'header-greeting-type-hi', labelText: message.get('menuContentHeaderGreetingTypeHi'), value: 'hi' },
      { id: 'header-greeting-type-none', labelText: message.get('menuContentHeaderGreetingTypeNoneLabel'), description: message.get('menuContentHeaderGreetingTypeNoneDescription'), value: 'none' },
      { id: 'header-greeting-type-custom', labelText: message.get('menuContentHeaderGreetingTypeCustomLabel'), description: [message.get('menuContentHeaderGreetingTypeCustomDescriptionPara1'), message.get('menuContentHeaderGreetingTypeCustomDescriptionPara2')], value: 'custom' }
    ],
    groupName: 'header-greeting-type',
    path: 'header.greeting.type',
    action: () => {
      header.element.greeting.update();
      headerSetting.control.greeting.custom.collapse.update();
      headerSetting.disable();
      data.save();
    }
  });

  headerSetting.control.greeting.custom = {};

  headerSetting.control.greeting.custom.text = new Control_text({
    object: state.get.current(),
    path: 'header.greeting.custom',
    id: 'header-greeting-custom',
    value: state.get.current().header.greeting.custom,
    placeholder: message.get('menuContentHeaderGreetingCustomPlaceholder'),
    labelText: message.get('menuContentHeaderGreetingCustomLabel'),
    srOnly: true,
    action: () => {
      header.element.greeting.update();
      data.save();
    }
  });

  headerSetting.control.greeting.custom.area = node('div', [
    headerSetting.control.greeting.custom.text.wrap()
  ]);

  headerSetting.control.greeting.custom.collapse = new Collapse({
    type: 'radio',
    radioGroup: headerSetting.control.greeting.type,
    target: [{
      id: headerSetting.control.greeting.type.radioSet[headerSetting.control.greeting.type.radioSet.length - 1].radio.value,
      content: headerSetting.control.greeting.custom.area
    }]
  });

  headerSetting.control.greeting.name = new Control_text({
    object: state.get.current(),
    path: 'header.greeting.name',
    id: 'header-greeting-name',
    value: state.get.current().header.greeting.name,
    placeholder: message.get('menuContentHeaderGreetingNamePlaceholder'),
    labelText: message.get('menuContentHeaderGreetingNameLabel'),
    action: () => {
      header.element.greeting.update();
      data.save();
    }
  });

  headerSetting.control.greeting.area = node('div', [
    headerSetting.control.greeting.type.wrap(),
    form.wrap({
      children: [
        form.indent({
          children: [
            headerSetting.control.greeting.custom.collapse.collapse()
          ]
        })
      ]
    }),
    node('hr'),
    headerSetting.control.greeting.name.wrap(),
    node('hr'),
    headerSetting.control.greeting.size.wrap(),
    node('hr'),
    headerSetting.control.greeting.newLine.wrap()
  ]);

  headerSetting.control.greeting.collapse = new Collapse({
    type: 'checkbox',
    checkbox: headerSetting.control.greeting.show,
    target: [{
      content: headerSetting.control.greeting.area
    }]
  });

  parent.appendChild(
    node('div', [
      headerSetting.control.greeting.show.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              headerSetting.control.greeting.collapse.collapse()
            ]
          })
        ]
      })
    ])
  );

};

headerSetting.transitional = (parent) => {

  headerSetting.edge.transitional.size = new Edge({ primary: header.element.transitional.transitional(), secondary: [header.element.area] });

  headerSetting.control.transitional.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.transitional.show',
    id: 'header-transitional-show',
    labelText: message.get('menuContentHeaderTransitionalShowLabel'),
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.disable();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      headerSetting.control.transitional.collapse.update();
      data.save();
    }
  });

  headerSetting.control.transitional.showHelper = new Control_helperText({
    text: [message.get('menuContentHeaderTransitionalShowHelperPara1')]
  });

  headerSetting.control.transitional.type = new Control_radio({
    object: state.get.current(),
    label: message.get('menuContentHeaderTransitionalTypeLabel'),
    radioGroup: [
      { id: 'header-transitional-type-time-and-date', labelText: message.get('menuContentHeaderTransitionalTypeTimeAndDate'), value: 'time-and-date' },
      { id: 'header-transitional-type-its', labelText: message.get('menuContentHeaderTransitionalTypeIts'), value: 'its' }
    ],
    groupName: 'header-transitional-type',
    path: 'header.transitional.type',
    action: () => {
      header.element.transitional.update();
      headerSetting.disable();
      data.save();
    }
  });

  headerSetting.control.transitional.size = new Control_sliderSlim({
    object: state.get.current(),
    path: 'header.transitional.size',
    id: 'header-transitional-size',
    labelText: message.get('menuContentHeaderTransitionalSize'),
    value: state.get.current().header.transitional.size,
    defaultValue: state.get.default().header.transitional.size,
    min: state.get.minMax().header.transitional.size.min,
    max: state.get.minMax().header.transitional.size.max,
    action: () => {
      applyCSSVar('header.transitional.size');
      headerSetting.edge.transitional.size.track();
      data.save();
    },
    mouseDownAction: () => {
      headerSetting.edge.transitional.size.show();
    },
    mouseUpAction: () => {
      headerSetting.edge.transitional.size.hide();
    }
  });

  headerSetting.control.transitional.newLine = new Control_checkbox({
    object: state.get.current(),
    path: 'header.transitional.newLine',
    id: 'header-transitional-newLine',
    labelText: message.get('menuContentHeaderTransitionalNewLineLabel'),
    description: message.get('menuContentHeaderTransitionalNewLineDescription'),
    action: () => {
      applyCSSState('header.transitional.newLine');
      data.save();
    }
  });

  headerSetting.control.transitional.area = node('div', [
    headerSetting.control.transitional.type.wrap(),
    node('hr'),
    headerSetting.control.transitional.size.wrap(),
    node('hr'),
    headerSetting.control.transitional.newLine.wrap()
  ]);

  headerSetting.control.transitional.collapse = new Collapse({
    type: 'checkbox',
    checkbox: headerSetting.control.transitional.show,
    target: [{
      content: headerSetting.control.transitional.area
    }]
  });

  parent.appendChild(
    node('div', [
      headerSetting.control.transitional.show.wrap(),
      headerSetting.control.transitional.showHelper.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              headerSetting.control.transitional.collapse.collapse()
            ]
          })
        ]
      })
    ])
  );

};

headerSetting.clock = (parent) => {

  headerSetting.edge.clock.size = new Edge({ primary: header.element.clock.clock(), secondary: [header.element.area] });

  headerSetting.control.clock.hour = {};

  headerSetting.control.clock.hour.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.clock.hour.show',
    id: 'header-clock-hour-show',
    labelText: message.get('menuContentHeaderClockHourShow'),
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.disable();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      headerSetting.control.clock.hour.collapse.update();
      headerSetting.control.clock.collapse.update();
      data.save();
    }
  });

  headerSetting.control.clock.hour.display = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'header-clock-hour-display-number', labelText: message.get('menuContentHeaderClockHourDisplayNumber'), value: 'number' },
      { id: 'header-clock-hour-display-word', labelText: message.get('menuContentHeaderClockHourDisplayWord'), value: 'word' }
    ],
    groupName: 'header-clock-hour-display',
    path: 'header.clock.hour.display',
    action: () => {
      header.element.clock.update();
      data.save();
    }
  });

  headerSetting.control.clock.hour.area = node('div', [
    headerSetting.control.clock.hour.display.wrap()
  ]);

  headerSetting.control.clock.hour.collapse = new Collapse({
    type: 'checkbox',
    checkbox: headerSetting.control.clock.hour.show,
    target: [{
      content: headerSetting.control.clock.hour.area
    }]
  });

  headerSetting.control.clock.minute = {};

  headerSetting.control.clock.minute.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.clock.minute.show',
    id: 'header-clock-minute-show',
    labelText: message.get('menuContentHeaderClockMinuteShow'),
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.disable();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      headerSetting.control.clock.minute.collapse.update();
      headerSetting.control.clock.collapse.update();
      data.save();
    }
  });

  headerSetting.control.clock.minute.display = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'header-clock-minute-display-number', labelText: message.get('menuContentHeaderClockMinuteDisplayNumber'), value: 'number' },
      { id: 'header-clock-minute-display-word', labelText: message.get('menuContentHeaderClockMinuteDisplayWord'), value: 'word' }
    ],
    groupName: 'header-clock-minute-display',
    path: 'header.clock.minute.display',
    action: () => {
      header.element.clock.update();
      data.save();
    }
  });

  headerSetting.control.clock.minute.area = node('div', [
    headerSetting.control.clock.minute.display.wrap()
  ]);

  headerSetting.control.clock.minute.collapse = new Collapse({
    type: 'checkbox',
    checkbox: headerSetting.control.clock.minute.show,
    target: [{
      content: headerSetting.control.clock.minute.area
    }]
  });

  headerSetting.control.clock.second = {};

  headerSetting.control.clock.second.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.clock.second.show',
    id: 'header-clock-second-show',
    labelText: message.get('menuContentHeaderClockSecondShow'),
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.disable();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      headerSetting.control.clock.second.collapse.update();
      headerSetting.control.clock.collapse.update();
      data.save();
    }
  });

  headerSetting.control.clock.second.display = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'header-clock-second-display-number', labelText: message.get('menuContentHeaderClockSecondDisplayNumber'), value: 'number' },
      { id: 'header-clock-second-display-word', labelText: message.get('menuContentHeaderClockSecondDisplayWord'), value: 'word' }
    ],
    groupName: 'header-clock-second-display',
    path: 'header.clock.second.display',
    action: () => {
      header.element.clock.update();
      data.save();
    }
  });

  headerSetting.control.clock.second.area = node('div', [
    headerSetting.control.clock.second.display.wrap()
  ]);

  headerSetting.control.clock.second.collapse = new Collapse({
    type: 'checkbox',
    checkbox: headerSetting.control.clock.second.show,
    target: [{
      content: headerSetting.control.clock.second.area
    }]
  });

  headerSetting.control.clock.separator = {};

  headerSetting.control.clock.separator.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.clock.separator.show',
    id: 'header-clock-separator-show',
    labelText: message.get('menuContentHeaderClockSeparatorShow'),
    action: () => {
      header.element.clock.update();
      headerSetting.control.clock.separator.collapse.update();
      headerSetting.disable();
      data.save();
    }
  });

  headerSetting.control.clock.separator.text = new Control_textReset({
    object: state.get.current(),
    path: 'header.clock.separator.text',
    id: 'header-clock-separator-text',
    value: state.get.current().header.clock.separator.text,
    defaultValue: state.get.default().header.clock.separator.text,
    placeholder: message.get('menuContentHeaderClockSeparatorPlaceholder'),
    labelText: message.get('menuContentHeaderClockSeparatorLabel'),
    srOnly: true,
    action: () => {
      header.element.clock.update();
      data.save();
    }
  });

  headerSetting.control.clock.separator.area = node('div', [
    headerSetting.control.clock.separator.text.wrap()
  ]);

  headerSetting.control.clock.separator.collapse = new Collapse({
    type: 'checkbox',
    checkbox: headerSetting.control.clock.separator.show,
    target: [{
      content: headerSetting.control.clock.separator.area
    }]
  });

  headerSetting.control.clock.hour24 = {
    show: new Control_checkbox({
      object: state.get.current(),
      path: 'header.clock.hour24.show',
      id: 'header-clock-hour24-show',
      labelText: message.get('menuContentHeaderClockHour24'),
      action: () => {
        header.element.clock.update();
        headerSetting.disable();
        data.save();
      }
    })
  };

  headerSetting.control.clock.meridiem = {
    show: new Control_checkbox({
      object: state.get.current(),
      path: 'header.clock.meridiem.show',
      id: 'header-clock-meridiem-show',
      labelText: message.get('menuContentHeaderClockMeridiem'),
      action: () => {
        header.element.clock.update();
        data.save();
      }
    })
  };

  headerSetting.control.clock.size = new Control_sliderSlim({
    object: state.get.current(),
    path: 'header.clock.size',
    id: 'header-clock-size',
    labelText: message.get('menuContentHeaderClockSize'),
    value: state.get.current().header.clock.size,
    defaultValue: state.get.default().header.clock.size,
    min: state.get.minMax().header.clock.size.min,
    max: state.get.minMax().header.clock.size.max,
    action: () => {
      applyCSSVar('header.clock.size');
      headerSetting.edge.clock.size.track();
      data.save();
    },
    mouseDownAction: () => {
      headerSetting.edge.clock.size.show();
    },
    mouseUpAction: () => {
      headerSetting.edge.clock.size.hide();
    }
  });

  headerSetting.control.clock.newLine = new Control_checkbox({
    object: state.get.current(),
    path: 'header.clock.newLine',
    id: 'header-clock-newLine',
    labelText: message.get('menuContentHeaderClockNewLineLabel'),
    description: message.get('menuContentHeaderClockNewLineDescription'),
    action: () => {
      applyCSSState('header.clock.newLine');
      data.save();
    }
  });

  headerSetting.control.clock.area = node('div', [
    node('hr'),
    headerSetting.control.clock.separator.show.wrap(),
    form.wrap({
      children: [
        form.indent({
          children: [
            headerSetting.control.clock.separator.collapse.collapse()
          ]
        })
      ]
    }),
    node('hr'),
    headerSetting.control.clock.hour24.show.wrap(),
    headerSetting.control.clock.meridiem.show.wrap(),
    node('hr'),
    headerSetting.control.clock.size.wrap(),
    node('hr'),
    headerSetting.control.clock.newLine.wrap()
  ]);

  headerSetting.control.clock.collapse = new Collapse({
    type: 'checkbox',
    checkbox: [headerSetting.control.clock.hour.show, headerSetting.control.clock.minute.show, headerSetting.control.clock.second.show],
    target: [{
      content: headerSetting.control.clock.area
    }]
  });

  parent.appendChild(
    node('div', [
      headerSetting.control.clock.hour.show.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              headerSetting.control.clock.hour.collapse.collapse()
            ]
          })
        ]
      }),
      headerSetting.control.clock.minute.show.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              headerSetting.control.clock.minute.collapse.collapse()
            ]
          })
        ]
      }),
      headerSetting.control.clock.second.show.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              headerSetting.control.clock.second.collapse.collapse()
            ]
          })
        ]
      }),
      form.wrap({
        children: [
          form.indent({
            children: [
              headerSetting.control.clock.collapse.collapse()
            ]
          })
        ]
      })
    ])
  );

};

headerSetting.date = (parent) => {

  headerSetting.edge.date.size = new Edge({ primary: header.element.date.date(), secondary: [header.element.area] });

  headerSetting.control.date.day = {};

  headerSetting.control.date.day.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.date.day.show',
    id: 'header-date-day-show',
    labelText: message.get('menuContentHeaderDateDayShow'),
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.disable();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      headerSetting.control.date.day.collapse.update();
      headerSetting.control.date.collapse.update();
      data.save();
    }
  });

  headerSetting.control.date.day.display = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'header-date-day-display-number', labelText: message.get('menuContentHeaderDateDayDisplayNumber'), value: 'number' },
      { id: 'header-date-day-display-word', labelText: message.get('menuContentHeaderDateDayDisplayWord'), value: 'word' }
    ],
    groupName: 'header-date-day-display',
    path: 'header.date.day.display',
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.disable();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      data.save();
    }
  });

  headerSetting.control.date.day.weekStart = new Control_radio({
    object: state.get.current(),
    label: message.get('menuContentHeaderDateDayDisplayWeekStartLabel'),
    radioGroup: [
      { id: 'header-date-day-week-start-monday', labelText: message.get('menuContentHeaderDateDayDisplayWeekStartMonday'), value: 'monday' },
      { id: 'header-date-day-week-start-sunday', labelText: message.get('menuContentHeaderDateDayDisplayWeekStartSunday'), value: 'sunday' }
    ],
    groupName: 'header-date-day-week-start',
    path: 'header.date.day.weekStart',
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      data.save();
    }
  });

  headerSetting.control.date.day.length = new Control_radio({
    object: state.get.current(),
    label: message.get('menuContentHeaderDateDayDisplayLengthLabel'),
    radioGroup: [
      { id: 'header-date-day-length-long', labelText: message.get('menuContentHeaderDateDayDisplayLengthLong'), value: 'long' },
      { id: 'header-date-day-length-short', labelText: message.get('menuContentHeaderDateDayDisplayLengthShort'), value: 'short' }
    ],
    groupName: 'header-date-day-length',
    path: 'header.date.day.length',
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      data.save();
    }
  });

  headerSetting.control.date.day.area = node('div', [
    headerSetting.control.date.day.display.radioSet[0].wrap(),
    form.wrap({ children: [form.indent({ children: [headerSetting.control.date.day.weekStart.wrap()] })] }),
    headerSetting.control.date.day.display.radioSet[1].wrap(),
    form.wrap({ children: [form.indent({ children: [headerSetting.control.date.day.length.wrap()] })] })
  ]);

  headerSetting.control.date.day.collapse = new Collapse({
    type: 'checkbox',
    checkbox: headerSetting.control.date.day.show,
    target: [{
      content: headerSetting.control.date.day.area
    }]
  });

  headerSetting.control.date.date = {};

  headerSetting.control.date.date.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.date.date.show',
    id: 'header-date-date-show',
    labelText: message.get('menuContentHeaderDateDateShow'),
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.disable();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      headerSetting.control.date.date.collapse.update();
      headerSetting.control.date.collapse.update();
      data.save();
    }
  });

  headerSetting.control.date.date.display = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'header-date-date-display-number', labelText: message.get('menuContentHeaderDateDateDisplayNumber'), value: 'number' },
      { id: 'header-date-date-display-word', labelText: message.get('menuContentHeaderDateDateDisplayWord'), value: 'word' }
    ],
    groupName: 'header-date-date-display',
    path: 'header.date.date.display',
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      data.save();
    }
  });

  headerSetting.control.date.date.ordinal = new Control_checkbox({
    object: state.get.current(),
    path: 'header.date.date.ordinal',
    id: 'header-date-date-ordinal',
    labelText: message.get('menuContentHeaderDateDateDisplayOrdinal'),
    action: () => {
      header.element.date.update();
      data.save();
    }
  });

  headerSetting.control.date.date.area = node('div', [
    headerSetting.control.date.date.display.wrap(),
    headerSetting.control.date.date.ordinal.wrap()
  ]);

  headerSetting.control.date.date.collapse = new Collapse({
    type: 'checkbox',
    checkbox: headerSetting.control.date.date.show,
    target: [{
      content: headerSetting.control.date.date.area
    }]
  });

  headerSetting.control.date.month = {};

  headerSetting.control.date.month.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.date.month.show',
    id: 'header-date-month-show',
    labelText: message.get('menuContentHeaderDateMonthShow'),
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.disable();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      headerSetting.control.date.month.collapse.update();
      headerSetting.control.date.collapse.update();
      data.save();
    }
  });

  headerSetting.control.date.month.display = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'header-date-month-display-number', labelText: message.get('menuContentHeaderDateMonthDisplayNumber'), value: 'number' },
      { id: 'header-date-month-display-word', labelText: message.get('menuContentHeaderDateMonthDisplayWord'), value: 'word' }
    ],
    groupName: 'header-date-month-display',
    path: 'header.date.month.display',
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.disable();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      data.save();
    }
  });

  headerSetting.control.date.month.length = new Control_radio({
    object: state.get.current(),
    label: message.get('menuContentHeaderDateMonthDisplayLengthLabel'),
    radioGroup: [
      { id: 'header-date-month-length-long', labelText: message.get('menuContentHeaderDateMonthDisplayLengthLong'), value: 'long' },
      { id: 'header-date-month-length-short', labelText: message.get('menuContentHeaderDateMonthDisplayLengthShort'), value: 'short' }
    ],
    groupName: 'header-date-month-length',
    path: 'header.date.month.length',
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      data.save();
    }
  });

  headerSetting.control.date.month.ordinal = new Control_checkbox({
    object: state.get.current(),
    path: 'header.date.month.ordinal',
    id: 'header-date-month-ordinal',
    labelText: message.get('menuContentHeaderDateMonthDisplayOrdinal'),
    action: () => {
      header.element.date.update();
      data.save();
    }
  });

  headerSetting.control.date.month.area = node('div', [
    headerSetting.control.date.month.display.radioSet[0].wrap(),
    form.wrap({ children: [form.indent({ children: [headerSetting.control.date.month.ordinal.wrap()] })] }),
    headerSetting.control.date.month.display.radioSet[1].wrap(),
    form.wrap({ children: [form.indent({ children: [headerSetting.control.date.month.length.wrap()] })] })
  ]);

  headerSetting.control.date.month.collapse = new Collapse({
    type: 'checkbox',
    checkbox: headerSetting.control.date.month.show,
    target: [{
      content: headerSetting.control.date.month.area
    }]
  });

  headerSetting.control.date.year = {};

  headerSetting.control.date.year.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.date.year.show',
    id: 'header-date-year-show',
    labelText: message.get('menuContentHeaderDateYearShow'),
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.disable();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      headerSetting.control.date.year.collapse.update();
      headerSetting.control.date.collapse.update();
      data.save();
    }
  });

  headerSetting.control.date.year.display = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'header-date-year-display-number', labelText: message.get('menuContentHeaderDateYearDisplayNumber'), value: 'number' },
      { id: 'header-date-year-display-word', labelText: message.get('menuContentHeaderDateYearDisplayWord'), value: 'word' }
    ],
    groupName: 'header-date-year-display',
    path: 'header.date.year.display',
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      data.save();
    }
  });

  headerSetting.control.date.year.area = node('div', [
    headerSetting.control.date.year.display.wrap()
  ]);

  headerSetting.control.date.year.collapse = new Collapse({
    type: 'checkbox',
    checkbox: headerSetting.control.date.year.show,
    target: [{
      content: headerSetting.control.date.year.area
    }]
  });

  headerSetting.control.date.separator = {};

  headerSetting.control.date.separator.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.date.separator.show',
    id: 'header-date-separator-show',
    labelText: message.get('menuContentHeaderDateSeparatorShow'),
    action: () => {
      header.element.date.update();
      headerSetting.control.date.separator.collapse.update();
      headerSetting.disable();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      data.save();
    }
  });

  headerSetting.control.date.separator.text = new Control_textReset({
    object: state.get.current(),
    path: 'header.date.separator.text',
    id: 'header-date-separator-text',
    value: state.get.current().header.date.separator.text,
    defaultValue: state.get.default().header.date.separator.text,
    placeholder: message.get('menuContentHeaderDateSeparatorPlaceholder'),
    labelText: message.get('menuContentHeaderDateSeparatorLabel'),
    srOnly: true,
    action: () => {
      header.element.date.update();
      data.save();
    }
  });

  headerSetting.control.date.separator.area = node('div', [
    headerSetting.control.date.separator.text.wrap()
  ]);

  headerSetting.control.date.separator.collapse = new Collapse({
    type: 'checkbox',
    checkbox: headerSetting.control.date.separator.show,
    target: [{
      content: headerSetting.control.date.separator.area
    }]
  });

  headerSetting.control.date.format = new Control_radio({
    object: state.get.current(),
    label: message.get('menuContentHeaderDateFormatLabel'),
    radioGroup: [
      { id: 'header-date-format-date-month', labelText: message.get('menuContentHeaderDateFormatDateMonth'), value: 'date-month' },
      { id: 'header-date-format-month-date', labelText: message.get('menuContentHeaderDateFormatMonthDate'), value: 'month-date' }
    ],
    groupName: 'header-date-format',
    path: 'header.date.format',
    action: () => {
      header.element.date.update();
      data.save();
    }
  });

  headerSetting.control.date.size = new Control_sliderSlim({
    object: state.get.current(),
    path: 'header.date.size',
    id: 'header-date-size',
    labelText: message.get('menuContentHeaderDateSize'),
    value: state.get.current().header.date.size,
    defaultValue: state.get.default().header.date.size,
    min: state.get.minMax().header.date.size.min,
    max: state.get.minMax().header.date.size.max,
    action: () => {
      applyCSSVar('header.date.size');
      headerSetting.edge.date.size.track();
      data.save();
    },
    mouseDownAction: () => {
      headerSetting.edge.date.size.show();
    },
    mouseUpAction: () => {
      headerSetting.edge.date.size.hide();
    }
  });

  headerSetting.control.date.newLine = new Control_checkbox({
    object: state.get.current(),
    path: 'header.date.newLine',
    id: 'header-date-newLine',
    labelText: message.get('menuContentHeaderDateNewLineLabel'),
    description: message.get('menuContentHeaderDateNewLineDescription'),
    action: () => {
      applyCSSState('header.date.newLine');
      data.save();
    }
  });

  headerSetting.control.date.area = node('div', [
    node('hr'),
    headerSetting.control.date.separator.show.wrap(),
    form.wrap({
      children: [
        form.indent({
          children: [
            headerSetting.control.date.separator.collapse.collapse()
          ]
        })
      ]
    }),
    node('hr'),
    headerSetting.control.date.format.wrap(),
    node('hr'),
    headerSetting.control.date.size.wrap(),
    node('hr'),
    headerSetting.control.date.newLine.wrap()
  ]);

  headerSetting.control.date.collapse = new Collapse({
    type: 'checkbox',
    checkbox: [headerSetting.control.date.day.show, headerSetting.control.date.date.show, headerSetting.control.date.month.show, headerSetting.control.date.year.show],
    target: [{
      content: headerSetting.control.date.area
    }]
  });

  parent.appendChild(
    node('div', [
      headerSetting.control.date.day.show.wrap(),
      form.wrap({ children: [form.indent({ children: [headerSetting.control.date.day.collapse.collapse()] })] }),
      headerSetting.control.date.date.show.wrap(),
      form.wrap({ children: [form.indent({ children: [headerSetting.control.date.date.collapse.collapse()] })] }),
      headerSetting.control.date.month.show.wrap(),
      form.wrap({ children: [form.indent({ children: [headerSetting.control.date.month.collapse.collapse()] })] }),
      headerSetting.control.date.year.show.wrap(),
      form.wrap({ children: [form.indent({ children: [headerSetting.control.date.year.collapse.collapse()] })] }),
      form.wrap({
        children: [
          form.indent({
            children: [
              headerSetting.control.date.collapse.collapse()
            ]
          })
        ]
      })
    ])
  );

};

headerSetting.search = (parent) => {

  headerSetting.edge.search.size = new Edge({ primary: header.element.search.search(), secondary: [header.element.area] });

  headerSetting.control.search.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.search.show',
    id: 'header-search-show',
    labelText: message.get('menuContentHeaderSearchShow'),
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.disable();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      headerSetting.control.search.collapse.update();
      data.save();
    }
  });

  headerSetting.control.search.width = {
    by: new Control_radio({
      object: state.get.current(),
      label: message.get('menuContentHeaderSearchWidthLabel'),
      radioGroup: [
        { id: 'header-search-width-by-auto', labelText: message.get('menuContentHeaderSearchWidthAutoLabel'), description: message.get('menuContentHeaderSearchWidthAutoDescription'), value: 'auto' },
        { id: 'header-search-width-by-custom', labelText: message.get('menuContentHeaderSearchWidthCustomLabel'), description: message.get('menuContentHeaderSearchWidthCustomDescription'), value: 'custom' }
      ],
      groupName: 'header-search-width-by',
      path: 'header.search.width.by',
      action: () => {
        applyCSSClass('header.search.width.by');
        headerSetting.disable();
        headerSetting.control.search.width.collapse.update();
        data.save();
      }
    }),
    size: new Control_sliderSlim({
      object: state.get.current(),
      path: 'header.search.width.size',
      id: 'header-search-size',
      labelText: message.get('menuContentHeaderSearchWidthSize'),
      value: state.get.current().header.search.width.size,
      defaultValue: state.get.default().header.search.width.size,
      min: state.get.minMax().header.search.width.size.min,
      max: state.get.minMax().header.search.width.size.max,
      action: () => {
        applyCSSVar('header.search.width.size');
        headerSetting.edge.search.size.track();
        data.save();
      },
      mouseDownAction: () => {
        headerSetting.edge.search.size.show();
      },
      mouseUpAction: () => {
        headerSetting.edge.search.size.hide();
      }
    })
  };

  headerSetting.control.search.width.area = node('div', [
    headerSetting.control.search.width.size.wrap()
  ]);

  headerSetting.control.search.width.collapse = new Collapse({
    type: 'radio',
    radioGroup: headerSetting.control.search.width.by,
    target: [{
      id: headerSetting.control.search.width.by.radioSet[headerSetting.control.search.width.by.radioSet.length - 1].radio.value,
      content: headerSetting.control.search.width.area
    }]
  });

  headerSetting.control.search.size = new Control_sliderSlim({
    object: state.get.current(),
    path: 'header.search.size',
    id: 'header-search-size',
    labelText: message.get('menuContentHeaderSearchSize'),
    value: state.get.current().header.search.size,
    defaultValue: state.get.default().header.search.size,
    min: state.get.minMax().header.search.size.min,
    max: state.get.minMax().header.search.size.max,
    action: () => {
      applyCSSVar('header.search.size');
      headerSetting.edge.search.size.track();
      data.save();
    },
    mouseDownAction: () => {
      headerSetting.edge.search.size.show();
    },
    mouseUpAction: () => {
      headerSetting.edge.search.size.hide();
    }
  });

  headerSetting.control.search.newLine = new Control_checkbox({
    object: state.get.current(),
    path: 'header.search.newLine',
    id: 'header-search-newLine',
    labelText: message.get('menuContentHeaderSearchNewLineLabel'),
    description: message.get('menuContentHeaderSearchNewLineDescription'),
    action: () => {
      applyCSSState('header.search.newLine');
      data.save();
    }
  });

  const searchEngineList = [];

  for (let key in searchEnginePreset) {

    searchEngineList.push({ id: `header-search-engine-selected-${key}`, labelText: searchEnginePreset[key].name, value: key });

  }

  searchEngineList.push({ id: 'header-search-engine-selected-custom', labelText: message.get('menuContentHeaderSearchEngineSelectedCustom'), value: 'custom' });

  headerSetting.control.search.engine = {
    selected: new Control_radio({
      object: state.get.current(),
      label: message.get('menuContentHeaderSearchEngineSelectedLabel'),
      radioGroup: searchEngineList,
      groupName: 'header-search-engine-selected',
      path: 'header.search.engine.selected',
      action: () => {
        header.item.mod.order();
        header.item.clear();
        header.item.render();
        layout.area.assemble();
        headerSetting.disable();
        headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
        headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
        headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
        headerSetting.edge.date.size.update.primary(header.element.date.date());
        headerSetting.edge.search.size.update.primary(header.element.search.search());
        headerSetting.control.search.engine.custom.collapse.update();
        data.save();
      }
    }),
    custom: {
      name: new Control_text({
        object: state.get.current(),
        path: 'header.search.engine.custom.name',
        id: 'header-search-engine-custom-name',
        value: state.get.current().header.search.engine.custom.name,
        placeholder: message.get('menuContentHeaderSearchEngineCustomNamePlaceholder'),
        labelText: message.get('menuContentHeaderSearchEngineCustomNameLabel'),
        action: () => {
          header.item.mod.order();
          header.item.clear();
          header.item.render();
          layout.area.assemble();
          headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
          headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
          headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
          headerSetting.edge.date.size.update.primary(header.element.date.date());
          headerSetting.edge.search.size.update.primary(header.element.search.search());
          data.save();
        }
      }),
      url: new Control_text({
        object: state.get.current(),
        path: 'header.search.engine.custom.url',
        id: 'header-search-engine-custom-url',
        value: state.get.current().header.search.engine.custom.url,
        placeholder: message.get('menuContentHeaderSearchEngineCustomUrlPlaceholder'),
        labelText: message.get('menuContentHeaderSearchEngineCustomUrlLabel'),
        action: () => {
          header.item.mod.order();
          header.item.clear();
          header.item.render();
          layout.area.assemble();
          headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
          headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
          headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
          headerSetting.edge.date.size.update.primary(header.element.date.date());
          headerSetting.edge.search.size.update.primary(header.element.search.search());
          data.save();
        }
      }),
      urlHelper: new Control_helperText({
        text: [
          message.get('menuContentHeaderSearchEngineCustomUrlHelperPara1'),
          message.get('menuContentHeaderSearchEngineCustomUrlHelperPara2')
        ]
      }),
      queryName: new Control_text({
        object: state.get.current(),
        path: 'header.search.engine.custom.queryName',
        id: 'header-search-engine-custom-queryName',
        value: state.get.current().header.search.engine.custom.queryName,
        placeholder: message.get('menuContentHeaderSearchEngineCustomQueryNamePlaceholder'),
        labelText: message.get('menuContentHeaderSearchEngineCustomQueryNameLabel'),
        action: () => {
          header.item.mod.order();
          header.item.clear();
          header.item.render();
          layout.area.assemble();
          headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
          headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
          headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
          headerSetting.edge.date.size.update.primary(header.element.date.date());
          headerSetting.edge.search.size.update.primary(header.element.search.search());
          data.save();
        }
      }),
      queryNameHelper: new Control_helperText({
        text: [
          message.get('menuContentHeaderSearchEngineCustomQueryNameHelperPara1'),
          message.get('menuContentHeaderSearchEngineCustomQueryNameHelperPara2')
        ]
      })
    }
  };

  headerSetting.control.search.engine.custom.area = node('div', [
    headerSetting.control.search.engine.custom.name.wrap(),
    headerSetting.control.search.engine.custom.url.wrap(),
    headerSetting.control.search.engine.custom.urlHelper.wrap(),
    headerSetting.control.search.engine.custom.queryName.wrap(),
    headerSetting.control.search.engine.custom.queryNameHelper.wrap()
  ]);

  headerSetting.control.search.engine.custom.collapse = new Collapse({
    type: 'radio',
    radioGroup: headerSetting.control.search.engine.selected,
    target: [{
      id: headerSetting.control.search.engine.selected.radioSet[headerSetting.control.search.engine.selected.radioSet.length - 1].radio.value,
      content: headerSetting.control.search.engine.custom.area
    }]
  });

  headerSetting.control.search.text = {
    justify: new Control_radioGrid({
      object: state.get.current(),
      radioGroup: [
        { id: 'header-search-text-justify-left', labelText: message.get('menuContentHeaderSearchEngineTextJustifyLeft'), value: 'left', position: 1 },
        { id: 'header-search-text-justify-center', labelText: message.get('menuContentHeaderSearchEngineTextJustifyCenter'), value: 'center', position: 2 },
        { id: 'header-search-text-justify-right', labelText: message.get('menuContentHeaderSearchEngineTextJustifyRight'), value: 'right', position: 3 }
      ],
      label: message.get('menuContentHeaderSearchEngineTextJustifyLabel'),
      groupName: 'header-search-text-justify',
      path: 'header.search.text.justify',
      gridSize: '3x1',
      action: () => {
        applyCSSClass('header.search.text.justify');
        data.save();
      }
    })
  };

  headerSetting.control.search.newTab = new Control_checkbox({
    object: state.get.current(),
    path: 'header.search.newTab',
    id: 'header-search-newTab',
    labelText: message.get('menuContentHeaderSearchNewTab'),
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      data.save();
    }
  });

  headerSetting.control.search.area = node('div', [
    headerSetting.control.search.width.by.wrap(),
    form.wrap({
      children: [
        form.indent({
          children: [
            headerSetting.control.search.width.collapse.collapse()
          ]
        })
      ]
    }),
    node('hr'),
    headerSetting.control.search.size.wrap(),
    node('hr'),
    headerSetting.control.search.newLine.wrap(),
    node('hr'),
    headerSetting.control.search.engine.selected.wrap(),
    form.wrap({
      children: [
        form.indent({
          children: [
            headerSetting.control.search.engine.custom.collapse.collapse()
          ]
        })
      ]
    }),
    node('hr'),
    headerSetting.control.search.text.justify.wrap(),
    node('hr'),
    headerSetting.control.search.newTab.wrap()
  ]);

  headerSetting.control.search.collapse = new Collapse({
    type: 'checkbox',
    checkbox: headerSetting.control.search.show,
    target: [{
      content: headerSetting.control.search.area
    }]
  });

  parent.appendChild(
    node('div', [
      headerSetting.control.search.show.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              headerSetting.control.search.collapse.collapse()
            ]
          })
        ]
      })
    ])
  );

};

export { headerSetting };
