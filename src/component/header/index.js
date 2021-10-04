import { data } from '../data';
import { state } from '../state';
import { layout } from '../layout';
import { toolbar } from '../toolbar';

import { Clock } from '../clock';
import { Date } from '../date';
import { Greeting } from '../greeting';
import { Transitional } from '../transitional';
import { Search } from '../search';
import { HeaderItem } from '../headerItem';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';

import Sortable from 'sortablejs';

import './index.css';

const header = {};

header.element = {
  header: node('header|class:header'),
  area: node('div|class:header-area'),
  greeting: false,
  transitional: false,
  clock: false,
  date: false,
  search: false,
  border: {
    top: node('div|class:header-border-top'),
    bottom: node('div|class:header-border-bottom')
  }
};

header.item = {};

header.item.mod = {
  move: (origin, destination) => {

    const itemToMove = state.get.current().header.order.splice(origin, 1);

    state.get.current().header.order.splice(destination, 0, itemToMove[0]);

  },
  order: () => {

    const headerItems = ['greeting', 'transitional', 'clock', 'date', 'search', 'toolbar'];

    headerItems.reverse().forEach((item) => {

      switch (item) {

        case 'clock':

          if (state.get.current().header.clock.second.show ||
            state.get.current().header.clock.minute.show ||
            state.get.current().header.clock.hour.show) {

            if (!state.get.current().header.order.includes(item)) {

              let position = 0;

              if (state.get.current().header.date.day.show ||
                state.get.current().header.date.date.show ||
                state.get.current().header.date.month.show ||
                state.get.current().header.date.year.show) {

                position = state.get.current().header.order.indexOf('date');

              } else if (state.get.current().header.transitional.show) {

                position = state.get.current().header.order.indexOf('transitional') + 1;

              } else if (state.get.current().header.greeting.show) {

                position = state.get.current().header.order.indexOf('greeting') + 1;

              }

              state.get.current().header.order.splice(position, 0, item);

            }

          } else {

            if (state.get.current().header.order.includes(item)) {
              state.get.current().header.order.splice(state.get.current().header.order.indexOf(item), 1);
            }

          }

          break;

        case 'date':

          if (state.get.current().header.date.day.show ||
            state.get.current().header.date.date.show ||
            state.get.current().header.date.month.show ||
            state.get.current().header.date.year.show) {

            if (!state.get.current().header.order.includes(item)) {

              let position = 0;

              if (state.get.current().header.clock.second.show ||
                state.get.current().header.clock.minute.show ||
                state.get.current().header.clock.hour.show) {

                position = state.get.current().header.order.indexOf('clock') + 1;

              } else if (state.get.current().header.transitional.show) {

                position = state.get.current().header.order.indexOf('transitional') + 1;

              } else if (state.get.current().header.greeting.show) {

                position = state.get.current().header.order.indexOf('greeting') + 1;

              }

              state.get.current().header.order.splice(position, 0, item);

            }

          } else {

            if (state.get.current().header.order.includes(item)) {
              state.get.current().header.order.splice(state.get.current().header.order.indexOf(item), 1);
            }

          }

          break;

        case 'transitional':

          if (state.get.current().header.transitional.show) {

            if (!state.get.current().header.order.includes(item)) {

              let position = 0;

              if (state.get.current().header.clock.second.show ||
                state.get.current().header.clock.minute.show ||
                state.get.current().header.clock.hour.show) {

                position = state.get.current().header.order.indexOf('clock');

              } else if (state.get.current().header.date.day.show ||
                state.get.current().header.date.date.show ||
                state.get.current().header.date.month.show ||
                state.get.current().header.date.year.show) {

                position = state.get.current().header.order.indexOf('date');

              }

              state.get.current().header.order.splice(position, 0, item);

            }

          } else {

            if (state.get.current().header.order.includes(item)) {
              state.get.current().header.order.splice(state.get.current().header.order.indexOf(item), 1);
            }

          }

          break;

        case 'greeting':

          if (state.get.current().header.greeting.show) {

            if (!state.get.current().header.order.includes(item)) {

              state.get.current().header.order.unshift(item);

            }

          } else {

            if (state.get.current().header.order.includes(item)) {
              state.get.current().header.order.splice(state.get.current().header.order.indexOf(item), 1);
            }

          }

          break;

        case 'search':

          if (state.get.current().header.search.show) {

            if (!state.get.current().header.order.includes(item)) {

              let position = 0;

              switch (state.get.current().toolbar.location) {

                case 'header':

                  position = state.get.current().header.order.indexOf('toolbar');

                  break;

                default:

                  position = state.get.current().header.order.length;

              }

              state.get.current().header.order.splice(position, 0, item);

            }

          } else {

            if (state.get.current().header.order.includes(item)) {
              state.get.current().header.order.splice(state.get.current().header.order.indexOf(item), 1);
            }

          }

          break;

        case 'toolbar':

          switch (state.get.current().toolbar.location) {

            case 'corner':

              if (state.get.current().header.order.includes(item)) {
                state.get.current().header.order.splice(state.get.current().header.order.indexOf(item), 1);
              }

              break;

            case 'header':

              if (!state.get.current().header.order.includes(item)) {
                state.get.current().header.order.push(item);
              }

              break;

          }

          break;

      }

    });

  }
};

