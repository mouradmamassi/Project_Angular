import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {RecipeModel} from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'this is sipmly description',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_2560,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
    new RecipeModel('Another Test Recipe', 'this is another sipmly description',
    'https://files.meilleurduchef.com/mdc/photo/recette/tajine-agneau/tajine-agneau-640.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

  OnRecipeSelected(recipe: RecipeModel){
     this.recipeWasSelected.emit(recipe);
  }

}
