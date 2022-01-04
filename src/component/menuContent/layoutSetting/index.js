import { message } from '../../message';

import { state } from '../../state';
import { data } from '../../data';
import { header } from '../../header';
import { bookmark } from '../../bookmark';
import { layout } from '../../layout';
import { theme } from '../../theme';

import * as form from '../../form';

import { Edge } from '../../edge';

import { Control_helperText } from '../../control/helperText';
import { Control_radio } from '../../control/radio';
import { Control_radioGrid } from '../../control/radioGrid';
import { Control_checkbox } from '../../control/checkbox';
import { Control_slider } from '../../control/slider';
import { Control_textReset } from '../../control/textReset';

import { node } from '../../../utility/node';
import { applyCSSVar } from '../../../utility/applyCSSVar';
import { applyCSSClass } from '../../../utility/applyCSSClass';
import { applyCSSState } from '../../../utility/applyCSSState';

const layoutSetting = {};

layoutSetting.control = {
  scaling: {},
  area: {},
  padding: {},
  gutter: {},
  alignment: {},
  page: {}
};

layoutSetting.disable = () => {

  if (state.get.current().bookmark.show) {

    layoutSetting.control.area.bookmark.width.enable();
    layoutSetting.control.area.bookmark.justify.enable();
    layoutSetting.control.area.bookmark.justifyHelper1.enable();

  } else {

    layoutSetting.control.area.bookmark.width.disable();
    layoutSetting.control.area.bookmark.justify.disable();
    layoutSetting.control.area.bookmark.justifyHelper1.disable();

  }

  if (state.get.current().header.order.length > 0) {

    layoutSetting.control.area.header.width.enable();
    layoutSetting.control.area.header.justify.enable();
    layoutSetting.control.area.header.justifyHelper1.enable();

  } else {

    layoutSetting.control.area.header.width.disable();
    layoutSetting.control.area.header.justify.disable();
    layoutSetting.control.area.header.justifyHelper1.disable();

  }

  if (state.get.current().bookmark.show) {

    switch (state.get.current().layout.direction) {

      case 'vertical':
        layoutSetting.control.area.header.justify.enable();
        layoutSetting.control.area.header.justifyHelper1.enable();
        layoutSetting.control.area.bookmark.justify.enable();
        layoutSetting.control.area.bookmark.justifyHelper1.enable();
        break;

      case 'horizontal':
        layoutSetting.control.area.header.justify.disable();
        layoutSetting.control.area.header.justifyHelper1.disable();
        layoutSetting.control.area.bookmark.justify.disable();
        layoutSetting.control.area.bookmark.justifyHelper1.disable();
        break;

    }

  }

  if (state.get.current().layout.overscroll.active) {
    layoutSetting.control.page.overscroll.unblur.enable();
  } else {
    layoutSetting.control.page.overscroll.unblur.disable();
  }

};

layoutSetting.edge = {
  scaling: {},
  area: {},
  padding: {},
  gutter: {},
  alignment: {}
};

layoutSetting.scaling = (parent) => {

  layoutSetting.edge.scaling.size = new Edge({ primary: layout.element.layout });

  layoutSetting.control.scaling.size = new Control_slider({
    object: state.get.current(),
    path: 'layout.size',
    id: 'layout-size',
    labelText: message.get('menuContentLayoutScalingSize'),
    value: state.get.current().layout.size,
    defaultValue: state.get.default().layout.size,
    min: state.get.minMax().layout.size.min,
    max: state.get.minMax().layout.size.max,
    action: () => {
      applyCSSVar('layout.size');
      layoutSetting.edge.scaling.size.track();
      data.save();
    },
    mouseDownAction: () => {
      layoutSetting.edge.scaling.size.show();
    },
    mouseUpAction: () => {
      layoutSetting.edge.scaling.size.hide();
    }
  });

  parent.appendChild(
    node('div', [
      layoutSetting.control.scaling.size.wrap()
    ])
  );

};