header.item.current = [];

header.item.render = () => {

  const order = state.get.current().header.order;

  header.element.clock = new Clock();

  header.element.date = new Date();

  header.element.greeting = new Greeting();

  header.element.transitional = new Transitional();

  header.element.search = new Search();

  order.forEach((item) => {

    switch (item) {

      case 'clock':

        if (state.get.current().header.clock.second.show ||
          state.get.current().header.clock.minute.show ||
          state.get.current().header.clock.hour.show) {

          const headerItem = new HeaderItem({
            name: item,
            child: header.element.clock.clock()
          });

          header.item.current.push(headerItem);

          header.element.header.appendChild(headerItem.item());

        }

        break;

      case 'date':

        if (state.get.current().header.date.day.show || state.get.current().header.date.date.show || state.get.current().header.date.month.show || state.get.current().header.date.year.show) {

          const headerItem = new HeaderItem({
            name: item,
            child: header.element.date.date()
          });

          header.item.current.push(headerItem);

          header.element.header.appendChild(headerItem.item());

        }

        break;

      case 'greeting':

        if (state.get.current().header.greeting.show) {

          const headerItem = new HeaderItem({
            name: item,
            child: header.element.greeting.greeting()
          });

          header.item.current.push(headerItem);

          header.element.header.appendChild(headerItem.item());

        }

        break;

      case 'transitional':

        if (
          ((
            state.get.current().header.clock.second.show ||
            state.get.current().header.clock.minute.show ||
            state.get.current().header.clock.hour.show ||
            state.get.current().header.date.day.show ||
            state.get.current().header.date.date.show ||
            state.get.current().header.date.month.show ||
            state.get.current().header.date.year.show
          )) &&
          state.get.current().header.transitional.show
        ) {

          const headerItem = new HeaderItem({
            name: item,
            child: header.element.transitional.transitional()
          });

          header.item.current.push(headerItem);

          header.element.header.appendChild(headerItem.item());

        }

        break;

      case 'search':

        if (state.get.current().header.search.show) {

          const headerItem = new HeaderItem({
            name: item,
            child: header.element.search.search()
          });

          header.item.current.push(headerItem);

          header.element.header.appendChild(headerItem.item());

        }

        break;

      case 'toolbar':

        switch (state.get.current().toolbar.location) {

          case 'header': {
            const headerItem = new HeaderItem({
              name: item,
              child: toolbar.current.toolbar()
            });

            header.item.current.push(headerItem);

            header.element.header.appendChild(headerItem.item());

            break;
          }

        }

        break;

    }

  });

  layout.element.header.appendChild(header.element.area);

  Sortable.create(header.element.header, {
    handle: '.header-control-sort',
    ghostClass: 'header-sort-placeholder',
    animation: 500,
    easing: 'cubic-bezier(0.8, 0.8, 0.4, 1.4)',
    onEnd: (event) => {

      // console.log('============ debug sort ============');
      // console.log(event);
      // console.log('item:', 'origin', event.oldIndex, 'destination', event.newIndex);

      header.item.mod.move(event.oldIndex, event.newIndex);

      data.save();

    }
  });

  const html = document.querySelector('html');

  if (state.get.current().header.order.length > 0) {
    html.classList.add('is-header-show');
  } else {
    html.classList.remove('is-header-show');
  }

};

header.item.clear = () => {

  clearChildNode(header.element.header);

};

header.area = {
  render: () => {

    header.element.area.appendChild(header.element.header);

  }
};

header.edit = {
  open: () => {

    state.get.current().header.edit = true;

    header.edit.render();

  },
  close: () => {

    state.get.current().header.edit = false;

    header.edit.render();

  },
  toggle: () => {

    if (state.get.current().header.edit) {
      header.edit.close();
    } else {
      header.edit.open();
    }

  },
  render: () => {

    applyCSSState('header.edit');

    if (header.item.current.length > 0) {
      header.item.current.forEach((item) => {

        if (state.get.current().header.edit) {
          item.control.enable();
        } else {
          item.control.disable();
        }

      });
    }

  }
};

header.init = () => {
  state.get.current().search = false;
  header.item.mod.order();
  header.area.render();
  header.edit.render();
  header.item.render();
  applyCSSVar([
    'header.greeting.size',
    'header.transitional.size',
    'header.clock.size',
    'header.date.size',
    'header.search.size',
    'header.search.width.size'
  ]);
  applyCSSClass([
    'header.item.justify',
    'header.search.width.by',
    'header.search.text.justify'
  ]);
  applyCSSState([
    'header.greeting.newLine',
    'header.clock.newLine',
    'header.transitional.newLine',
    'header.date.newLine',
    'header.search.newLine'
  ]);
};

export { header };
