/**
 * Basic Tree Setting
 */
import {NodeMenuItemAction} from 'ng2-tree';
export const MyTreeSetting = {
  settings: {
    'rootIsVisible': true,
    'static': true,
    'rightMenu': false,
    'leftMenu': true,
    'cssClasses': {
      'expanded': 'fa fa-minus-square-o fa-lg',
      'collapsed': 'fa fa-plus-square-o fa-lg',
      'leaf': 'fa fa-lg',
      'empty': 'fa fa-caret-right'
    },
    'templates': {
      'node': '<i class="fa fa-building-o fa-lg"></i>',
      'leaf': '<i class="fa fa-angle-right fa-lg"></i>',
      'leftMenu': '<i class="fa fa-navicon fa-lg"></i>'
    },
    'menuItems': [
      {action: NodeMenuItemAction.Custom, name: 'Foo', cssClass: 'fa fa-arrow-right'},
    ]
  }
};
