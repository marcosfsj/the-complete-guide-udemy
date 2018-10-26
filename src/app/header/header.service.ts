import { RecipesService } from './../recipes/recipes.service';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from './../shared/data-storage.service';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

    constructor(private dataStorageService: DataStorageService,
                private recipesService: RecipesService) {}

    saveData() {
        this.dataStorageService.storeRecipes().subscribe(
            (response: Response) => { console.log(response); },
            (error: Response) => { console.log(error); }
        );
    }

    fetchData() {
        this.dataStorageService.fetchRecipes();
    }

}
