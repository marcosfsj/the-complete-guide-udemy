import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input('recipeToDisplay') recipeToDisplay: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeToDisplay.ingredients);

  }

}
