import { Component, Input } from '@angular/core';
import { TEXT_CONSTANT } from '../../text.constant';
@Component({
    standalone: true,
    imports: [],
    selector: 'app-top-card',
    template: `
      <article class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto md:px-6 md:py-6 md:max-w-4xl lg:px-8 lg:py-8 lg:max-w-6xl xl:max-w-7xl bg-gray-100">
      <!-- Left side: Image -->
      <div class="w-full md:w-1/2 lg:w-1/2 flex-shrink-0">
        <picture>
          <source media="(max-width: 767px)" srcset="/images/Image-mobile.png">
          <img src="/images/Image.png" alt="Featured event image" class="" width="723" height="406" loading="eager"
            decoding="async" fetchpriority="high">
        </picture>
      </div>

      <!-- Right side: Content -->
      <div class="px-6 md:px-8 flex-1 flex flex-col justify-start py-8 md:py-0">
        <!-- Calendar Icon -->
        <div class=" flex mb-4">
          <img src="/images/Calendar.png" alt="Calendar icon" loading="eager" decoding="async" fetchpriority="high">
          <h3 class="text-gray-600 text-base leading-relaxed font-bold ml-2">{{ TEXT_CONSTANT.calendarText }}</h3>
        </div>

        <!-- Title -->
        <h1 class="text-2xl md:text-2xl lg:text-2xl font-bold text-gray-800 mb-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
        </h1>

        <!-- Paragraph -->
        <p class="text-gray-600 text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div class="flex mt-4 justify-end">
          <button type="button" class="bg-red-500 text-base font-bold text-white px-4 py-2 rounded-md"
            [attr.aria-label]="TEXT_CONSTANT.buttonText || 'Action button'">
            {{ TEXT_CONSTANT.buttonText }}
          </button>
        </div>
      </div>

    </article>
  `,
    styles: `
  `
})
export class TopCardComponent {
    TEXT_CONSTANT = TEXT_CONSTANT;
}