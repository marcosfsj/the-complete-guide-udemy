import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  recipeChangedSubscription: Subscription;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipeChangedSubscription = this.recipeService.recipesChanged.subscribe(
      (recipesChanged: Recipe[]) => { this.recipes = recipesChanged; }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.recipeChangedSubscription.unsubscribe();
  }

}
