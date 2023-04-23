import { message } from '../../message';

import { state } from '../../state';
import { data } from '../../data';
import { bookmark } from '../../bookmark';
import { layout } from '../../layout';
import { groupAndBookmark } from '../../groupAndBookmark';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';
import { Edge } from '../../edge';

import { Control_helperText } from '../../control/helperText';
import { Control_radio } from '../../control/radio';
import { Control_checkbox } from '../../control/checkbox';
import { Control_slider } from '../../control/slider';
import { Control_sliderSlim } from '../../control/sliderSlim';

import { node } from '../../../utility/node';
import { applyCSSVar } from '../../../utility/applyCSSVar';
import { applyCSSClass } from '../../../utility/applyCSSClass';
import { applyCSSState } from '../../../utility/applyCSSState';

const bookmarkSetting = {};

bookmarkSetting.control = {
  general: {},
  style: {},
  orientation: {},
  sort: {}
};

bookmarkSetting.disable = () => {

  if (state.get.current().bookmark.show) {
    bookmarkSetting.control.general.size.enable();
    bookmarkSetting.control.general.urlShow.enable();
    bookmarkSetting.control.general.lineShow.enable();
    bookmarkSetting.control.general.shadowShow.enable();
    bookmarkSetting.control.general.hoverScaleShow.enable();
    bookmarkSetting.control.general.newTab.enable();
    bookmarkSetting.control.style.type.enable();
    bookmarkSetting.control.orientation.orientationElement.enable();
    bookmarkSetting.control.orientation.orientationHelper.enable();
    bookmarkSetting.control.sort.letter.enable();
    bookmarkSetting.control.sort.icon.enable();
    bookmarkSetting.control.sort.name.enable();
  } else {
    bookmarkSetting.control.general.size.disable();
    bookmarkSetting.control.general.urlShow.disable();
    bookmarkSetting.control.general.lineShow.disable();
    bookmarkSetting.control.general.shadowShow.disable();
    bookmarkSetting.control.general.hoverScaleShow.disable();
    bookmarkSetting.control.general.newTab.disable();
    bookmarkSetting.control.style.type.disable();
    bookmarkSetting.control.orientation.orientationElement.disable();
    bookmarkSetting.control.orientation.orientationHelper.disable();
    bookmarkSetting.control.sort.letter.disable();
    bookmarkSetting.control.sort.icon.disable();
    bookmarkSetting.control.sort.name.disable();
  }

};

bookmarkSetting.edge = {
  general: {}
};

