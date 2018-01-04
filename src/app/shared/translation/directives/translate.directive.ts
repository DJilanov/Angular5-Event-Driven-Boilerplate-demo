import { Directive, ElementRef } from "@angular/core";
import { TranslateService } from "../services/translate.service";

@Directive({
    selector: '[translate]'
})
export class TranslateDirective {
    constructor(
        public element: ElementRef,
        public translateService: TranslateService
    ) {
        this.translateService.OnLanguageChange
            .subscribe((text) =>
                this.handleOnLanguageChange(text))
    }

    private handleOnLanguageChange(text: String) {
        this.element.nativeElement.textContent = 
            this.translateService
                .translate(this.element.nativeElement.textContent);
    }
}