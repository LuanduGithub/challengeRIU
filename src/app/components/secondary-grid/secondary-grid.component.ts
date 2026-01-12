import { Component } from '@angular/core';
import { TEXT_CONSTANT, GRID_ITEMS } from '../../text.constant';
@Component({
    standalone: true,
    imports: [],
    selector: 'app-secondary-grid',
    template: `
        <div class="md:flex-row mx-auto md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
      <div class="overflow-x-auto lg:overflow-x-visible -mx-4 px-4 md:-mx-6 md:px-6 lg:mx-0 lg:px-0" role="region"
        aria-label="Scrollable featured items">
        <div class="flex gap-5 lg:grid lg:grid-cols-4 min-w-max lg:min-w-0" role="list">
          @for (item of [1,2,3,4]; track item) {
          <article class="rounded-lg shadow-lg overflow-hidden flex flex-col min-w-[280px] md:min-w-[300px] lg:min-w-0"
            role="listitem">
            <div class="grid-item-bg rounded-t-lg flex-1 flex flex-col justify-end">
              <div class="p-4 rounded-b-lg bg-gradient-to-t from-gray-900">
                <h3 class="text-3xl font-bold text-white text-gray-800 mb-1">{{ TEXT_CONSTANT.loremIpsum }}</h3>
                <p class="text-base text-white mb-3">{{ TEXT_CONSTANT.loremIpsum2 }}</p>
                <div class="flex items-center justify-between">
                  <span class="text-base font-bold text-white">{{ TEXT_CONSTANT.loremIpsum }}</span>
                  <button type="button" class="flex items-center justify-center w-8 h-8" aria-label="Download">
                    <img src="/images/Download Minimalistic.png" alt="Download icon" class="w-4 h-4" loading="lazy" aria-hidden="true">
                  </button>
                </div>
              </div>
            </div>
          </article>
          }
        </div>
      </div>
    </div>
    `,
    styles: `
    .grid-item-bg {
        background-image: url('/images/Image (2).png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        min-height: 482px;

        @media (max-width: 767px) {
            background-image: url('/images/Image (2)-mobile.png');
        }
    }
    `
})
export class SecondaryGridComponent {
    TEXT_CONSTANT = TEXT_CONSTANT;
    GRID_ITEMS = GRID_ITEMS;
}