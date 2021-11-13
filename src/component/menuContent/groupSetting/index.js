import { state } from '../../state';
import { data } from '../../data';
import { bookmark } from '../../bookmark';
import { group } from '../../group';
import { groupAndBookmark } from '../../groupAndBookmark';

import * as form from '../../form';

import { Button } from '../../button';
import { Edge } from '../../edge';

import { Control_helperText } from '../../control/helperText';
import { Control_radio } from '../../control/radio';
import { Control_radioGrid } from '../../control/radioGrid';
import { Control_slider } from '../../control/slider';
import { Control_label } from '../../control/label';

import { node } from '../../../utility/node';
import { applyCSSVar } from '../../../utility/applyCSSVar';
import { applyCSSClass } from '../../../utility/applyCSSClass';

const groupSetting = {};

groupSetting.control = {
  alignment: {},
  name: {},
  collapse: {},
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
    groupSetting.control.collapse.show.enable();
    groupSetting.control.collapse.hide.enable();
    groupSetting.control.toolbar.collapse.label.enable();
    groupSetting.control.toolbar.collapse.hide.enable();
    groupSetting.control.toolbar.collapse.show.enable();
    groupSetting.control.toolbar.collapse.helper.enable();
    groupSetting.control.toolbar.openAll.label.enable();
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
    groupSetting.control.collapse.show.disable();
    groupSetting.control.collapse.hide.disable();
    groupSetting.control.toolbar.collapse.label.disable();
    groupSetting.control.toolbar.collapse.hide.disable();
    groupSetting.control.toolbar.collapse.show.disable();
    groupSetting.control.toolbar.collapse.helper.disable();
    groupSetting.control.toolbar.openAll.label.disable();
    groupSetting.control.toolbar.openAll.hide.disable();
    groupSetting.control.toolbar.openAll.show.disable();
    groupSetting.control.toolbar.openAll.helper.disable();
  }

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

groupSetting.findIndex = {
  name: () => {

    let nameIndex = null;

    if (state.get.current().bookmark.show && group.area.current.length > 0) {
      bookmark.all.forEach((item, i) => {

        if (item.name.show && nameIndex === null) {
          nameIndex = i;
        }

      });
    }

    return nameIndex;

  },
  toolbar: {
    collapse: () => {

      let collapseIndex = null;

      if (state.get.current().bookmark.show && group.area.current.length > 0) {
        bookmark.all.forEach((item, i) => {

          if (item.toolbar.collapse.show && collapseIndex === null) {
            collapseIndex = i;
          }

        });
      }

      return collapseIndex;

    },
    openAll: () => {

      let openAllIndex = null;

      if (state.get.current().bookmark.show && group.area.current.length > 0) {
        bookmark.all.forEach((item, i) => {

          if (item.toolbar.openAll.show && openAllIndex === null) {
            openAllIndex = i;
          }

        });
      }

      return openAllIndex;

    }
  }
};

