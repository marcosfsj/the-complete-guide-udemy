import { RecipesService } from './recipes.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeToDisplay: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipeToDisplay = recipe;
      }
    );
  }

}
