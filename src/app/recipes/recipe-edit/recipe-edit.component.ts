import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipe: Recipe;

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.
      subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          if (this.editMode) {
            this.recipe = this.recipeService.getRecipe(this.id);
          }
        }
      );
  }

}
