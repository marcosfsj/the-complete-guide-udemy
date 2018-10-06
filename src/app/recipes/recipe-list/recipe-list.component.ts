import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Wild rice salad', 'A salad that is Wild',
        'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_960_720.jpg'),
    new Recipe('One Pot Pasta', 'One Pot Pasta with bell pepper',
        'https://upload.wikimedia.org/wikipedia/commons/2/2f/One_Pot_Pasta_-_Recette_Thai.jpg'),
    new Recipe('Lettuce Salad', 'A healthy salad that is actually good for you.',
        'https://www.maxpixel.net/static/photo/1x/Eating-Healthy-Food-Salad-Lettuce-1866441.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