layoutSetting.area = (parent) => {

  layoutSetting.edge.area.width = new Edge({ primary: layout.element.layout });

  layoutSetting.edge.area.header = new Edge({ primary: header.element.area, secondary: [layout.element.layout] });

  layoutSetting.edge.area.bookmark = new Edge({ primary: bookmark.element.area, secondary: [layout.element.layout] });

  layoutSetting.control.area.width = new Control_slider({
    object: state.get.current(),
    path: 'layout.width',
    id: 'layout-width',
    labelText: message.get('menuContentLayoutAreaWidth'),
    value: state.get.current().layout.width,
    defaultValue: state.get.default().layout.width,
    min: state.get.minMax().layout.width.min,
    max: state.get.minMax().layout.width.max,
    action: () => {
      applyCSSVar('layout.width');
      layoutSetting.edge.area.width.track();
      data.save();
    },
    mouseDownAction: () => {
      layoutSetting.edge.area.width.show();
    },
    mouseUpAction: () => {
      layoutSetting.edge.area.width.hide();
    }
  });

  layoutSetting.control.area.header = {
    width: new Control_slider({
      object: state.get.current(),
      path: 'layout.area.header.width',
      id: 'layout-area-header-width',
      labelText: message.get('menuContentLayoutAreaHeaderWidth'),
      value: state.get.current().layout.area.header.width,
      defaultValue: state.get.default().layout.area.header.width,
      min: state.get.minMax().layout.area.header.width.min,
      max: state.get.minMax().layout.area.header.width.max,
      action: () => {
        applyCSSVar('layout.area.header.width');
        layoutSetting.edge.area.header.track();
        data.save();
      },
      mouseDownAction: () => {
        layoutSetting.edge.area.header.show();
      },
      mouseUpAction: () => {
        layoutSetting.edge.area.header.hide();
      }
    }),
    justify: new Control_radioGrid({
      object: state.get.current(),
      radioGroup: [
        { id: 'layout-area-header-justify-left', labelText: message.get('menuContentLayoutAreaHeaderJustifyLeft'), value: 'left', position: 1 },
        { id: 'layout-area-header-justify-center', labelText: message.get('menuContentLayoutAreaHeaderJustifyCenter'), value: 'center', position: 2 },
        { id: 'layout-area-header-justify-right', labelText: message.get('menuContentLayoutAreaHeaderJustifyRight'), value: 'right', position: 3 }
      ],
      label: message.get('menuContentLayoutAreaHeaderJustifyLabel'),
      groupName: 'layout-area-header-justify',
      path: 'layout.area.header.justify',
      gridSize: '3x1',
      action: () => {
        applyCSSClass('layout.area.header.justify');
        data.save();
      }
    }),
    justifyHelper1: new Control_helperText({
      text: [message.get('menuContentLayoutAreaHeaderJustifyHelper1Para1')]
    }),
    justifyHelper2: new Control_helperText({
      complexText: true,
      text: [message.get('menuContentLayoutAreaHeaderJustifyHelper2Para1')]
    })
  };

  layoutSetting.control.area.bookmark = {
    width: new Control_slider({
      object: state.get.current(),
      path: 'layout.area.bookmark.width',
      id: 'layout-area-bookmark-width',
      labelText: message.get('menuContentLayoutAreaBookmarkWidth'),
      value: state.get.current().layout.area.bookmark.width,
      defaultValue: state.get.default().layout.area.bookmark.width,
      min: state.get.minMax().layout.area.bookmark.width.min,
      max: state.get.minMax().layout.area.bookmark.width.max,
      action: () => {
        applyCSSVar('layout.area.bookmark.width');
        layoutSetting.edge.area.bookmark.track();
        data.save();
      },
      mouseDownAction: () => {
        layoutSetting.edge.area.bookmark.show();
      },
      mouseUpAction: () => {
        layoutSetting.edge.area.bookmark.hide();
      }
    }),
    justify: new Control_radioGrid({
      object: state.get.current(),
      radioGroup: [
        { id: 'layout-area-bookmark-justify-left', labelText: message.get('menuContentLayoutAreaBookmarkJustifyLeft'), value: 'left', position: 1 },
        { id: 'layout-area-bookmark-justify-center', labelText: message.get('menuContentLayoutAreaBookmarkJustifyCenter'), value: 'center', position: 2 },
        { id: 'layout-area-bookmark-justify-right', labelText: message.get('menuContentLayoutAreaBookmarkJustifyRight'), value: 'right', position: 3 }
      ],
      label: message.get('menuContentLayoutAreaBookmarkJustifyLabel'),
      groupName: 'layout-area-bookmark-justify',
      path: 'layout.area.bookmark.justify',
      gridSize: '3x1',
      action: () => {
        applyCSSClass('layout.area.bookmark.justify');
        data.save();
      }
    }),
    justifyHelper1: new Control_helperText({
      text: [message.get('menuContentLayoutAreaBookmarkJustifyHelper1Para1')]
    }),
    justifyHelper2: new Control_helperText({
      complexText: true,
      text: [message.get('menuContentLayoutAreaBookmarkJustifyHelper2Para1')]
    })
  };

  parent.appendChild(
    node('div', [
      layoutSetting.control.area.width.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              node('hr'),
              layoutSetting.control.area.header.width.wrap(),
              layoutSetting.control.area.header.justify.wrap(),
              layoutSetting.control.area.header.justifyHelper1.wrap(),
              layoutSetting.control.area.header.justifyHelper2.wrap(),
              node('hr'),
              layoutSetting.control.area.bookmark.width.wrap(),
              layoutSetting.control.area.bookmark.justify.wrap(),
              layoutSetting.control.area.bookmark.justifyHelper1.wrap(),
              layoutSetting.control.area.bookmark.justifyHelper2.wrap()
            ]
          })
        ]
      })
    ])
  );

};

