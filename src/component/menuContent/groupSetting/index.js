import { state } from '../../state';
import { data } from '../../data';
import { header } from '../../header';
import { bookmark } from '../../bookmark';
import { group } from '../../group';
import { theme } from '../../theme';
import { version } from '../../version';
import { menu } from '../../menu';
import { icon } from '../../icon';
import { logo } from '../../logo';
import { layout } from '../../layout';
import { toolbar } from '../../toolbar';
import { groupAndBookmark } from '../../groupAndBookmark';

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

const groupSetting = {};

groupSetting.control = {
  alignment: {},
  name: {},
  toolbar: {}
};

groupSetting.edge = {
  name: {},
  toolbar: {}
};

groupSetting.disable = () => {

  if (state.get.current().bookmark.show) {
    groupSetting.control.alignment.justify.enable();
    groupSetting.control.alignment.order.enable();
    groupSetting.control.name.size.enable();
    groupSetting.control.name.hide.enable();
    groupSetting.control.name.show.enable();
    groupSetting.control.name.helper.enable();
    groupSetting.control.toolbar.size.enable();
    groupSetting.control.toolbar.openAll.hide.enable();
    groupSetting.control.toolbar.openAll.show.enable();
    groupSetting.control.toolbar.openAll.helper.enable();
  } else {
    groupSetting.control.alignment.justify.disable();
    groupSetting.control.alignment.order.disable();
    groupSetting.control.name.size.disable();
    groupSetting.control.name.hide.disable();
    groupSetting.control.name.show.disable();
    groupSetting.control.name.helper.disable();
    groupSetting.control.toolbar.size.disable();
    groupSetting.control.toolbar.openAll.hide.disable();
    groupSetting.control.toolbar.openAll.show.disable();
    groupSetting.control.toolbar.openAll.helper.disable();
  };

};

groupSetting.alignment = (parent) => {

  groupSetting.control.alignment.justify = new Control_radioGrid({
    object: state.get.current(),
    radioGroup: [
      { id: 'group-area-justify-left', labelText: 'Left', value: 'left', position: 1 },
      { id: 'group-area-justify-center', labelText: 'Center', value: 'center', position: 2 },
      { id: 'group-area-justify-right', labelText: 'Right', value: 'right', position: 3 }
    ],
    label: 'Group details area alignment',
    groupName: 'group-area-justify',
    path: 'group.area.justify',
    gridSize: '3x1',
    action: () => {
      applyCSSClass('group.area.justify');
      data.save();
    }
  });

  groupSetting.control.alignment.order = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'group-order-header-body', labelText: 'Group details then Bookmarks', description: 'Order the Group details area to appear before the Bookmarks area.', value: 'header-body' },
      { id: 'group-order-body-header', labelText: 'Bookmarks then Group details', description: 'Order the Bookmarks area to appear before the Group details area.', value: 'body-header' }
    ],
    groupName: 'group-order',
    path: 'group.order',
    action: () => {
      applyCSSClass('group.order');
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      groupSetting.control.alignment.justify.wrap(),
      node('hr'),
      groupSetting.control.alignment.order.wrap()
    ])
  );

};

