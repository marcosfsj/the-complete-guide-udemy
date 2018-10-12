import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredients: Ingredient[];

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addNewIngredient() {
    this.shoppingListService.addIngredient(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }

}
