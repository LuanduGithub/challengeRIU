import { Component } from '@angular/core';
import { TEXT_CONSTANT, GRID_ITEMS } from '../../text.constant';
@Component({
    standalone: true,
    imports: [],
    selector: 'app-primary-grid',
    template: `
    <div class="md:flex-row mx-auto md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
        @for (item of GRID_ITEMS; track item.id) {
        <article class="bg-white overflow-hidden" role="listitem">
          <picture>
            <source media="(max-width: 767px)" srcset="/images/Image-mobile (2)-mobile.png">
            <img src="/images/Image (2).png" alt="Featured event image" class="" width="723" height="406"
              loading="eager" decoding="async" fetchpriority="high">
          </picture>
          <!-- Calendar Icon -->
          <div class="mb-4 flex mt-2">
            <img src="/images/Calendar.png" aria-hidden="true" loading="eager" decoding="async" fetchpriority="high">
            <h3 class="text-gray-600 text-base leading-relaxed font-bold ml-2 ">{{ TEXT_CONSTANT.calendarText }}</h3>
          </div>
          <!-- Title -->
          <h2 class="text-base font-bold text-gray-800 mb-4 mt-2">
            {{ TEXT_CONSTANT.title1 }}
          </h2>
          <!-- Paragraph -->
          <p class="text-gray-600 text-base leading-relaxed">
            {{ TEXT_CONSTANT.paragraph }}
          </p>
        </article>
        }
      </div>
    </div>
    `,
    styles: `
    `
})
export class PrimaryGridComponent {
    TEXT_CONSTANT = TEXT_CONSTANT;
    GRID_ITEMS = GRID_ITEMS;
}