groupSetting.name = (parent) => {

  if (state.get.current().bookmark.show && bookmark.all[0].name.show && group.area.current.length > 0) {

    groupSetting.edge.name.size = new Edge({ primary: group.area.current[0].element.name.name, secondary: [group.area.current[0].element.header] });

  };

  groupSetting.control.name.size = new Control_slider({
    object: state.get.current(),
    path: 'group.name.size',
    id: 'group-name-size',
    labelText: 'Name size',
    value: state.get.current().group.name.size,
    defaultValue: state.get.default().group.name.size,
    min: state.get.minMax().group.name.size.min,
    max: state.get.minMax().group.name.size.max,
    action: () => {
      applyCSSVar('group.name.size');
      if (state.get.current().bookmark.show && group.area.current.length > 0 && bookmark.all[0].name.show && groupSetting.edge.name.size) { groupSetting.edge.name.size.track(); };
      data.save();
    },
    mouseDownAction: () => {
      if (state.get.current().bookmark.show && group.area.current.length > 0 && bookmark.all[0].name.show && groupSetting.edge.name.size) { groupSetting.edge.name.size.show(); };
    },
    mouseUpAction: () => {
      if (state.get.current().bookmark.show && group.area.current.length > 0 && bookmark.all[0].name.show && groupSetting.edge.name.size) { groupSetting.edge.name.size.hide(); };
    }
  });

  groupSetting.control.name.hide = new Button({
    text: 'Show all',
    style: ['line'],
    func: () => {

      bookmark.all.forEach(item => { item.name.show = true; });

      groupAndBookmark.render();

      if (groupSetting.edge.name.size) {

        if (state.get.current().bookmark.show && group.area.current.length > 0) {

          groupSetting.edge.name.size.update.primary(group.area.current[0].element.name.name);

          groupSetting.edge.name.size.update.secondary([group.area.current[0].element.header]);

        };

      } else {

        groupSetting.edge.name.size = new Edge({ primary: group.area.current[0].element.name.name, secondary: [group.area.current[0].element.header] });

      };

      if (groupSetting.edge.toolbar.size) {

        if (state.get.current().bookmark.show && group.area.current.length > 0) {

          groupSetting.edge.toolbar.size.update.primary(group.area.current[0].element.toolbar.toolbar);

          groupSetting.edge.toolbar.size.update.secondary([group.area.current[0].element.header]);

        };

      } else {

        groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[0].element.toolbar.toolbar, secondary: [group.area.current[0].element.header] });

      };

      data.save();

    }
  });

  groupSetting.control.name.show = new Button({
    text: 'Hide all',
    style: ['line'],
    func: () => {

      bookmark.all.forEach(item => { item.name.show = false; });

      groupAndBookmark.render();

      if (groupSetting.edge.name.size) {

        if (state.get.current().bookmark.show && group.area.current.length > 0) {

          groupSetting.edge.name.size.update.primary(group.area.current[0].element.name.name);

          groupSetting.edge.name.size.update.secondary([group.area.current[0].element.header]);

        };

      } else {

        groupSetting.edge.name.size = new Edge({ primary: group.area.current[0].element.name.name, secondary: [group.area.current[0].element.header] });

      };

      if (groupSetting.edge.toolbar.size) {

        if (state.get.current().bookmark.show && group.area.current.length > 0) {

          groupSetting.edge.toolbar.size.update.primary(group.area.current[0].element.toolbar.toolbar);

          groupSetting.edge.toolbar.size.update.secondary([group.area.current[0].element.header]);

        };

      } else {

        groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[0].element.toolbar.toolbar, secondary: [group.area.current[0].element.header] });

      };

      data.save();

    }
  });

  groupSetting.control.name.helper = new Control_helperText({
    text: ['Group Names can also be changed by editing individual Groups.']
  });

  parent.appendChild(
    node('div', [
      groupSetting.control.name.size.wrap(),
      form.inline({
        gap: 'small',
        wrap: true,
        equalGap: true,
        children: [
          groupSetting.control.name.hide.wrap(),
          groupSetting.control.name.show.wrap()
        ]
      }),
      groupSetting.control.name.helper.wrap()
    ])
  );

};

