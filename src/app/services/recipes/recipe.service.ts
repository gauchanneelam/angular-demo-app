import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "../../model/recipe.model";
import { Ingredient } from "../../model/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),

    new Recipe(
      "Burger",
      "This is simply a test",
      "https://cdn.pixabay.com/photo/2018/02/09/08/44/burger-3141127_1280.jpg",
      [
        new Ingredient("Buns", 2),
        new Ingredient("Meat ", 1),
        new Ingredient("Tomatos Slices ", 1)
      ]
    )
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
    console.log(ingredients);
  }
}
