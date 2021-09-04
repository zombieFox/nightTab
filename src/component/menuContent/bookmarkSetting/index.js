import { state } from '../../state';
import { data } from '../../data';
import { header } from '../../header';
import { bookmark } from '../../bookmark';
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
    bookmarkSetting.control.style.enable();
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
    bookmarkSetting.control.style.disable();
    bookmarkSetting.control.orientation.orientationElement.disable();
    bookmarkSetting.control.orientation.orientationHelper.disable();
    bookmarkSetting.control.sort.letter.disable();
    bookmarkSetting.control.sort.icon.disable();
    bookmarkSetting.control.sort.name.disable();
  };

};

bookmarkSetting.edge = {
  general: {}
};

bookmarkSetting.general = (parent) => {

  if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

    bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

  };

  bookmarkSetting.control.general.show = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-show',
    path: 'bookmark.show',
    labelText: 'Show Bookmarks',
    action: () => {

      layout.area.assemble();

      applyCSSState('bookmark.show');

      bookmarkSetting.disable();

      if (bookmarkSetting.edge.general.size) {

        if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

          bookmarkSetting.edge.general.size.update.primary(bookmark.tile.current[0].tile());

        };

      } else {

        bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

      };

      bookmarkSetting.control.general.collapse.update();

      data.save();

    }
  });

  bookmarkSetting.control.general.urlShow = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-url-show',
    path: 'bookmark.url.show',
    labelText: 'Show URL on Bookmark hover',
    action: () => {
      applyCSSState('bookmark.url.show');
      data.save();
    }
  });

  bookmarkSetting.control.general.lineShow = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-line-show',
    path: 'bookmark.line.show',
    labelText: 'Show Bookmark line',
    action: () => {
      applyCSSState('bookmark.line.show');
      data.save();
    }
  });

  bookmarkSetting.control.general.shadowShow = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-shadow-show',
    path: 'bookmark.shadow.show',
    labelText: 'Show shadow on Bookmark hover',
    description: 'Effects may not be visible if Theme Shadow is set to 0.',
    action: () => {
      applyCSSState('bookmark.shadow.show');
      data.save();
    }
  });

  bookmarkSetting.control.general.hoverScaleShow = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-hoverScale-show',
    path: 'bookmark.hoverScale.show',
    labelText: 'Grow on Bookmark hover',
    action: () => {
      applyCSSState('bookmark.hoverScale.show');
      data.save();
    }
  });

  bookmarkSetting.control.general.newTab = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-newTab',
    path: 'bookmark.newTab',
    labelText: 'Open Bookmarks in a new tab',
    action: () => {

      groupAndBookmark.render();

      if (bookmarkSetting.edge.general.size) {

        if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

          bookmarkSetting.edge.general.size.update.primary(bookmark.tile.current[0].tile());

        };

      } else {

        bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

      };

      data.save();

    }
  });

  bookmarkSetting.control.general.size = new Control_slider({
    object: state.get.current(),
    path: 'bookmark.size',
    id: 'bookmark-size',
    labelText: 'Bookmark size',
    value: state.get.current().bookmark.size,
    defaultValue: state.get.default().bookmark.size,
    min: state.get.minMax().bookmark.size.min,
    max: state.get.minMax().bookmark.size.max,
    action: () => {
      applyCSSVar('bookmark.size');
      if (state.get.current().bookmark.show && bookmark.tile.current.length > 0 && bookmarkSetting.edge.general.size) { bookmarkSetting.edge.general.size.track(); };
      data.save();
    },
    mouseDownAction: () => {
      if (state.get.current().bookmark.show && bookmark.tile.current.length > 0 && bookmarkSetting.edge.general.size) { bookmarkSetting.edge.general.size.show(); };
    },
    mouseUpAction: () => {
      if (state.get.current().bookmark.show && bookmark.tile.current.length > 0 && bookmarkSetting.edge.general.size) { bookmarkSetting.edge.general.size.hide(); };
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

  bookmarkSetting.control.style = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'bookmark-style-block', labelText: 'Block', description: 'Square shaped Bookmark tiles.', value: 'block' },
      { id: 'bookmark-style-list', labelText: 'List', description: 'Short and wide Bookmark tiles.', value: 'list' }
    ],
    groupName: 'bookmark-style',
    path: 'bookmark.style',
    action: () => {

      switch (state.get.current().bookmark.style) {

        case 'block':
          bookmark.direction.mod.vertical();
          break;

        case 'list':
          bookmark.direction.mod.horizontal();
          break;

      };

      applyCSSClass('bookmark.style');

      groupAndBookmark.render();

      if (bookmarkSetting.edge.general.size) {

        if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

          bookmarkSetting.edge.general.size.update.primary(bookmark.tile.current[0].tile());

        };

      } else {

        bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

      };

      data.save();

    }
  });

  parent.appendChild(
    node('div', [
      bookmarkSetting.control.style.wrap(),
    ])
  );

};

bookmarkSetting.orientation = (parent) => {

  bookmarkSetting.control.orientation.orientationElement = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'bookmark-orientation-top', labelText: 'Top', value: 'top' },
      { id: 'bookmark-orientation-bottom', labelText: 'Bottom', value: 'bottom' }
    ],
    groupName: 'bookmark-orientation',
    path: 'bookmark.orientation',
    action: () => {

      applyCSSClass('bookmark.orientation');

      if (bookmarkSetting.edge.general.size) {

        if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

          bookmarkSetting.edge.general.size.update.primary(bookmark.tile.current[0].tile());

        };

      } else {

        bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

      };

      data.save();

    }
  });

  bookmarkSetting.control.orientation.orientationHelper = new Control_helperText({
    text: ['Display the URL and Controls either at the top or bottom of a Bookmark Tile.']
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
    text: 'By letter',
    style: ['line'],
    func: () => {

      bookmark.item.mod.sort.letter();

      groupAndBookmark.render();

      if (bookmarkSetting.edge.general.size) {

        if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

          bookmarkSetting.edge.general.size.update.primary(bookmark.tile.current[0].tile());

        };

      } else {

        bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

      };

      data.save();

    }
  });

  bookmarkSetting.control.sort.icon = new Button({
    text: 'By icon',
    style: ['line'],
    func: () => {

      bookmark.item.mod.sort.icon();

      groupAndBookmark.render();

      if (bookmarkSetting.edge.general.size) {

        if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

          bookmarkSetting.edge.general.size.update.primary(bookmark.tile.current[0].tile());

        };

      } else {

        bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

      };

      data.save();

    }
  });

  bookmarkSetting.control.sort.name = new Button({
    text: 'By name',
    style: ['line'],
    func: () => {

      bookmark.item.mod.sort.name();

      groupAndBookmark.render();

      if (bookmarkSetting.edge.general.size) {

        if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {

          bookmarkSetting.edge.general.size.update.primary(bookmark.tile.current[0].tile());

        };

      } else {

        bookmarkSetting.edge.general.size = new Edge({ primary: bookmark.tile.current[0].tile(), secondary: [bookmark.element.area] });

      };

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

export { bookmarkSetting }