groupSetting.toolbar = (parent) => {

  if (state.get.current().bookmark.show && (bookmark.all[0].toolbar.collapse.show || (bookmark.all[0].toolbar.openAll.show && bookmark.all[0].items.length > 0))) {

    groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[0].element.toolbar.toolbar, secondary: [group.area.current[0].element.header] });

  };

  groupSetting.control.toolbar.size = new Control_slider({
    object: state.get.current(),
    path: 'group.toolbar.size',
    id: 'group-toolbar-size',
    labelText: 'Group toolbar size',
    value: state.get.current().group.toolbar.size,
    defaultValue: state.get.default().group.toolbar.size,
    min: state.get.minMax().group.toolbar.size.min,
    max: state.get.minMax().group.toolbar.size.max,
    action: () => {
      applyCSSVar('group.toolbar.size');
      if (state.get.current().bookmark.show && (bookmark.all[0].toolbar.collapse.show || (bookmark.all[0].toolbar.openAll.show && bookmark.all[0].items.length > 0))) { groupSetting.edge.toolbar.size.track(); };
      data.save();
    },
    mouseDownAction: () => {
      if (state.get.current().bookmark.show && (bookmark.all[0].toolbar.collapse.show || (bookmark.all[0].toolbar.openAll.show && bookmark.all[0].items.length > 0))) { groupSetting.edge.toolbar.size.show(); };
    },
    mouseUpAction: () => {
      if (state.get.current().bookmark.show && (bookmark.all[0].toolbar.collapse.show || (bookmark.all[0].toolbar.openAll.show && bookmark.all[0].items.length > 0))) { groupSetting.edge.toolbar.size.hide(); };
    }
  });

  groupSetting.control.toolbar.collapse = {
    show: new Button({
      text: 'Show all',
      style: ['line'],
      func: () => {

        bookmark.all.forEach(item => { item.toolbar.collapse.show = true; });

        groupAndBookmark.render();

        if (groupSetting.edge.name.size) {

          if (state.get.current().bookmark.show && group.area.current.length > 0) {

            groupSetting.edge.name.size.update.primary(group.area.current[0].element.name.name);

            groupSetting.edge.name.size.update.secondary([group.area.current[0].element.header]);

          };

        } else {

          groupSetting.edge.name.size = new Edge({ primary: group.area.current[0].element.name.name, secondary: [group.area.current[0].element.header] });

        };

        if (groupSetting.edge.toolbar.size) {

          if (state.get.current().bookmark.show && group.area.current.length > 0) {

            groupSetting.edge.toolbar.size.update.primary(group.area.current[0].element.toolbar.toolbar);

            groupSetting.edge.toolbar.size.update.secondary([group.area.current[0].element.header]);

          };

        } else {

          groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[0].element.toolbar.toolbar, secondary: [group.area.current[0].element.header] });

        };

        data.save();

      }
    }),
    hide: new Button({
      text: 'Hide all',
      style: ['line'],
      func: () => {

        bookmark.all.forEach(item => { item.toolbar.collapse.show = false; });

        groupAndBookmark.render();

        if (groupSetting.edge.name.size) {

          if (state.get.current().bookmark.show && group.area.current.length > 0) {

            groupSetting.edge.name.size.update.primary(group.area.current[0].element.name.name);

            groupSetting.edge.name.size.update.secondary([group.area.current[0].element.header]);

          };

        } else {

          groupSetting.edge.name.size = new Edge({ primary: group.area.current[0].element.name.name, secondary: [group.area.current[0].element.header] });

        };

        if (groupSetting.edge.toolbar.size) {

          if (state.get.current().bookmark.show && group.area.current.length > 0) {

            groupSetting.edge.toolbar.size.update.primary(group.area.current[0].element.toolbar.toolbar);

            groupSetting.edge.toolbar.size.update.secondary([group.area.current[0].element.header]);

          };

        } else {

          groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[0].element.toolbar.toolbar, secondary: [group.area.current[0].element.header] });

        };

        data.save();

      }
    }),
    helper: new Control_helperText({
      text: ['Group toolbar collapse button can also be changed by editing individual Groups.']
    })
  };

  groupSetting.control.toolbar.openAll = {
    show: new Button({
      text: 'Show all',
      style: ['line'],
      func: () => {

        bookmark.all.forEach(item => { item.toolbar.openAll.show = true; });

        groupAndBookmark.render();

        if (groupSetting.edge.name.size) {

          if (state.get.current().bookmark.show && group.area.current.length > 0) {

            groupSetting.edge.name.size.update.primary(group.area.current[0].element.name.name);

            groupSetting.edge.name.size.update.secondary([group.area.current[0].element.header]);

          };

        } else {

          groupSetting.edge.name.size = new Edge({ primary: group.area.current[0].element.name.name, secondary: [group.area.current[0].element.header] });

        };

        if (groupSetting.edge.toolbar.size) {

          if (state.get.current().bookmark.show && group.area.current.length > 0) {

            groupSetting.edge.toolbar.size.update.primary(group.area.current[0].element.toolbar.toolbar);

            groupSetting.edge.toolbar.size.update.secondary([group.area.current[0].element.header]);

          };

        } else {

          groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[0].element.toolbar.toolbar, secondary: [group.area.current[0].element.header] });

        };

        data.save();

      }
    }),
    hide: new Button({
      text: 'Hide all',
      style: ['line'],
      func: () => {

        bookmark.all.forEach(item => { item.toolbar.openAll.show = false; });

        groupAndBookmark.render();

        if (groupSetting.edge.name.size) {

          if (state.get.current().bookmark.show && group.area.current.length > 0) {

            groupSetting.edge.name.size.update.primary(group.area.current[0].element.name.name);

            groupSetting.edge.name.size.update.secondary([group.area.current[0].element.header]);

          };

        } else {

          groupSetting.edge.name.size = new Edge({ primary: group.area.current[0].element.name.name, secondary: [group.area.current[0].element.header] });

        };

        if (groupSetting.edge.toolbar.size) {

          if (state.get.current().bookmark.show && group.area.current.length > 0) {

            groupSetting.edge.toolbar.size.update.primary(group.area.current[0].element.toolbar.toolbar);

            groupSetting.edge.toolbar.size.update.secondary([group.area.current[0].element.header]);

          };

        } else {

          groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[0].element.toolbar.toolbar, secondary: [group.area.current[0].element.header] });

        };

        data.save();

      }
    }),
    helper: new Control_helperText({
      text: ['Group toolbar open all button can also be changed by editing individual Groups.']
    })
  };

  parent.appendChild(
    node('div', [
      groupSetting.control.toolbar.size.wrap(),
      node('hr'),
      node('label:Group Collapse'),
      form.inline({
        gap: 'small',
        wrap: true,
        equalGap: true,
        children: [
          groupSetting.control.toolbar.collapse.show.wrap(),
          groupSetting.control.toolbar.collapse.hide.wrap()
        ]
      }),
      groupSetting.control.toolbar.openAll.helper.wrap(),
      node('hr'),
      node('label:Group Open all'),
      form.inline({
        gap: 'small',
        wrap: true,
        equalGap: true,
        children: [
          groupSetting.control.toolbar.openAll.show.wrap(),
          groupSetting.control.toolbar.openAll.hide.wrap()
        ]
      }),
      groupSetting.control.toolbar.collapse.helper.wrap()
    ])
  );

};

export { groupSetting }
