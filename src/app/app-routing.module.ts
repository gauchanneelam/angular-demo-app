import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "../app/components/recipes/recipes.component";

import { RecipeDetailComponent } from "../app/components/recipes/recipe-detail/recipe-detail.component";
import { ShoppingListComponent } from "../app/components/shopping-list/shopping-list.component";
import { RecipeStartComponent } from "../app/components/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "../app/components/recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipeDetailComponent },
      { path: ":id/edit", component: RecipeEditComponent }
    ]
  },
  { path: "shopping-list", component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
