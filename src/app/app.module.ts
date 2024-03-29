import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { HeaderComponent } from "./components/header/header.component";

import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./components/shopping-list/shopping-edit/shopping-edit.component";
import { DropdownDirective } from "./shared/dropdown.directive";
import { ShoppingListService } from "./services/shopping-list/shopping-list.service";
import { RecipeService } from "./services/recipes/recipe.service";
import { AppRoutingModule } from "./app-routing.module";
import { RecipeModule } from "../app/components/recipes/recipe.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule, RecipeModule],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
