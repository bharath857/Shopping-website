import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

import { recipe } from '../../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input('rec-ele') recipeEL:recipe; //recipeEL--element in r-i-c html page
                                // recipe-- recipemodel
 @Output('rec-sel') recipeselected = new EventEmitter<void>();                            

  constructor() { }

  ngOnInit() {
  }
onselected(){
  this.recipeselected.emit();
}
  
}
