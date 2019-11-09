import { Component, OnInit } from '@angular/core';
import {IngredientsModule} from '../shared/ingredients.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientsModule[] = [
    new IngredientsModule('Apples', 5),
    new IngredientsModule('Tomatoes', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

}
