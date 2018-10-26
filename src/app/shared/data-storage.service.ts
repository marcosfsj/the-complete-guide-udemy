import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: Http, private recipesService: RecipesService) {}

    storeRecipes() {
        return this.http.put('https://the-complete-guide-udemy.firebaseio.com/recipes.json', this.recipesService.getRecipes());
    }

    fetchRecipes() {
        return this.http.get('https://the-complete-guide-udemy.firebaseio.com/recipes.json').subscribe(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                this.recipesService.setRecipes(recipes);
            }
        );
    }

}
