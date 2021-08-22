import { state } from '../state';
import { data } from '../data';
import { bookmark } from '../bookmark';

import { node } from '../../utility/node';
import { get } from '../../utility/get';
import { set } from '../../utility/set';
import { clearChildNode } from '../../utility/clearChildNode';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';
import { trimString } from '../../utility/trimString';
import { isValidString } from '../../utility/isValidString';

import './index.css';

const layout = {}

layout.element = {
  layout: node('div|class:layout'),
  header: node('div|class:layout-header'),
  bookmark: node('div|class:layout-bookmark'),
  divider: node('div|class:layout-divider')
};

layout.area = {
  render: () => {

    layout.area.assemble();

    const body = document.querySelector('body');

    body.appendChild(layout.element.layout);

    const resize = new ResizeObserver((entries) => {

      const size = { sm: 550, md: 700, lg: 900, xl: 1100, xxl: 1600 };

      let breakpoint;

      entries.forEach(function(entry) {

        if (entry.contentRect.width <= size.sm) {
          breakpoint = 'xs';
        } else if (entry.contentRect.width > size.sm && entry.contentRect.width <= size.md) {
          breakpoint = 'sm';
        } else if (entry.contentRect.width > size.md && entry.contentRect.width <= size.lg) {
          breakpoint = 'md';
        } else if (entry.contentRect.width > size.lg && entry.contentRect.width <= size.xl) {
          breakpoint = 'lg';
        } else if (entry.contentRect.width > size.xl && entry.contentRect.width <= size.xxl) {
          breakpoint = 'xl';
        } else if (entry.contentRect.width > size.xxl) {
          breakpoint = 'xxl';
        };

      });

      state.get.current().layout.breakpoint = breakpoint;

      layout.breakpoint.render();

    });

    resize.observe(layout.element.bookmark);

  },
  assemble: () => {

    if (
      (state.get.current().header.clock.second.show ||
        state.get.current().header.clock.minute.show ||
        state.get.current().header.clock.hour.show) ||
      (state.get.current().header.date.day.show ||
        state.get.current().header.date.date.show ||
        state.get.current().header.date.month.show ||
        state.get.current().header.date.year.show) ||
      state.get.current().header.greeting.show ||
      state.get.current().header.search.show ||
      state.get.current().toolbar.location === 'header'
    ) {

      layout.element.layout.appendChild(layout.element.header);

    } else {

      if (layout.element.layout.contains(layout.element.header)) {

        layout.element.layout.removeChild(layout.element.header);

      };

    };

    if (state.get.current().theme.layout.divider.size > 0) {

      layout.element.layout.appendChild(layout.element.divider);

    } else {

      if (layout.element.layout.contains(layout.element.divider)) {

        layout.element.layout.removeChild(layout.element.divider);

      };

    };

    if (state.get.current().bookmark.show) {

      layout.element.layout.appendChild(layout.element.bookmark);

    } else {

      if (layout.element.layout.contains(layout.element.bookmark)) {

        layout.element.layout.removeChild(layout.element.bookmark);

      };

    };

  },
  clear: () => {
    clearChildNode(layout.element.layout);
  }
};

layout.header = {
  clear: () => {
    clearChildNode(layout.element.header);
  }
};

layout.bookmark = {
  clear: () => {
    clearChildNode(layout.element.bookmark);
  }
};

layout.breakpoint = {
  render: () => {

    const html = document.querySelector('html');

    const size = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

    size.forEach((item, i) => {
      html.classList.remove('is-layout-breakpoint-' + item);
    });

    switch (state.get.current().layout.breakpoint) {
      case 'xs':
        html.classList.add('is-layout-breakpoint-xs');
        break;

      case 'sm':
        html.classList.add('is-layout-breakpoint-sm');
        break;

      case 'md':
        html.classList.add('is-layout-breakpoint-md');
        break;

      case 'lg':
        html.classList.add('is-layout-breakpoint-lg');
        break;

      case 'xl':
        html.classList.add('is-layout-breakpoint-xl');
        break;

      case 'xxl':
        html.classList.add('is-layout-breakpoint-xxl');
        break;

    };
  }
};

layout.title = {
  render: () => {

    const title = document.querySelector('title');

    if (isValidString(state.get.current().layout.title)) {

      title.textContent = trimString(state.get.current().layout.title);

    } else {

      title.textContent = 'New Tab';

    };

  }
};

layout.init = () => {
  applyCSSVar([
    'layout.size',
    'layout.width',
    'layout.area.header.width',
    'layout.area.bookmark.width',
    'layout.padding',
    'layout.gutter'
  ]);
  applyCSSClass([
    'layout.alignment',
    'layout.direction',
    'layout.order',
    'layout.area.header.justify',
    'layout.area.bookmark.justify',
    'layout.scrollbar'
  ]);
  applyCSSState([
    'layout.overscroll'
  ]);
  layout.area.render();
  layout.title.render();
};

export { layout };
