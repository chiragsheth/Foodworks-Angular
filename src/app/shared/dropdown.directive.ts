import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event){
    //this.isOpen = !this.isOpen;
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) { }
  // @Input() set appDropdown(openDropdown: boolean){
  //   if(openDropdown){
  //     this.renderer.addClass(this.elRef.nativeElement, 'open');
  //   } else {
  //     this.renderer.removeClass(this.elRef.nativeElement, 'open');
  //   }
  // }//Tried diffrent way of toggling dropdowns

  // constructor(private elRef: ElementRef, private renderer: Renderer2){}
}
