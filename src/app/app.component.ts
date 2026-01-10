import { Component } from '@angular/core';
import { TEXT_CONSTANT } from './text.constant';
import { GRID_ITEMS } from './text.constant';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  TEXT_CONSTANT = TEXT_CONSTANT;
  GRID_ITEMS = GRID_ITEMS;
  title1 = TEXT_CONSTANT.title1;
  title2 = TEXT_CONSTANT.title2;
  subtitle = TEXT_CONSTANT.subtitle;
  calendarText = TEXT_CONSTANT.calendarText;
  searchPlaceholder = TEXT_CONSTANT.searchPlaceholder;
  paragraph = TEXT_CONSTANT.paragraph;
  paragraph2 = TEXT_CONSTANT.paragraph2;
  loremIpsum = TEXT_CONSTANT.loremIpsum;
  loremIpsum2 = TEXT_CONSTANT.loremIpsum2;

}
