import {OpContextMenuItem} from "core-components/op-context-menu/op-context-menu.component";
import {Directive} from "@angular/core";
import {OpContextMenuTrigger} from "core-components/op-context-menu/trigger/op-context-menu-trigger";

@Directive({
  selector: '[opExampleContextMenu]'
})
export class OpExampleContextMenuDirective extends OpContextMenuTrigger {
  protected items:OpContextMenuItem[] = [
    {
      disabled: false,
      linkText: 'test',
      ariaLabel: 'This is a test item',
      icon: 'icon-hierarchy',
      onClick: () => {
        console.error("CLICKED ON ITEM!");
        return true;
      }
    },
    {
      disabled: true,
      linkText: 'test',
      ariaLabel: 'This is a test item',
      icon: 'icon-no-hierarchy',
      onClick: () => {
        console.error("CLICKED ON 2nd ITEM!");
        return true;
      }
    },
    {divider: true},
    {
      disabled: false,
      linkText: 'test',
      ariaLabel: 'This is a test item',
      icon: 'icon-no-hierarchy',
      onClick: () => {
        console.error("CLICKED ON 3rd ITEM!");
        return true;
      }
    },
  ];
}
