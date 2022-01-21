import { message } from '../../message';

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
  name: {
    update: () => {

      if (state.get.current().bookmark.show && group.area.current.length > 0) {

        if (groupSetting.findIndex.name() !== null) {

          groupSetting.edge.name.size = new Edge({ primary: group.area.current[groupSetting.findIndex.name()].element.name.name, secondary: [group.area.current[groupSetting.findIndex.name()].element.header] });

        }

      } else {

        groupSetting.edge.name.size = null;

      }

    }
  },
  toolbar: {
    update: () => {

      if (state.get.current().bookmark.show && group.area.current.length > 0) {

        if (groupSetting.findIndex.toolbar.collapse() !== null && groupSetting.findIndex.toolbar.openAll() !== null) {

          groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.openAll()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.openAll()].element.header] });

        } else if (groupSetting.findIndex.toolbar.collapse() !== null && groupSetting.findIndex.toolbar.openAll() === null) {

          groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.collapse()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.collapse()].element.header] });

        } else if (groupSetting.findIndex.toolbar.collapse() === null && groupSetting.findIndex.toolbar.openAll() !== null) {

          groupSetting.edge.toolbar.size = new Edge({ primary: group.area.current[groupSetting.findIndex.toolbar.openAll()].element.toolbar.toolbar, secondary: [group.area.current[groupSetting.findIndex.toolbar.openAll()].element.header] });

        } else {

          groupSetting.edge.toolbar.size = null;

        }

      }

    }
  }
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
      { id: 'group-area-justify-left', labelText: message.get('menuContentGroupAlignmentJustifyLeft'), value: 'left', position: 1 },
      { id: 'group-area-justify-center', labelText: message.get('menuContentGroupAlignmentJustifyCenter'), value: 'center', position: 2 },
      { id: 'group-area-justify-right', labelText: message.get('menuContentGroupAlignmentJustifyRight'), value: 'right', position: 3 }
    ],
    label: message.get('menuContentGroupAlignmentJustifyLabel'),
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
    label: message.get('menuContentGroupAlignmentOrderLabel'),
    radioGroup: [
      { id: 'group-order-header-body', labelText: message.get('menuContentGroupAlignmentOrderHeaderBodyLabel'), description: message.get('menuContentGroupAlignmentOrderHeaderBodyDescription'), value: 'header-body' },
      { id: 'group-order-body-header', labelText: message.get('menuContentGroupAlignmentOrderBodyHeaderLabel'), description: message.get('menuContentGroupAlignmentOrderBodyHeaderDescription'), value: 'body-header' }
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

  groupSetting.edge.name.update();

  groupSetting.control.name.size = new Control_slider({
    object: state.get.current(),
    path: 'group.name.size',
    id: 'group-name-size',
    labelText: message.get('menuContentGroupNameSize'),
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
    text: message.get('menuContentGroupNameShow'),
    style: ['line'],
    func: () => {

      bookmark.all.forEach(item => { item.name.show = true; });

      groupAndBookmark.render();

      groupSetting.edge.name.update();

      groupSetting.edge.toolbar.update();

      data.save();

    }
  });

  groupSetting.control.name.hide = new Button({
    text: message.get('menuContentGroupNameHide'),
    style: ['line'],
    func: () => {

      bookmark.all.forEach(item => { item.name.show = false; });

      groupAndBookmark.render();

      groupSetting.edge.name.update();

      groupSetting.edge.toolbar.update();

      data.save();

    }
  });

  groupSetting.control.name.helper = new Control_helperText({
    text: [message.get('menuContentGroupNameHelperPara1')]
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
      text: message.get('menuContentGroupCollapseShow'),
      style: ['line'],
      func: () => {

        bookmark.all.forEach(item => { item.collapse = false; });

        groupAndBookmark.render();

        groupSetting.edge.name.update();

        groupSetting.edge.toolbar.update();

        data.save();

      }
    }),
    hide: new Button({
      text: message.get('menuContentGroupCollapseHide'),
      style: ['line'],
      func: () => {

        bookmark.all.forEach(item => { item.collapse = true; });

        groupAndBookmark.render();

        groupSetting.edge.name.update();

        groupSetting.edge.toolbar.update();

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

  groupSetting.edge.toolbar.update();

  groupSetting.control.toolbar.size = new Control_slider({
    object: state.get.current(),
    path: 'group.toolbar.size',
    id: 'group-toolbar-size',
    labelText: message.get('menuContentGroupToolbarSize'),
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
    label: new Control_label({
      text: message.get('menuContentGroupToolbarCollapseLabel')
    }),
    show: new Button({
      text: message.get('menuContentGroupToolbarCollapseShow'),
      style: ['line'],
      func: () => {

        bookmark.all.forEach(item => { item.toolbar.collapse.show = true; });

        groupAndBookmark.render();

        groupSetting.edge.name.update();

        groupSetting.edge.toolbar.update();

        data.save();

      }
    }),
    hide: new Button({
      text: message.get('menuContentGroupToolbarCollapseHide'),
      style: ['line'],
      func: () => {

        bookmark.all.forEach(item => { item.toolbar.collapse.show = false; });

        groupAndBookmark.render();

        groupSetting.edge.name.update();

        groupSetting.edge.toolbar.update();

        data.save();

      }
    }),
    helper: new Control_helperText({
      text: [message.get('menuContentGroupToolbarCollapseHelperPara1')]
    })
  };

  groupSetting.control.toolbar.openAll = {
    label: new Control_label({
      text: message.get('menuContentGroupToolbarOpenAllLabel')
    }),
    show: new Button({
      text: message.get('menuContentGroupToolbarOpenAllShow'),
      style: ['line'],
      func: () => {

        bookmark.all.forEach(item => { item.toolbar.openAll.show = true; });

        groupAndBookmark.render();

        groupSetting.edge.name.update();

        groupSetting.edge.toolbar.update();

        data.save();

      }
    }),
    hide: new Button({
      text: message.get('menuContentGroupToolbarOpenAllHide'),
      style: ['line'],
      func: () => {

        bookmark.all.forEach(item => { item.toolbar.openAll.show = false; });

        groupAndBookmark.render();

        groupSetting.edge.name.update();

        groupSetting.edge.toolbar.update();

        data.save();

      }
    }),
    helper: new Control_helperText({
      text: [message.get('menuContentGroupToolbarOpenAllHelperPara1')]
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
