import { Component } from '@angular/core';

import { FormsPage } from '../forms/forms';
import { ResultsPage } from '../results/results';
import { ServicesPage } from '../services/services';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ServicesPage;
  tab2Root = FormsPage;
  tab3Root = ResultsPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
