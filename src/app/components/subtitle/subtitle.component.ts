import { Component, Input} from '@angular/core';
import { TEXT_CONSTANT } from '../../text.constant';
import { CommonModule } from '@angular/common';
@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-subtitle',
    template: `
    @if (isSubtitleSearch) {
        <ng-container *ngTemplateOutlet="subtitleSearch"></ng-container>
    } 
    @if (isSubtitleText) {
        <ng-container *ngTemplateOutlet="subtitleText"></ng-container>
    }
    <ng-template #subtitleText>
        <div class="mx-auto md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
            <div class="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                <p class="text-base">
                {{ TEXT_CONSTANT.paragraph2 }}
                </p>
            </div>
        </div>
    </ng-template>
    <ng-template #subtitleSearch>
        <div class="mx-auto md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
            <div class="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                <h2 class="text-base md:text-lg lg:text-xl font-semibold text-gray-800">
                {{ TEXT_CONSTANT.subtitle }}
                </h2>
                <form role="search" class="relative flex items-center w-full md:w-auto md:min-w-[200px] lg:min-w-[250px]">
                <img src="/images/Minimalistic Magnifer.png" aria-hidden="true"
                    class="absolute left-2 w-4 h-4 md:w-4 md:h-4 pointer-events-none z-10">
                <input type="search"
                    class="w-full rounded-md pl-8 pr-2 py-2 md:py-1.5 lg:py-2 bg-gray-200 text-sm md:text-base"
                    placeholder="{{ TEXT_CONSTANT.searchPlaceholder }}" aria-label="Search">
                </form>
            </div>
        </div>
    </ng-template>
    `,
    styles: `
    `
})
export class SubtitleComponent {
    @Input() isSubtitleSearch: boolean = false;
    @Input() isSubtitleText: boolean = false;
    TEXT_CONSTANT = TEXT_CONSTANT;
}