import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInp: ElementRef;
  @ViewChild('amountInput') amountInp: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    var ingredient = new Ingredient(
      this.nameInp.nativeElement.value,
      this.amountInp.nativeElement.value
    )
    this.ingredientAdded.emit(ingredient)
  }
}
