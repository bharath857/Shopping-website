import { Component, OnInit, Input } from '@angular/core';

import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipedet:recipe

  constructor() { }

  ngOnInit() {
  }

}
