import { Subject } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    recipesChanged = new Subject<Recipe[]>();

    recipes: Recipe[] = [
        new Recipe(
          'Wild rice salad',
          'A salad that is Wild',
          'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_960_720.jpg',
          [
            new Ingredient('ingredient 1', 2),
            new Ingredient('ingredient 2', 3),
            new Ingredient('ingredient 3', 4)
          ]),
        new Recipe(
            'One Pot Pasta',
            'One Pot Pasta with bell pepper',
            'https://upload.wikimedia.org/wikipedia/commons/2/2f/One_Pot_Pasta_-_Recette_Thai.jpg',
            [
              new Ingredient('ingredient 1', 2),
              new Ingredient('ingredient 2', 3),
              new Ingredient('ingredient 3', 4)
            ]
        ),
        new Recipe(
            'Lettuce Salad',
            'A healthy salad that is actually good for you.',
            'https://www.maxpixel.net/static/photo/1x/Eating-Healthy-Food-Salad-Lettuce-1866441.jpg',
            [
              new Ingredient('ingredient 1', 2),
              new Ingredient('ingredient 2', 3),
              new Ingredient('ingredient 3', 4)
            ]
        ),
      ];

      constructor(private shoppingListService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.shoppingListService.addIngredients(ingredients);
      }

      getRecipe(id: number) {
        return this.recipes[id];
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index) {
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
      }

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

}