layoutSetting.padding = (parent) => {

  layoutSetting.edge.padding = new Edge({ primary: layout.element.layout, secondary: [header.element.header, bookmark.element.group] });

  layoutSetting.control.padding = new Control_slider({
    object: state.get.current(),
    path: 'layout.padding',
    id: 'layout-padding',
    labelText: message.get('menuContentLayoutPadding'),
    value: state.get.current().layout.padding,
    defaultValue: state.get.default().layout.padding,
    min: state.get.minMax().layout.padding.min,
    max: state.get.minMax().layout.padding.max,
    action: () => {
      applyCSSVar('layout.padding');
      layoutSetting.edge.padding.track();
      data.save();
    },
    mouseDownAction: () => {
      layoutSetting.edge.padding.show();
    },
    mouseUpAction: () => {
      layoutSetting.edge.padding.hide();
    }
  });

  parent.appendChild(
    node('div', [
      layoutSetting.control.padding.wrap()
    ])
  );

};

layoutSetting.gutter = (parent) => {

  layoutSetting.edge.gutter = new Edge({ primary: layout.element.layout, secondary: [header.element.header, bookmark.element.group] });

  layoutSetting.control.gutter = new Control_slider({
    object: state.get.current(),
    path: 'layout.gutter',
    id: 'layout-gutter',
    labelText: message.get('menuContentLayoutGutter'),
    value: state.get.current().layout.gutter,
    defaultValue: state.get.default().layout.gutter,
    min: state.get.minMax().layout.gutter.min,
    max: state.get.minMax().layout.gutter.max,
    action: () => {
      applyCSSVar('layout.gutter');
      layoutSetting.edge.gutter.track();
      data.save();
    },
    mouseDownAction: () => {
      layoutSetting.edge.gutter.show();
    },
    mouseUpAction: () => {
      layoutSetting.edge.gutter.hide();
    }
  });

  parent.appendChild(
    node('div', [
      layoutSetting.control.gutter.wrap()
    ])
  );

};

layoutSetting.alignment = (parent) => {

  layoutSetting.control.alignment.alignment = new Control_radioGrid({
    object: state.get.current(),
    radioGroup: [
      { id: 'layout-alignment-top-left', labelText: message.get('menuContentLayoutAlignmentTopLeft'), value: 'top-left', position: 1 },
      { id: 'layout-alignment-top-center', labelText: message.get('menuContentLayoutAlignmentTopCenter'), value: 'top-center', position: 2 },
      { id: 'layout-alignment-top-right', labelText: message.get('menuContentLayoutAlignmentTopRight'), value: 'top-right', position: 3 },
      { id: 'layout-alignment-center-left', labelText: message.get('menuContentLayoutAlignmentCenterLeft'), value: 'center-left', position: 4 },
      { id: 'layout-alignment-center-center', labelText: message.get('menuContentLayoutAlignmentCenterCenter'), value: 'center-center', position: 5 },
      { id: 'layout-alignment-center-right', labelText: message.get('menuContentLayoutAlignmentCenterRight'), value: 'center-right', position: 6 },
      { id: 'layout-alignment-bottom-left', labelText: message.get('menuContentLayoutAlignmentBottomLeft'), value: 'bottom-left', position: 7 },
      { id: 'layout-alignment-bottom-center', labelText: message.get('menuContentLayoutAlignmentBottomCenter'), value: 'bottom-center', position: 8 },
      { id: 'layout-alignment-bottom-right', labelText: message.get('menuContentLayoutAlignmentBottomRight'), value: 'bottom-right', position: 9 }
    ],
    label: message.get('menuContentLayoutAlignmentLabel'),
    groupName: 'layout-alignment',
    path: 'layout.alignment',
    gridSize: '3x3',
    action: () => {
      applyCSSClass('layout.alignment');
      data.save();
    }
  });

  layoutSetting.control.alignment.direction = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'layout-direction-horizontal', labelText: message.get('menuContentLayoutDirectionHorizontalLabel'), description: message.get('menuContentLayoutDirectionHorizontalDescription'), value: 'horizontal' },
      { id: 'layout-direction-vertical', labelText: message.get('menuContentLayoutDirectionVerticalLabel'), description: message.get('menuContentLayoutDirectionVerticalDescription'), value: 'vertical' }
    ],
    groupName: 'layout-direction',
    path: 'layout.direction',
    action: () => {
      applyCSSClass('layout.direction');
      layoutSetting.disable();
      data.save();
    }
  });

  layoutSetting.control.alignment.order = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'layout-order-header-bookmark', labelText: message.get('menuContentLayoutOrderHeaderBookmarkLabel'), description: message.get('menuContentLayoutOrderHeaderBookmarkDescription'), value: 'header-bookmark' },
      { id: 'layout-order-bookmark-header', labelText: message.get('menuContentLayoutOrderBookmarkHeaderLabel'), description: message.get('menuContentLayoutOrderBookmarkHeaderDescription'), value: 'bookmark-header' }
    ],
    groupName: 'layout-order',
    path: 'layout.order',
    action: () => {
      layout.area.assemble();
      applyCSSClass('layout.order');
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      layoutSetting.control.alignment.alignment.wrap(),
      node('hr'),
      layoutSetting.control.alignment.direction.wrap(),
      node('hr'),
      layoutSetting.control.alignment.order.wrap()
    ])
  );

};

