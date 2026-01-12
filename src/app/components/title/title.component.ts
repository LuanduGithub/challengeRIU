import { Component, Input } from '@angular/core';
import { TEXT_CONSTANT } from '../../text.constant';
@Component({
    standalone: true,
    imports: [],
    selector: 'app-title',
    template: `
        <div class="md:flex-row mx-auto md:max-w-4xl lg:max-w-6xl xl:max-w-7xl xl:max-w-7xl">
            <div class="flex flex-col">
                <h2 class="text-2xl md:text-2xl lg:text-2xl font-bold text-gray-800 mb-1">
                {{ titleText }}
                </h2>
            </div>
        </div>
    `,
    styles: `
    `
})
export class TitleComponent {
    TEXT_CONSTANT = TEXT_CONSTANT;
    @Input() titleText!: string;
}