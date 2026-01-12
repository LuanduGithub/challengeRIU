import { Component } from '@angular/core';
import { TEXT_CONSTANT} from './text.constant';
import { CommonModule } from '@angular/common';
import { TopCardComponent, PrimaryGridComponent, SecondaryGridComponent, TitleComponent, SubtitleComponent } from './components';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopCardComponent, CommonModule, PrimaryGridComponent, SecondaryGridComponent, TitleComponent, SubtitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  TEXT_CONSTANT = TEXT_CONSTANT;
}