bookmarkSetting.general = (parent) => {

  if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

    bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

  }

  bookmarkSetting.control.general.show = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-show',
    path: 'bookmark.show',
    labelText: message.get('menuContentBookmarkGeneralShow'),
    action: () => {

      layout.area.assemble();

      applyCSSState('bookmark.show');

      bookmarkSetting.disable();

      if (bookmarkSetting.edge.general.size) {

        if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

          bookmarkSetting.edge.general.size.update.primary(bookmark.tile.current[0].tile());

        }

      } else {

        bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

      }

      bookmarkSetting.control.general.collapse.update();

      data.save();

    }
  });

  bookmarkSetting.control.general.urlShow = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-url-show',
    path: 'bookmark.url.show',
    labelText: message.get('menuContentBookmarkGeneralUrlShow'),
    action: () => {
      applyCSSState('bookmark.url.show');
      data.save();
    }
  });

  bookmarkSetting.control.general.lineShow = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-line-show',
    path: 'bookmark.line.show',
    labelText: message.get('menuContentBookmarkGeneralLineShow'),
    action: () => {
      applyCSSState('bookmark.line.show');
      data.save();
    }
  });

  bookmarkSetting.control.general.shadowShow = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-shadow-show',
    path: 'bookmark.shadow.show',
    labelText: message.get('menuContentBookmarkGeneralShadowShowLabel'),
    description: message.get('menuContentBookmarkGeneralShadowShowDescription'),
    action: () => {
      applyCSSState('bookmark.shadow.show');
      data.save();
    }
  });

  bookmarkSetting.control.general.hoverScaleShow = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-hoverScale-show',
    path: 'bookmark.hoverScale.show',
    labelText: message.get('menuContentBookmarkGeneralHoverScaleShow'),
    action: () => {
      applyCSSState('bookmark.hoverScale.show');
      data.save();
    }
  });

  bookmarkSetting.control.general.newTab = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-newTab',
    path: 'bookmark.newTab',
    labelText: message.get('menuContentBookmarkGeneralNewTab'),
    action: () => {

      groupAndBookmark.render();

      if (bookmarkSetting.edge.general.size) {

        if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

          bookmarkSetting.edge.general.size.update.primary(bookmark.tile.current[0].tile());

        }

      } else {

        bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

      }

      data.save();

    }
  });

  bookmarkSetting.control.general.size = new Control_slider({
    object: state.get.current(),
    path: 'bookmark.size',
    id: 'bookmark-size',
    labelText: message.get('menuContentBookmarkGeneralSize'),
    value: state.get.current().bookmark.size,
    defaultValue: state.get.default().bookmark.size,
    min: state.get.minMax().bookmark.size.min,
    max: state.get.minMax().bookmark.size.max,
    action: () => {
      applyCSSVar('bookmark.size');
      if (state.get.current().bookmark.show && bookmark.tile.current.length > 0 && bookmarkSetting.edge.general.size) { bookmarkSetting.edge.general.size.track(); }
      data.save();
    },
    mouseDownAction: () => {
      if (state.get.current().bookmark.show && bookmark.tile.current.length > 0 && bookmarkSetting.edge.general.size) { bookmarkSetting.edge.general.size.show(); }
    },
    mouseUpAction: () => {
      if (state.get.current().bookmark.show && bookmark.tile.current.length > 0 && bookmarkSetting.edge.general.size) { bookmarkSetting.edge.general.size.hide(); }
    }
  });

  bookmarkSetting.control.general.area = node('div', [
    bookmarkSetting.control.general.urlShow.wrap(),
    bookmarkSetting.control.general.lineShow.wrap(),
    bookmarkSetting.control.general.shadowShow.wrap(),
    bookmarkSetting.control.general.hoverScaleShow.wrap(),
    bookmarkSetting.control.general.newTab.wrap(),
    bookmarkSetting.control.general.size.wrap()
  ]);

  bookmarkSetting.control.general.collapse = new Collapse({
    type: 'checkbox',
    checkbox: bookmarkSetting.control.general.show,
    target: [{
      content: bookmarkSetting.control.general.area
    }]
  });

  parent.appendChild(
    node('div', [
      bookmarkSetting.control.general.show.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              bookmarkSetting.control.general.collapse.collapse()
            ]
          })
        ]
      })
    ])
  );

};

bookmarkSetting.style = (parent) => {

  bookmarkSetting.control.style.type = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'bookmark-style-type-block', labelText: message.get('menuContentBookmarkStyleTypeBlockLabel'), description: message.get('menuContentBookmarkStyleTypeBlockDescription'), value: 'block' },
      { id: 'bookmark-style-type-list', labelText: message.get('menuContentBookmarkStyleTypeListLabel'), description: message.get('menuContentBookmarkStyleTypeListDescription'), value: 'list' }
    ],
    groupName: 'bookmark-style-type',
    path: 'bookmark.style.type',
    action: () => {

      switch (state.get.current().bookmark.style.type) {

        case 'block':
          bookmark.direction.mod.vertical();

          state.get.current().bookmark.style = {
            type: 'block',
            width: 11,
            height: 10
          };

          break;

        case 'list':
          bookmark.direction.mod.horizontal();

          state.get.current().bookmark.style = {
            type: 'list',
            width: 20,
            height: 4
          };

          break;

      }

      bookmarkSetting.control.style.width.update();
      bookmarkSetting.control.style.height.update();

      applyCSSClass('bookmark.style.type');

      groupAndBookmark.render();

      if (bookmarkSetting.edge.general.size) {

        if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

          bookmarkSetting.edge.general.size.update.primary(bookmark.tile.current[0].tile());

        }

      } else {

        bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

      }

      data.save();

    }
  });

  bookmarkSetting.control.style.width = new Control_sliderSlim({
    object: state.get.current(),
    path: 'bookmark.style.width',
    id: 'bookmark-style-width',
    labelText: message.get('menuContentBookmarkStyleWidthLabel'),
    value: state.get.current().bookmark.style.width,
    defaultValue: state.get.default().bookmark.style.width,
    min: state.get.minMax().bookmark.style.width.min,
    max: state.get.minMax().bookmark.style.width.max,
    action: () => {
      groupAndBookmark.render();

      if (bookmarkSetting.edge.general.size) {

        if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

          bookmarkSetting.edge.general.size.update.primary(bookmark.tile.current[0].tile());

        }

      } else {

        bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

      }

      data.save();
    }
  });

  bookmarkSetting.control.style.height = new Control_sliderSlim({
    object: state.get.current(),
    path: 'bookmark.style.height',
    id: 'bookmark-style-height',
    labelText: message.get('menuContentBookmarkStyleHeightLabel'),
    value: state.get.current().bookmark.style.height,
    defaultValue: state.get.default().bookmark.style.height,
    min: state.get.minMax().bookmark.style.height.min,
    max: state.get.minMax().bookmark.style.height.max,
    action: () => {
      groupAndBookmark.render();

      if (bookmarkSetting.edge.general.size) {

        if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

          bookmarkSetting.edge.general.size.update.primary(bookmark.tile.current[0].tile());

        }

      } else {

        bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

      }

      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      bookmarkSetting.control.style.type.wrap(),
      node('hr'),
      bookmarkSetting.control.style.width.wrap(),
      node('hr'),
      bookmarkSetting.control.style.height.wrap()
    ])
  );

};

