import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
  @Output() featureSelected = new EventEmitter<string>();
  onNavigate(navigateTo: string){
    this.featureSelected.emit(navigateTo);
  }
}