groupSetting.name = (parent) => {

  if (state.get.current().bookmark.show && group.area.current.length > 0) {

    if (groupSetting.findIndex.name() == 0 || groupSetting.findIndex.name()) {

      groupSetting.edge.name.size = new Edge({ primary: group.area.current[groupSetting.findIndex.name()].element.name.name, secondary: [group.area.current[groupSetting.findIndex.name()].element.header] });

    }

  }

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

      if (state.get.current().bookmark.show && group.area.current.length > 0) {

        if (bookmark.all[0].name.show) {

          groupSetting.edge.name.size.track();

        }

      }

      data.save();
    },
    mouseDownAction: () => {
      if (state.get.current().bookmark.show && group.area.current.length > 0) {

        if (groupSetting.findIndex.name() == 0 || groupSetting.findIndex.name()) {

          groupSetting.edge.name.size.show();

        }
      }
    },
    mouseUpAction: () => {
      if (state.get.current().bookmark.show && group.area.current.length > 0) {

        if (groupSetting.findIndex.name() == 0 || groupSetting.findIndex.name()) {

          groupSetting.edge.name.size.hide();

        }

      }
    }
  });

  groupSetting.control.name.show = new Button({
    text: 'Show all',
    style: ['line'],
    func: () => {

      bookmark.all.forEach(item => { item.name.show = true; });

      groupAndBookmark.render();

      if (groupSetting.edge.name.size) {

        if (state.get.current().bookmark.show && group.area.current.length > 0) {

          if (groupSetting.findIndex.name() == 0 || groupSetting.findIndex.name()) {

            groupSetting.edge.name.size.update.primary(group.area.current[groupSetting.findIndex.name()].element.name.name);

            groupSetting.edge.name.size.update.secondary([group.area.current[groupSetting.findIndex.name()].element.header]);

          }

        }

      } else {

        groupSetting.edge.name.size = new Edge({ primary: group.area.current[0].element.name.name, secondary: [group.area.current[0].element.header] });

      }

      data.save();

    }
  });

  groupSetting.control.name.hide = new Button({
    text: 'Hide all',
    style: ['line'],
    func: () => {

      bookmark.all.forEach(item => { item.name.show = false; });

      groupAndBookmark.render();

      groupSetting.edge.name.size = null;

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
          groupSetting.control.name.show.wrap(),
          groupSetting.control.name.hide.wrap()
        ]
      }),
      groupSetting.control.name.helper.wrap()
    ])
  );

};

groupSetting.collapse = (parent) => {

  groupSetting.control.collapse = {
    show: new Button({
      text: 'Collapse all groups',
      style: ['line'],
      func: () => {

        bookmark.all.forEach(item => { item.collapse = true; });

        groupAndBookmark.render();

        if (groupSetting.edge.name.size) {

          if (state.get.current().bookmark.show && group.area.current.length > 0) {

            groupSetting.edge.name.size.update.primary(group.area.current[0].element.name.name);

            groupSetting.edge.name.size.update.secondary([group.area.current[0].element.header]);

          }

        } else {

          groupSetting.edge.name.size = new Edge({ primary: group.area.current[0].element.name.name, secondary: [group.area.current[0].element.header] });

        }

        if (state.get.current().bookmark.show && group.area.current.length > 0) {

          if (groupSetting.findIndex.toolbar.collapse() !== null && groupSetting.findIndex.toolbar.openAll() !== null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.openAll()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.openAll()].element.header] });

          } else if (groupSetting.findIndex.toolbar.collapse() !== null && groupSetting.findIndex.toolbar.openAll() === null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.collapse()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.collapse()].element.header] });

          } else if (groupSetting.findIndex.toolbar.collapse() === null && groupSetting.findIndex.toolbar.openAll() !== null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.openAll()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.openAll()].element.header] });

          } else {

            groupSetting.edge.toolbar.size = false;

          }

        }

        data.save();

      }
    }),
    hide: new Button({
      text: 'Open all groups',
      style: ['line'],
      func: () => {

        bookmark.all.forEach(item => { item.collapse = false; });

        groupAndBookmark.render();

        if (groupSetting.edge.name.size) {

          if (state.get.current().bookmark.show && group.area.current.length > 0) {

            groupSetting.edge.name.size.update.primary(group.area.current[0].element.name.name);

            groupSetting.edge.name.size.update.secondary([group.area.current[0].element.header]);

          }

        } else {

          groupSetting.edge.name.size = new Edge({ primary: group.area.current[0].element.name.name, secondary: [group.area.current[0].element.header] });

        }

        if (state.get.current().bookmark.show && group.area.current.length > 0) {

          if (groupSetting.findIndex.toolbar.collapse() !== null && groupSetting.findIndex.toolbar.openAll() !== null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.openAll()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.openAll()].element.header] });

          } else if (groupSetting.findIndex.toolbar.collapse() !== null && groupSetting.findIndex.toolbar.openAll() === null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.collapse()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.collapse()].element.header] });

          } else if (groupSetting.findIndex.toolbar.collapse() === null && groupSetting.findIndex.toolbar.openAll() !== null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.openAll()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.openAll()].element.header] });

          } else {

            groupSetting.edge.toolbar.size = false;

          }

        }

        data.save();

      }
    })
  };

  parent.appendChild(
    node('div', [
      form.inline({
        gap: 'small',
        wrap: true,
        equalGap: true,
        children: [
          groupSetting.control.collapse.show.wrap(),
          groupSetting.control.collapse.hide.wrap()
        ]
      })
    ])
  );

};