layoutSetting.page = (parent) => {

  layoutSetting.control.page.title = new Control_textReset({
    object: state.get.current(),
    path: 'layout.title',
    id: 'layout-title',
    value: state.get.current().layout.title,
    defaultValue: state.get.default().layout.title,
    placeholder: message.get('menuContentLayoutPageTitlePlaceholder'),
    labelText: message.get('menuContentLayoutPageTitleLabel'),
    action: () => {
      layout.title.render();
      data.save();
    }
  });

  layoutSetting.control.page.favicon = new Control_textReset({
    object: state.get.current(),
    path: 'layout.favicon',
    id: 'layout-favicon',
    value: state.get.current().layout.favicon,
    defaultValue: state.get.default().layout.favicon,
    placeholder: message.get('menuContentLayoutPageFaviconPlaceholder'),
    labelText: message.get('menuContentLayoutPageFaviconLabel'),
    action: () => {
      layout.favicon.render();
      data.save();
    }
  });

  layoutSetting.control.page.faviconHelper = new Control_helperText({
    text: [message.get('menuContentLayoutPageFaviconHelperPara1')]
  });

  layoutSetting.control.page.scrollbar = new Control_radio({
    object: state.get.current(),
    label: message.get('menuContentLayoutPageScrollbarLabel'),
    radioGroup: [
      { id: 'layout-scrollbar-auto', labelText: message.get('menuContentLayoutPageScrollbarAuto'), value: 'auto' },
      { id: 'layout-scrollbar-thin', labelText: message.get('menuContentLayoutPageScrollbarThin'), value: 'thin' },
      { id: 'layout-scrollbar-none', labelText: message.get('menuContentLayoutPageScrollbarNone'), value: 'none' }
    ],
    groupName: 'layout-scrollbar',
    path: 'layout.scrollbar',
    action: () => {
      applyCSSClass('layout.scrollbar');
      data.save();
    }
  });

  layoutSetting.control.page.scrollbarHelper = new Control_helperText({
    text: [message.get('menuContentLayoutPageScrollbarHelperPara1')]
  });

  layoutSetting.control.page.overscroll = {
    active: new Control_checkbox({
      object: state.get.current(),
      path: 'layout.overscroll.active',
      id: 'layout-overscroll-active',
      labelText: message.get('menuContentLayoutPageOverscrollActive'),
      action: () => {
        applyCSSState('layout.overscroll.active');
        layoutSetting.disable();
        data.save();
      }
    }),
    unblur: new Control_checkbox({
      object: state.get.current(),
      path: 'layout.overscroll.unblur',
      id: 'layout-overscroll-unblur-background',
      labelText: message.get('menuContentLayoutPageOverscrollUnblurLabel'),
      description: [
        message.get('menuContentLayoutPageOverscrollUnblurDescriptionPara1'),
        message.get('menuContentLayoutPageOverscrollUnblurDescriptionPara2')
      ],
      action: () => {
        theme.background.image.render();
        theme.background.video.clear();
        theme.background.video.render();
        layout.overscroll.bind();
        data.save();
      }
    })
  };

  parent.appendChild(
    node('div', [
      layoutSetting.control.page.title.wrap(),
      layoutSetting.control.page.favicon.wrap(),
      layoutSetting.control.page.faviconHelper.wrap(),
      node('hr'),
      layoutSetting.control.page.scrollbar.inline(),
      layoutSetting.control.page.scrollbarHelper.wrap(),
      node('hr'),
      layoutSetting.control.page.overscroll.active.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              layoutSetting.control.page.overscroll.unblur.wrap()
            ]
          })
        ]
      })
    ])
  );

};

export { layoutSetting };
