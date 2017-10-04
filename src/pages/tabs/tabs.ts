import { Component } from '@angular/core';

import { CharactersPage } from '../characters/characters';
import { HomePage } from '../home/home';
import { PlanetsPage } from '../planets/planets';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CharactersPage;
  tab3Root = PlanetsPage;

  constructor() {

  }
}