groupSetting.toolbar = (parent) => {

  if (state.get.current().bookmark.show && group.area.current.length > 0) {

    if (groupSetting.findIndex.toolbar.collapse() !== null && groupSetting.findIndex.toolbar.openAll() !== null) {

      groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.openAll()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.openAll()].element.header] });

    } else if (groupSetting.findIndex.toolbar.collapse() !== null && groupSetting.findIndex.toolbar.openAll() === null) {

      groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.collapse()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.collapse()].element.header] });

    } else if (groupSetting.findIndex.toolbar.collapse() === null && groupSetting.findIndex.toolbar.openAll() !== null) {

      groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.openAll()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.openAll()].element.header] });

    } else {

      groupSetting.edge.toolbar.size = false;

    }

  }

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

      if (state.get.current().bookmark.show && group.area.current.length > 0) {

        if (
          (groupSetting.findIndex.toolbar.collapse() == 0 || groupSetting.findIndex.toolbar.collapse()) ||
          (groupSetting.findIndex.toolbar.openAll() == 0 || groupSetting.findIndex.toolbar.openAll())
        ) {

          groupSetting.edge.toolbar.size.track();

        }

      }

      data.save();
    },
    mouseDownAction: () => {

      if (state.get.current().bookmark.show && group.area.current.length > 0) {

        if (
          (groupSetting.findIndex.toolbar.collapse() == 0 || groupSetting.findIndex.toolbar.collapse()) ||
          (groupSetting.findIndex.toolbar.openAll() == 0 || groupSetting.findIndex.toolbar.openAll())
        ) {

          groupSetting.edge.toolbar.size.show();

        }

      }

    },
    mouseUpAction: () => {

      if (state.get.current().bookmark.show && group.area.current.length > 0) {

        if (
          (groupSetting.findIndex.toolbar.collapse() == 0 || groupSetting.findIndex.toolbar.collapse()) ||
          (groupSetting.findIndex.toolbar.openAll() == 0 || groupSetting.findIndex.toolbar.openAll())
        ) {

          groupSetting.edge.toolbar.size.hide();

        }

      }

    }
  });

  groupSetting.control.toolbar.collapse = {
    label: new Control_label({ text: 'Group Collapse control' }),
    show: new Button({
      text: 'Show all',
      style: ['line'],
      func: () => {

        bookmark.all.forEach(item => { item.toolbar.collapse.show = true; });

        groupAndBookmark.render();

        if (state.get.current().bookmark.show && group.area.current.length > 0) {

          if (groupSetting.findIndex.toolbar.collapse() !== null && groupSetting.findIndex.toolbar.openAll() !== null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.openAll()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.openAll()].element.header] });

          } else if (groupSetting.findIndex.toolbar.collapse() !== null && groupSetting.findIndex.toolbar.openAll() === null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.collapse()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.collapse()].element.header] });

          } else if (groupSetting.findIndex.toolbar.collapse() === null && groupSetting.findIndex.toolbar.openAll() !== null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.openAll()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.openAll()].element.header] });

          } else {

            groupSetting.edge.toolbar.size = false;

          }

        }

        data.save();

      }
    }),
    hide: new Button({
      text: 'Hide all',
      style: ['line'],
      func: () => {

        bookmark.all.forEach(item => { item.toolbar.collapse.show = false; });

        groupAndBookmark.render();

        if (state.get.current().bookmark.show && group.area.current.length > 0) {

          if (groupSetting.findIndex.toolbar.collapse() !== null && groupSetting.findIndex.toolbar.openAll() !== null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.openAll()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.openAll()].element.header] });

          } else if (groupSetting.findIndex.toolbar.collapse() !== null && groupSetting.findIndex.toolbar.openAll() === null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.collapse()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.collapse()].element.header] });

          } else if (groupSetting.findIndex.toolbar.collapse() === null && groupSetting.findIndex.toolbar.openAll() !== null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.openAll()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.openAll()].element.header] });

          } else {

            groupSetting.edge.toolbar.size = false;

          }

        }

        data.save();

      }
    }),
    helper: new Control_helperText({
      text: ['Group toolbar collapse button can also be changed by editing individual Groups.']
    })
  };

  groupSetting.control.toolbar.openAll = {
    label: new Control_label({ text: 'Group Open all control' }),
    show: new Button({
      text: 'Show all',
      style: ['line'],
      func: () => {

        bookmark.all.forEach(item => { item.toolbar.openAll.show = true; });

        groupAndBookmark.render();

        if (state.get.current().bookmark.show && group.area.current.length > 0) {

          if (groupSetting.findIndex.toolbar.collapse() !== null && groupSetting.findIndex.toolbar.openAll() !== null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.openAll()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.openAll()].element.header] });

          } else if (groupSetting.findIndex.toolbar.collapse() !== null && groupSetting.findIndex.toolbar.openAll() === null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.collapse()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.collapse()].element.header] });

          } else if (groupSetting.findIndex.toolbar.collapse() === null && groupSetting.findIndex.toolbar.openAll() !== null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.openAll()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.openAll()].element.header] });

          } else {

            groupSetting.edge.toolbar.size = false;

          }

        }

        data.save();

      }
    }),
    hide: new Button({
      text: 'Hide all',
      style: ['line'],
      func: () => {

        bookmark.all.forEach(item => { item.toolbar.openAll.show = false; });

        groupAndBookmark.render();

        if (state.get.current().bookmark.show && group.area.current.length > 0) {

          if (groupSetting.findIndex.toolbar.collapse() !== null && groupSetting.findIndex.toolbar.openAll() !== null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.openAll()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.openAll()].element.header] });

          } else if (groupSetting.findIndex.toolbar.collapse() !== null && groupSetting.findIndex.toolbar.openAll() === null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.collapse()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.collapse()].element.header] });

          } else if (groupSetting.findIndex.toolbar.collapse() === null && groupSetting.findIndex.toolbar.openAll() !== null) {

            groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.openAll()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.openAll()].element.header] });

          } else {

            groupSetting.edge.toolbar.size = false;

          }

        }

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
      groupSetting.control.toolbar.openAll.label.wrap(),
      form.wrap({
        children: [
          form.inline({
            gap: 'small',
            wrap: true,
            equalGap: true,
            children: [
              groupSetting.control.toolbar.openAll.show.wrap(),
              groupSetting.control.toolbar.openAll.hide.wrap()
            ]
          })
        ]
      }),
      groupSetting.control.toolbar.openAll.helper.wrap(),
      node('hr'),
      groupSetting.control.toolbar.collapse.label.wrap(),
      form.wrap({
        children: [
          form.inline({
            gap: 'small',
            wrap: true,
            equalGap: true,
            children: [
              groupSetting.control.toolbar.collapse.show.wrap(),
              groupSetting.control.toolbar.collapse.hide.wrap()
            ]
          })
        ]
      }),
      groupSetting.control.toolbar.collapse.helper.wrap()
    ])
  );

};

export { groupSetting };