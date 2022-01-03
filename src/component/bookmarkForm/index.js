import { message } from '../message';

import { bookmark } from '../bookmark';
import { bookmarkDefault } from '../bookmarkDefault';
import { bookmarkMinMax } from '../bookmarkMinMax';

import * as form from '../form';

import { Button } from '../button';
import { Suggest } from '../suggest';
import { Collapse } from '../collapse';
import { Tab } from '../tab';
import { BookmarkPreview } from '../bookmarkPreview';
import { Alert } from '../alert';

import { Control_helperText } from '../control/helperText';
import { Control_groupText } from '../control/groupText';
import { Control_radio } from '../control/radio';
import { Control_radioGrid } from '../control/radioGrid';
import { Control_checkbox } from '../control/checkbox';
import { Control_sliderSlim } from '../control/sliderSlim';
import { Control_colorMixer } from '../control/colorMixer';
import { Control_text } from '../control/text';
import { Control_select } from '../control/select';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';
import { isValidString } from '../../utility/isValidString';
import { ordinalNumber } from '../../utility/ordinalNumber';
import { randomString } from '../../utility/randomString';
import { randomNumber } from '../../utility/randomNumber';

import './index.css';

export const BookmarkForm = function({
  bookmarkData = false
} = {}) {

  this.element = {
    form: node('form|class:bookmark-form'),
    main: node('div|class:bookmark-form-main'),
    aside: node('div|class:bookmark-form-aside')
  };

  this.selectOption = {};

  this.selectOption.group = () => {

    const option = [];

    if (bookmark.all.length > 0) {

      bookmark.all.forEach((item, i) => {

        option.push(isValidString(item.name.text) ? item.name.text : ordinalNumber(i + 1) + ' unnamed group');

      });

    }

    return option;

  };

  this.selectOption.item = () => {

    const option = [];

    if (bookmark.all[bookmarkData.position.destination.group].items.length > 0) {

      let count = bookmark.all[bookmarkData.position.destination.group].items.length;

      if (bookmarkData.type.new || !(bookmarkData.position.origin.group === bookmarkData.position.destination.group)) {
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

  this.control.bookmark = {
    url: new Control_text({
      object: bookmarkData.link,
      path: 'url',
      id: 'url',
      value: bookmarkData.link.url,
      placeholder: message('bookmarkFormUrlPlaceholder'),
      labelText: message('bookmarkFormUrlLabel'),
      action: () => {
        this.preview.update.assemble(bookmarkData);
      }
    }),
    display: {
      alignment: new Control_radioGrid({
        object: bookmarkData.link,
        radioGroup: [
          { id: 'toolbar-position-top-left', labelText: message('bookmarkFormDisplayAlignmentTopLeft'), value: 'top-left', position: 1 },
          { id: 'toolbar-position-top-center', labelText: message('bookmarkFormDisplayAlignmentTopCenter'), value: 'top-center', position: 2 },
          { id: 'toolbar-position-top-right', labelText: message('bookmarkFormDisplayAlignmentTopRight'), value: 'top-right', position: 3 },
          { id: 'toolbar-position-center-left', labelText: message('bookmarkFormDisplayAlignmentCenterLeft'), value: 'center-left', position: 4 },
          { id: 'toolbar-position-center-center', labelText: message('bookmarkFormDisplayAlignmentCenterCenter'), value: 'center-center', position: 5 },
          { id: 'toolbar-position-center-right', labelText: message('bookmarkFormDisplayAlignmentCenterRight'), value: 'center-right', position: 6 },
          { id: 'toolbar-position-bottom-left', labelText: message('bookmarkFormDisplayAlignmentBottomLeft'), value: 'bottom-left', position: 7 },
          { id: 'toolbar-position-bottom-center', labelText: message('bookmarkFormDisplayAlignmentBottomCenter'), value: 'bottom-center', position: 8 },
          { id: 'toolbar-position-bottom-right', labelText: message('bookmarkFormDisplayAlignmentBottomRight'), value: 'bottom-right', position: 9 }
        ],
        label: message('bookmarkFormDisplayAlignmentLabel'),
        groupName: 'display-alignment',
        path: 'display.alignment',
        gridSize: '3x3',
        action: () => {
          this.preview.update.assemble(bookmarkData);
        }
      }),
      direction: new Control_radio({
        object: bookmarkData.link,
        radioGroup: [
          { id: 'display-direction-vertical', labelText: message('bookmarkFormDisplayDirectionVerticalLabel'), description: message('bookmarkFormDisplayDirectionVerticalDescription'), value: 'vertical' },
          { id: 'display-direction-horizontal', labelText: message('bookmarkFormDisplayDirectionHorizontalLabel'), description: message('bookmarkFormDisplayDirectionHorizontalDescription'), value: 'horizontal' }
        ],
        groupName: 'display-direction',
        path: 'display.direction',
        action: () => {
          this.disable();
          this.preview.update.style(bookmarkData);
        }
      }),
      order: new Control_radio({
        object: bookmarkData.link,
        radioGroup: [
          { id: 'display-order-visual-name', labelText: message('bookmarkFormDisplayOrderVisualNameLabel'), description: message('bookmarkFormDisplayOrderVisualNameDescription'), value: 'visual-name' },
          { id: 'display-order-name-visual', labelText: message('bookmarkFormDisplayOrderNameVisualLabel'), description: message('bookmarkFormDisplayOrderNameVisualDescription'), value: 'name-visual' }
        ],
        groupName: 'display-order',
        path: 'display.order',
        action: () => {
          this.disable();
          this.preview.update.style(bookmarkData);
        }
      }),
      rotate: new Control_sliderSlim({
        object: bookmarkData.link,
        path: 'display.rotate',
        id: 'display-rotate',
        labelText: message('bookmarkFormDisplayRotate'),
        value: bookmarkData.link.display.rotate,
        defaultValue: bookmarkDefault.display.rotate,
        min: bookmarkMinMax.display.rotate.min,
        max: bookmarkMinMax.display.rotate.max,
        action: () => {
          this.preview.update.style(bookmarkData);
        }
      }),
      translate: {
        label: form.label({
          text: message('bookmarkFormDisplayTranslateLabel'),
          noPadding: true
        }),
        x: new Control_sliderSlim({
          object: bookmarkData.link,
          path: 'display.translate.x',
          id: 'display-translate-x',
          labelText: message('bookmarkFormDisplayTranslateX'),
          value: bookmarkData.link.display.translate.x,
          defaultValue: bookmarkDefault.display.translate.x,
          min: bookmarkMinMax.display.translate.x.min,
          max: bookmarkMinMax.display.translate.x.max,
          action: () => {
            this.preview.update.style(bookmarkData);
          }
        }),
        y: new Control_sliderSlim({
          object: bookmarkData.link,
          path: 'display.translate.y',
          id: 'display-translate-y',
          labelText: message('bookmarkFormDisplayTranslateY'),
          value: bookmarkData.link.display.translate.y,
          defaultValue: bookmarkDefault.display.translate.y,
          min: bookmarkMinMax.display.translate.y.min,
          max: bookmarkMinMax.display.translate.y.max,
          action: () => {
            this.preview.update.style(bookmarkData);
          }
        })
      },
      gutter: new Control_sliderSlim({
        object: bookmarkData.link,
        path: 'display.gutter',
        id: 'display-gutter',
        labelText: message('bookmarkFormDisplayGutter'),
        value: bookmarkData.link.display.gutter,
        defaultValue: bookmarkDefault.display.gutter,
        min: bookmarkMinMax.display.gutter.min,
        max: bookmarkMinMax.display.gutter.max,
        action: () => {
          this.preview.update.style(bookmarkData);
        }
      }),
      visual: {
        show: new Control_checkbox({
          object: bookmarkData.link,
          path: 'display.visual.show',
          id: 'display-visual-show',
          labelText: message('bookmarkFormDisplayVisualShowLabel'),
          description: message('bookmarkFormDisplayVisualShowDescription'),
          action: () => {
            this.disable();
            this.collapse.display.visual.update();
            this.preview.update.assemble(bookmarkData);
          }
        }),
        type: new Control_radio({
          object: bookmarkData.link,
          radioGroup: [
            { id: 'display-visual-type-letter', labelText: message('bookmarkFormDisplayVisualTypeLetter'), value: 'letter' },
            { id: 'display-visual-type-icon', labelText: message('bookmarkFormDisplayVisualTypeIcon'), value: 'icon' },
            { id: 'display-visual-type-image', labelText: message('bookmarkFormDisplayVisualTypeImage'), value: 'image' }
          ],
          groupName: 'display-visual-type',
          path: 'display.visual.type',
          action: () => {
            this.disable();
            this.preview.update.assemble(bookmarkData);
          }
        }),
        size: new Control_sliderSlim({
          object: bookmarkData.link,
          path: 'display.visual.size',
          id: 'display-visual-size',
          labelText: message('bookmarkFormDisplayVisualSize'),
          value: bookmarkData.link.display.visual.size,
          defaultValue: bookmarkDefault.display.visual.size,
          min: bookmarkMinMax.display.visual.size.min,
          max: bookmarkMinMax.display.visual.size.max,
          action: () => {
            this.preview.update.style(bookmarkData);
          }
        }),
        letter: {
          text: new Control_text({
            object: bookmarkData.link,
            path: 'display.visual.letter.text',
            id: 'display-visual-letter-text',
            value: bookmarkData.link.display.visual.letter.text,
            placeholder: message('bookmarkFormDisplayVisualLetterTextPlaceholder'),
            labelText: message('bookmarkFormDisplayVisualLetterTextLabel'),
            srOnly: true,
            action: () => {
              this.preview.update.assemble(bookmarkData);
            }
          })
        },
        icon: {
          text: new Control_text({
            object: bookmarkData.link,
            path: 'display.visual.icon.label',
            id: 'display-visual-icon-label',
            value: bookmarkData.link.display.visual.icon.label,
            placeholder: message('bookmarkFormDisplayVisualIconTextPlaceholder'),
            labelText: message('bookmarkFormDisplayVisualIconTextLabel'),
            srOnly: true,
            action: () => {
              this.preview.update.assemble(bookmarkData);
            }
          }),
          preview: new Control_groupText({
            classList: ['bookmark-form-text-icon', 'form-group-item-small']
          }),
          remove: new Button({
            text: message('bookmarkFormDisplayVisualIconRemove'),
            srOnly: true,
            style: ['line'],
            iconName: 'cross',
            classList: ['form-group-item-small'],
            func: () => {
              bookmarkData.link.display.visual.icon.label = '';
              bookmarkData.link.display.visual.icon.prefix = '';
              bookmarkData.link.display.visual.icon.name = '';
              this.update();
              this.preview.update.assemble(bookmarkData);
            }
          })
        },
        image: {
          url: new Control_text({
            object: bookmarkData.link,
            path: 'display.visual.image.url',
            id: 'display-visual-image-url',
            value: bookmarkData.link.display.visual.image.url,
            placeholder: message('bookmarkFormDisplayVisualImageUrlPlaceholder'),
            labelText: message('bookmarkFormDisplayVisualImageUrlLabel'),
            srOnly: true,
            action: () => {
              this.preview.update.assemble(bookmarkData);
            }
          })
        },
        shadow: {
          size: new Control_sliderSlim({
            object: bookmarkData.link,
            path: 'display.visual.shadow.size',
            id: 'display-visual-shadow-size',
            labelText: message('bookmarkFormDisplayVisualShadowSize'),
            value: bookmarkData.link.display.visual.shadow.size,
            defaultValue: bookmarkDefault.display.visual.shadow.size,
            min: bookmarkMinMax.display.visual.shadow.size.min,
            max: bookmarkMinMax.display.visual.shadow.size.max,
            action: () => {
              this.preview.update.style(bookmarkData);
            }
          })
        }
      },
      name: {
        show: new Control_checkbox({
          object: bookmarkData.link,
          path: 'display.name.show',
          id: 'display-name-show',
          labelText: message('bookmarkFormDisplayNameShow'),
          action: () => {
            this.disable();
            this.collapse.display.name.update();
            this.preview.update.assemble(bookmarkData);
          }
        }),
        text: new Control_text({
          object: bookmarkData.link,
          path: 'display.name.text',
          id: 'display-name-text',
          value: bookmarkData.link.display.name.text,
          placeholder: message('bookmarkFormDisplayNameTextPlaceholder'),
          labelText: message('bookmarkFormDisplayNameTextLabel'),
          srOnly: true,
          action: () => {
            this.preview.update.assemble(bookmarkData);
          }
        }),
        size: new Control_sliderSlim({
          object: bookmarkData.link,
          path: 'display.name.size',
          id: 'display-name-size',
          labelText: message('bookmarkFormDisplayNameSize'),
          value: bookmarkData.link.display.name.size,
          defaultValue: bookmarkDefault.display.name.size,
          min: bookmarkMinMax.display.name.size.min,
          max: bookmarkMinMax.display.name.size.max,
          action: () => {
            this.preview.update.style(bookmarkData);
          }
        })
      }
    },
    accent: {
      by: new Control_radio({
        object: bookmarkData.link,
        radioGroup: [
          { id: 'accent-by-theme', labelText: message('bookmarkFormAccentByThemeLabel'), description: message('bookmarkFormAccentByThemeDescription'), value: 'theme' },
          { id: 'accent-by-custom', labelText: message('bookmarkFormAccentByCustomLabel'), description: message('bookmarkFormAccentByCustomDescription'), value: 'custom' }
        ],
        groupName: 'accent-by',
        path: 'accent.by',
        action: () => {
          this.collapse.accent.update();
          this.disable();
          this.preview.update.assemble(bookmarkData);
        }
      }),
      color: new Control_colorMixer({
        object: bookmarkData.link,
        path: 'accent',
        id: 'accent',
        labelText: message('bookmarkFormAccentColor'),
        srOnly: true,
        defaultValue: bookmarkDefault.accent.rgb,
        minMaxObject: bookmarkMinMax,
        randomColor: true,
        action: () => {
          this.preview.update.style(bookmarkData);
        }
      })
    },
    color: {
      by: new Control_radio({
        object: bookmarkData.link,
        radioGroup: [
          { id: 'color-by-theme', labelText: message('bookmarkFormColorByThemeLabel'), description: message('bookmarkFormColorByThemeDescription'), value: 'theme' },
          { id: 'color-by-custom', labelText: message('bookmarkFormColorByCustomLabel'), description: message('bookmarkFormColorByCustomDescription'), value: 'custom' }
        ],
        groupName: 'color-by',
        path: 'color.by',
        action: () => {
          this.collapse.color.update();
          this.disable();
          this.preview.update.assemble(bookmarkData);
        }
      }),
      color: new Control_colorMixer({
        object: bookmarkData.link,
        path: 'color',
        id: 'color',
        labelText: message('bookmarkFormColorColor'),
        srOnly: true,
        defaultValue: bookmarkDefault.color.rgb,
        minMaxObject: bookmarkMinMax,
        randomColor: true,
        action: () => {
          this.preview.update.style(bookmarkData);
        }
      }),
      opacity: new Control_sliderSlim({
        object: bookmarkData.link,
        path: 'color.opacity',
        id: 'color-opacity',
        labelText: message('bookmarkFormColorOpacity'),
        value: bookmarkData.link.color.opacity,
        defaultValue: bookmarkDefault.color.opacity,
        min: bookmarkMinMax.color.opacity.min,
        max: bookmarkMinMax.color.opacity.max,
        action: () => {
          this.preview.update.style(bookmarkData);
        }
      })
    },
    background: {
      show: new Control_checkbox({
        object: bookmarkData.link,
        path: 'background.show',
        id: 'background-show',
        labelText: message('bookmarkFormBackgroundShowLabel'),
        description: message('bookmarkFormBackgroundShowDescription'),
        action: () => {
          this.collapse.background.update();
          this.disable();
          this.preview.update.assemble(bookmarkData);
        }
      }),
      type: new Control_radio({
        object: bookmarkData.link,
        radioGroup: [
          { id: 'background-type-image', labelText: message('bookmarkFormBackgroundTypeImage'), value: 'image' },
          { id: 'background-type-video', labelText: message('bookmarkFormBackgroundTypeVideo'), value: 'video' }
        ],
        groupName: 'background-type',
        path: 'background.type',
        action: () => {
          this.disable();
          this.preview.update.assemble(bookmarkData);
        }
      }),
      opacity: new Control_sliderSlim({
        object: bookmarkData.link,
        path: 'background.opacity',
        id: 'background-opacity',
        labelText: message('bookmarkFormBackgroundOpacity'),
        value: bookmarkData.link.background.opacity,
        defaultValue: bookmarkDefault.background.opacity,
        min: bookmarkMinMax.background.opacity.min,
        max: bookmarkMinMax.background.opacity.max,
        action: () => {
          this.preview.update.style(bookmarkData);
        }
      }),
      image: {
        url: new Control_text({
          object: bookmarkData.link,
          path: 'background.image.url',
          id: 'background-image-url',
          value: bookmarkData.link.background.image.url,
          placeholder: message('bookmarkFormBackgroundImagePlaceholder'),
          labelText: message('bookmarkFormBackgroundImageLabel'),
          srOnly: true,
          action: () => {
            this.preview.update.assemble(bookmarkData);
          }
        })
      },
      video: {
        url: new Control_text({
          object: bookmarkData.link,
          path: 'background.video.url',
          id: 'background-video-url',
          value: bookmarkData.link.background.video.url,
          placeholder: message('bookmarkFormBackgroundVideoPlaceholder'),
          labelText: message('bookmarkFormBackgroundVideoLabel'),
          srOnly: true,
          action: () => {
            this.preview.update.assemble(bookmarkData);
          }
        })
      }
    },
    border: new Control_sliderSlim({
      object: bookmarkData.link,
      path: 'border',
      id: 'border',
      labelText: message('bookmarkFormBorder'),
      value: bookmarkData.link.border,
      defaultValue: bookmarkDefault.border,
      min: bookmarkMinMax.border.min,
      max: bookmarkMinMax.border.max,
      action: () => {
        this.preview.update.style(bookmarkData);
      }
    }),
    shape: {
      wide: new Control_checkbox({
        object: bookmarkData.link,
        path: 'shape.wide',
        id: 'shape-wide',
        labelText: message('bookmarkFormShapeWideLabel'),
        description: message('bookmarkFormShapeWideDescription'),
        action: () => {
          this.preview.update.assemble(bookmarkData);
        }
      }),
      tall: new Control_checkbox({
        object: bookmarkData.link,
        path: 'shape.tall',
        id: 'shape-tall',
        labelText: message('bookmarkFormShapeTallLabel'),
        description: message('bookmarkFormShapeTallDescription'),
        action: () => {
          this.preview.update.assemble(bookmarkData);
        }
      })
    }
  };

  this.control.group = {
    destination: new Control_radio({
      object: bookmarkData,
      radioGroup: [
        { id: 'group-destination-existing', labelText: message('bookmarkFormGroupDestinationExisting'), value: 'existing' },
        { id: 'group-destination-new', labelText: message('bookmarkFormGroupDestinationNew'), value: 'new' }
      ],
      groupName: 'group.destination',
      path: 'group.destination',
      action: () => {
        this.disable();
      }
    }),
    name: new Control_text({
      object: bookmarkData,
      path: 'group.name',
      id: 'group-name',
      value: bookmarkData.group.name,
      placeholder: message('bookmarkFormGroupNamePlaceholder'),
      labelText: message('bookmarkFormGroupNameLabel'),
      srOnly: true
    }),
    random: new Button({
      text: message('bookmarkFormGroupRandom'),
      style: ['line'],
      func: () => {
        bookmarkData.group.name = randomString({ adjectivesCount: randomNumber(1, 3) });
        this.control.group.name.update();
      }
    }),
    position: {
      group: new Control_select({
        object: bookmarkData,
        path: 'position.destination.group',
        id: 'position-destination-group',
        labelText: message('bookmarkFormGroupPositionGroup'),
        srOnly: true,
        option: (bookmark.all.length > 0) ? this.selectOption.group() : [],
        selected: bookmarkData.position.destination.group,
        action: () => {

          if (bookmarkData.type.new) {
            bookmarkData.position.destination.item = bookmark.all[bookmarkData.position.destination.group].items.length;
          } else {

            if (bookmarkData.position.origin.group === bookmarkData.position.destination.group) {
              bookmarkData.position.destination.item = bookmark.all[bookmarkData.position.destination.group].items.length - 1;
            } else {
              bookmarkData.position.destination.item = bookmark.all[bookmarkData.position.destination.group].items.length;
            }

          }

          this.control.group.position.item.updateOption(this.selectOption.item(), bookmarkData.position.destination.item);

        }
      }),
      item: new Control_select({
        object: bookmarkData,
        path: 'position.destination.item',
        id: 'position-destination-item',
        labelText: message('bookmarkFormGroupPositionItem'),
        option: (bookmark.all.length > 0) ? this.selectOption.item() : [],
        selected: bookmarkData.position.destination.item
      })
    }
  };

  this.control.propagate = {};

  this.control.propagate.visual = new Control_checkbox({
    object: bookmarkData.propagate,
    path: 'display',
    id: 'apply-to-all-display',
    labelText: message('bookmarkFormPropagateVisualLabel'),
    description: [
      message('bookmarkFormPropagateVisualDescriptionPara1'),
      message('bookmarkFormPropagateVisualDescriptionPara2')
    ]
  });

  this.control.propagate.visualAlert = new Alert({
    iconName: 'propagate',
    children: [this.control.propagate.visual.wrap()]
  });

  this.control.propagate.layout = new Control_checkbox({
    object: bookmarkData.propagate,
    path: 'layout',
    id: 'apply-to-all-layout',
    labelText: message('bookmarkFormPropagateLayoutLabel'),
    description: [
      message('bookmarkFormPropagateLayoutDescriptionPara1'),
      message('bookmarkFormPropagateLayoutDescriptionPara2')
    ]
  });

  this.control.propagate.layoutAlert = new Alert({
    iconName: 'propagate',
    children: [this.control.propagate.layout.wrap()]
  });

  this.control.propagate.theme = new Control_checkbox({
    object: bookmarkData.propagate,
    path: 'theme',
    id: 'apply-to-all-theme',
    labelText: message('bookmarkFormPropagateThemeLabel'),
    description: [
      message('bookmarkFormPropagateThemeDescriptionPara1'),
      message('bookmarkFormPropagateThemeDescriptionPara2')
    ]
  });

  this.control.propagate.themeAlert = new Alert({
    iconName: 'propagate',
    children: [this.control.propagate.theme.wrap()]
  });

  this.helper = {
    bookmark: {
      display: {
        visual: {
          shadow: {
            size: new Control_helperText({
              text: [message('bookmarkFormDisplayVisualShadowHelperPara1')]
            })
          }
        }
      },
      background: {
        image: new Control_helperText({
          text: [message('bookmarkFormBackgroundImageHelperPara1')]
        }),
        video: new Control_helperText({
          text: [message('bookmarkFormBackgroundVideoHelperPara1')]
        })
      }
    }
  };

  this.area = {};

  this.area.display = {};

  this.area.display.visual = () => {
    return node('div', [
      form.wrap({
        children: [
          form.indent({
            children: [
              this.control.bookmark.display.visual.type.radioSet[0].wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      this.control.bookmark.display.visual.letter.text.wrap()
                    ]
                  })
                ]
              }),
              this.control.bookmark.display.visual.type.radioSet[1].wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      form.wrap({
                        children: [
                          this.control.bookmark.display.visual.icon.text.label,
                          form.group({
                            block: true,
                            children: [
                              this.control.bookmark.display.visual.icon.text.text,
                              this.control.bookmark.display.visual.icon.preview.groupText,
                              this.control.bookmark.display.visual.icon.remove.button
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              this.control.bookmark.display.visual.type.radioSet[2].wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      this.control.bookmark.display.visual.image.url.wrap()
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]);
  };

  this.area.display.name = () => {
    return node('div', [
      form.wrap({
        children: [
          form.indent({
            children: [
              this.control.bookmark.display.name.text.wrap()
            ]
          })
        ]
      })
    ]);
  };

  this.area.accent = () => {
    return node('div', [
      this.control.bookmark.accent.color.wrap()
    ]);
  };

  this.area.color = () => {
    return node('div', [
      this.control.bookmark.color.color.wrap()
    ]);
  };

  this.area.visual = () => {
    return form.fieldset({
      children: [
        form.wrap({
          children: [
            node('div|class:bookmark-form-description', [
              node(`h2:${message('bookmarkFormSectionVisualHeading')}`),
              node(`p:${message('bookmarkFormSectionVisualDescription')}`)
            ])
          ]
        }),
        form.wrap({
          children: [
            form.indent({
              children: [
                this.control.bookmark.display.visual.show.wrap(),
                this.collapse.display.visual.collapse(),
                node('hr'),
                this.control.bookmark.display.name.show.wrap(),
                this.collapse.display.name.collapse(),
                node('hr'),
                this.control.propagate.visualAlert.wrap()
              ]
            })
          ]
        })
      ]
    });
  };

  this.area.address = () => {
    return form.fieldset({
      children: [
        form.wrap({
          children: [
            node('div|class:bookmark-form-description', [
              node(`h2:${message('bookmarkFormSectionAddressHeading')}`),
              complexNode({ tag: 'p', text: message('bookmarkFormSectionAddressDescription'), complexText: true })
            ])
          ]
        }),
        form.wrap({
          children: [
            form.indent({
              children: [
                this.control.bookmark.url.wrap()
              ]
            })
          ]
        })
      ]
    });
  };

  this.area.position = () => {
    return form.fieldset({
      children: [
        form.wrap({
          children: [
            node('div|class:bookmark-form-description', [
              node(`h2:${message('bookmarkFormSectionPositionHeading')}`),
              node(`p:${message('bookmarkFormSectionPositionDescription')}`)
            ])
          ]
        }),
        form.wrap({
          children: [
            form.indent({
              children: [
                this.control.group.destination.radioSet[0].wrap(),
                form.wrap({
                  children: [
                    form.indent({
                      children: [
                        this.control.group.position.group.wrap(),
                        this.control.group.position.item.wrap()
                      ]
                    })
                  ]
                }),
                this.control.group.destination.radioSet[1].wrap(),
                form.wrap({
                  children: [
                    form.indent({
                      children: [
                        this.control.group.name.wrap(),
                        this.control.group.random.wrap()
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  };

  this.area.layout = () => {
    return form.fieldset({
      children: [
        form.wrap({
          children: [
            node('div|class:bookmark-form-description', [
              node(`h2:${message('bookmarkFormSectionLayoutHeading')}`),
              node(`p:${message('bookmarkFormSectionLayoutDescription')}`)
            ])
          ]
        }),
        form.wrap({
          children: [
            form.indent({
              children: [
                this.control.bookmark.display.visual.size.wrap(),
                this.control.bookmark.display.name.size.wrap(),
                node('hr'),
                this.control.bookmark.display.alignment.wrap(),
                node('hr'),
                form.wrap({
                  children: [
                    this.control.bookmark.display.translate.label
                  ]
                }),
                this.control.bookmark.display.translate.x.wrap(),
                this.control.bookmark.display.translate.y.wrap(),
                this.control.bookmark.display.rotate.wrap(),
                node('hr'),
                this.control.bookmark.display.direction.wrap(),
                node('hr'),
                this.control.bookmark.display.order.wrap(),
                node('hr'),
                this.control.bookmark.display.gutter.wrap(),
                node('hr'),
                this.control.bookmark.shape.wide.wrap(),
                this.control.bookmark.shape.tall.wrap(),
                node('hr'),
                this.control.propagate.layoutAlert.wrap()
              ]
            })
          ]
        })
      ]
    });
  };

  this.area.theme = () => {
    return form.fieldset({
      children: [
        form.wrap({
          children: [
            node('div|class:bookmark-form-description', [
              node(`h2:${message('bookmarkFormSectionThemeHeading')}`),
              node(`p:${message('bookmarkFormSectionThemeDescription')}`)
            ])
          ]
        }),
        form.wrap({
          children: [
            form.indent({
              children: [
                this.control.bookmark.color.by.wrap(),
                form.wrap({
                  children: [
                    form.indent({
                      children: [
                        this.collapse.color.collapse(),
                        node('hr'),
                        this.control.bookmark.color.opacity.wrap()
                      ]
                    })
                  ]
                }),
                node('hr'),
                this.control.bookmark.accent.by.wrap(),
                form.wrap({
                  children: [
                    form.indent({
                      children: [
                        this.collapse.accent.collapse()
                      ]
                    })
                  ]
                }),
                node('hr'),
                this.control.bookmark.background.show.wrap(),
                form.wrap({
                  children: [
                    form.indent({
                      children: [
                        this.collapse.background.collapse()
                      ]
                    })
                  ]
                }),
                node('hr'),
                this.control.bookmark.border.wrap(),
                node('hr'),
                this.control.bookmark.display.visual.shadow.size.wrap(),
                this.helper.bookmark.display.visual.shadow.size.wrap(),
                node('hr'),
                this.control.propagate.themeAlert.wrap()
              ]
            })
          ]
        })
      ]
    });
  };

  this.area.background = () => {
    return node('div', [
      this.control.bookmark.background.type.radioSet[0].wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              this.control.bookmark.background.image.url.wrap(),
              this.helper.bookmark.background.image.wrap()
            ]
          })
        ]
      }),
      this.control.bookmark.background.type.radioSet[1].wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              this.control.bookmark.background.video.url.wrap(),
              this.helper.bookmark.background.video.wrap()
            ]
          })
        ]
      }),
      form.wrap({
        children: [
          form.indent({
            children: [
              this.control.bookmark.background.opacity.wrap()
            ]
          })
        ]
      })
    ]);
  };

  this.collapse = {
    display: {
      visual: new Collapse({
        type: 'checkbox',
        checkbox: this.control.bookmark.display.visual.show,
        target: [{
          content: this.area.display.visual()
        }]
      }),
      name: new Collapse({
        type: 'checkbox',
        checkbox: this.control.bookmark.display.name.show,
        target: [{
          content: this.area.display.name()
        }]
      })
    },
    color: new Collapse({
      type: 'radio',
      radioGroup: this.control.bookmark.color.by,
      target: [{
        id: this.control.bookmark.color.by.radioSet[1].radio.value,
        content: this.area.color()
      }]
    }),
    accent: new Collapse({
      type: 'radio',
      radioGroup: this.control.bookmark.accent.by,
      target: [{
        id: this.control.bookmark.accent.by.radioSet[1].radio.value,
        content: this.area.accent()
      }]
    }),
    background: new Collapse({
      type: 'checkbox',
      checkbox: this.control.bookmark.background.show,
      target: [{
        content: this.area.background()
      }]
    })
  };

  this.tab = new Tab({
    group: [{
      tabText: message('bookmarkFormTabVisual'),
      area: this.area.visual(),
      active: true
    }, {
      tabText: message('bookmarkFormTabAddress'),
      area: this.area.address(),
      active: false
    }, {
      tabText: message('bookmarkFormTabPosition'),
      area: this.area.position(),
      active: false
    }, {
      tabText: message('bookmarkFormTabLayout'),
      area: this.area.layout(),
      active: false
    }, {
      tabText: message('bookmarkFormTabTheme'),
      area: this.area.theme(),
      active: false
    }]
  });

  this.preview = new BookmarkPreview({ bookmarkData: bookmarkData });

  this.disable = () => {

    if (bookmarkData.link.display.visual.show) {
      this.control.bookmark.display.visual.type.enable();
      this.control.bookmark.display.visual.letter.text.enable();
      this.control.bookmark.display.visual.icon.text.enable();
      this.control.bookmark.display.visual.icon.preview.enable();
      this.control.bookmark.display.visual.icon.remove.enable();
      this.control.bookmark.display.visual.image.url.enable();
      this.control.bookmark.display.visual.size.enable();

      switch (bookmarkData.link.display.visual.type) {
        case 'letter':
          this.control.bookmark.display.visual.letter.text.enable();
          this.control.bookmark.display.visual.icon.text.disable();
          this.control.bookmark.display.visual.icon.preview.disable();
          this.control.bookmark.display.visual.icon.remove.disable();
          this.control.bookmark.display.visual.image.url.disable();
          break;

        case 'icon':
          this.control.bookmark.display.visual.letter.text.disable();
          this.control.bookmark.display.visual.icon.text.enable();
          this.control.bookmark.display.visual.icon.preview.enable();
          this.control.bookmark.display.visual.icon.remove.enable();
          this.control.bookmark.display.visual.image.url.disable();
          break;

        case 'image':
          this.control.bookmark.display.visual.letter.text.disable();
          this.control.bookmark.display.visual.icon.text.disable();
          this.control.bookmark.display.visual.icon.preview.disable();
          this.control.bookmark.display.visual.icon.remove.disable();
          this.control.bookmark.display.visual.image.url.enable();
          break;
      }
    } else {
      this.control.bookmark.display.visual.type.disable();
      this.control.bookmark.display.visual.letter.text.disable();
      this.control.bookmark.display.visual.icon.text.disable();
      this.control.bookmark.display.visual.icon.preview.disable();
      this.control.bookmark.display.visual.icon.remove.disable();
      this.control.bookmark.display.visual.image.url.disable();
      this.control.bookmark.display.visual.size.disable();
    }

    if (bookmarkData.link.display.name.show) {
      this.control.bookmark.display.name.text.enable();
      this.control.bookmark.display.name.size.enable();
    } else {
      this.control.bookmark.display.name.text.disable();
      this.control.bookmark.display.name.size.disable();
    }

    if (bookmarkData.link.display.visual.show || bookmarkData.link.display.name.show) {
      this.control.bookmark.display.translate.label.classList.remove('disabled');
      this.control.bookmark.display.translate.x.enable();
      this.control.bookmark.display.translate.y.enable();
      this.control.bookmark.display.rotate.enable();
      this.control.bookmark.display.alignment.enable();
    } else {
      this.control.bookmark.display.translate.label.classList.add('disabled');
      this.control.bookmark.display.translate.x.disable();
      this.control.bookmark.display.translate.y.disable();
      this.control.bookmark.display.rotate.disable();
      this.control.bookmark.display.alignment.disable();
    }

    if (bookmarkData.link.display.visual.show && bookmarkData.link.display.name.show) {
      this.control.bookmark.display.direction.enable();
      this.control.bookmark.display.order.enable();
      this.control.bookmark.display.gutter.enable();
    } else {
      this.control.bookmark.display.direction.disable();
      this.control.bookmark.display.order.disable();
      this.control.bookmark.display.gutter.disable();
    }

    switch (bookmarkData.link.display.visual.type) {
      case 'letter':
      case 'icon':
        this.control.bookmark.display.visual.shadow.size.enable();
        this.helper.bookmark.display.visual.shadow.size.enable();
        break;

      case 'image':
        this.control.bookmark.display.visual.shadow.size.disable();
        this.helper.bookmark.display.visual.shadow.size.disable();
        break;
    }

    switch (bookmarkData.link.color.by) {
      case 'theme':
        this.control.bookmark.color.color.disable();
        break;

      case 'custom':
        this.control.bookmark.color.color.enable();
        break;
    }

    switch (bookmarkData.link.accent.by) {
      case 'theme':
        this.control.bookmark.accent.color.disable();
        break;

      case 'custom':
        this.control.bookmark.accent.color.enable();
        break;
    }

    if (bookmarkData.link.background.show) {
      this.control.bookmark.background.type.enable();
      this.control.bookmark.background.opacity.enable();

      switch (bookmarkData.link.background.type) {
        case 'image':
          this.control.bookmark.background.image.url.enable();
          this.helper.bookmark.background.image.enable();
          this.control.bookmark.background.video.url.disable();
          this.helper.bookmark.background.video.disable();
          break;

        case 'video':
          this.control.bookmark.background.image.url.disable();
          this.helper.bookmark.background.image.disable();
          this.control.bookmark.background.video.url.enable();
          this.helper.bookmark.background.video.enable();
          break;
      }
    } else {
      this.control.bookmark.background.type.disable();
      this.control.bookmark.background.image.url.disable();
      this.helper.bookmark.background.image.disable();
      this.control.bookmark.background.video.url.disable();
      this.helper.bookmark.background.video.disable();
      this.control.bookmark.background.opacity.disable();
    }

    switch (bookmarkData.group.destination) {
      case 'existing':
        this.control.group.position.group.enable();
        this.control.group.position.item.enable();
        this.control.group.name.disable();
        this.control.group.random.disable();
        break;

      case 'new':
        this.control.group.position.group.disable();
        this.control.group.position.item.disable();
        this.control.group.name.enable();
        this.control.group.random.enable();
        break;
    }

    if (!bookmark.all.length > 0) {
      this.control.group.destination.radioSet[0].radio.disable();
    } else {
      this.control.group.destination.radioSet[0].radio.enable();
    }

  };

  this.update = () => {

    this.control.bookmark.display.visual.show.update();

    this.control.bookmark.display.visual.type.update();

    this.control.bookmark.display.visual.letter.text.update();

    this.control.bookmark.display.visual.icon.text.update();

    if (isValidString(bookmarkData.link.display.visual.icon.prefix) && isValidString(bookmarkData.link.display.visual.icon.name)) {
      this.control.bookmark.display.visual.icon.preview.update(node('span|class:bookmark-form-icon ' + bookmarkData.link.display.visual.icon.prefix + ' fa-' + bookmarkData.link.display.visual.icon.name));
    } else {
      this.control.bookmark.display.visual.icon.preview.update();
    }

    this.control.bookmark.display.visual.image.url.update();

    this.control.bookmark.display.name.show.update();

    this.control.bookmark.display.name.text.update();

    this.control.bookmark.url.update();

  };

  this.assemble = () => {

    this.element.main.appendChild(this.tab.tab());

    this.element.aside.appendChild(this.preview.preview());

    this.element.form.appendChild(this.element.main);

    this.element.form.appendChild(this.element.aside);

    this.bind();

  };

  this.bind = () => {

    this.element.form.addEventListener('keydown', (event) => {

      if (event.keyCode == 13) { event.preventDefault(); return false; }

    });

  };

  this.suggest = new Suggest({
    input: this.control.bookmark.display.visual.icon.text.text,
    widthElement: this.element.main,
    type: 'fontawesomeIcon',

    postFocus: this.control.bookmark.display.visual.icon.preview.groupText,
    action: (suggestData) => {

      bookmarkData.link.display.visual.icon.label = suggestData.label;
      bookmarkData.link.display.visual.icon.name = suggestData.name;

      if (suggestData.styles.includes('solid')) {
        bookmarkData.link.display.visual.icon.prefix = 'fas';
      } else if (suggestData.styles.includes('brands')) {
        bookmarkData.link.display.visual.icon.prefix = 'fab';
      }

      this.preview.update.assemble(bookmarkData);
      this.update();

    }
  });

  this.form = () => {

    return this.element.form;

  };

  this.assemble();

  this.disable();

  this.update();

};