bookmarkSetting.orientation = (parent) => {

  bookmarkSetting.control.orientation.orientationElement = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'bookmark-orientation-top', labelText: message.get('menuContentBookmarkOrientationTop'), value: 'top' },
      { id: 'bookmark-orientation-bottom', labelText: message.get('menuContentBookmarkOrientationBottom'), value: 'bottom' }
    ],
    groupName: 'bookmark-orientation',
    path: 'bookmark.orientation',
    action: () => {

      applyCSSClass('bookmark.orientation');

      if (bookmarkSetting.edge.general.size) {

        if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

          bookmarkSetting.edge.general.size.update.primary(bookmark.tile.current[0].tile());

        }

      } else {

        bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

      }

      data.save();

    }
  });

  bookmarkSetting.control.orientation.orientationHelper = new Control_helperText({
    text: [message.get('menuContentBookmarkOrientationHelperPara1')]
  });

  parent.appendChild(
    node('div', [
      bookmarkSetting.control.orientation.orientationElement.inline(),
      bookmarkSetting.control.orientation.orientationHelper.wrap()
    ])
  );

};

bookmarkSetting.sort = (parent) => {

  bookmarkSetting.control.sort.letter = new Button({
    text: message.get('menuContentBookmarkSortLetter'),
    style: ['line'],
    func: () => {

      bookmark.item.mod.sort.letter();

      groupAndBookmark.render();

      if (bookmarkSetting.edge.general.size) {

        if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

          bookmarkSetting.edge.general.size.update.primary(bookmark.tile.current[0].tile());

        }

      } else {

        bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

      }

      data.save();

    }
  });

  bookmarkSetting.control.sort.icon = new Button({
    text: message.get('menuContentBookmarkSortIcon'),
    style: ['line'],
    func: () => {

      bookmark.item.mod.sort.icon();

      groupAndBookmark.render();

      if (bookmarkSetting.edge.general.size) {

        if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

          bookmarkSetting.edge.general.size.update.primary(bookmark.tile.current[0].tile());

        }

      } else {

        bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

      }

      data.save();

    }
  });

  bookmarkSetting.control.sort.name = new Button({
    text: message.get('menuContentBookmarkSortName'),
    style: ['line'],
    func: () => {

      bookmark.item.mod.sort.name();

      groupAndBookmark.render();

      if (bookmarkSetting.edge.general.size) {

        if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

          bookmarkSetting.edge.general.size.update.primary(bookmark.tile.current[0].tile());

        }

      } else {

        bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

      }

      data.save();

    }
  });

  parent.appendChild(
    node('div', [
      form.wrap({
        children: [
          form.inline({
            gap: 'small',
            wrap: true,
            equalGap: true,
            children: [
              bookmarkSetting.control.sort.letter.wrap(),
              bookmarkSetting.control.sort.icon.wrap(),
              bookmarkSetting.control.sort.name.wrap()
            ]
          })
        ]
      })
    ])
  );

};

export { bookmarkSetting };
