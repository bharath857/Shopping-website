import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit  {
 @Output() recipewasselected= new EventEmitter<recipe>();

 recipes: recipe[]=[
   
   new recipe('Test recipe 1','This is simple test 1 description','http://clipart-library.com/images/pi7r5de5T.png'),
   new recipe('Test recipe 2','This is simple test 2 description','http://clipart-library.com/images/pi7r5de5T.png'),
   new recipe('Test recipe 3','This is simple test 3 descriptiont','http://clipart-library.com/images/pi7r5de5T.png')
   
 ];
  constructor() { }

  ngOnInit() {
  }
  onrecipeselected(reciped: recipe){
    this.recipewasselected.emit(reciped)
  }// reciped:recipe -- recpie 
    // reciped is another element storing recipe
    // actually emiting recipe through reciped

}
