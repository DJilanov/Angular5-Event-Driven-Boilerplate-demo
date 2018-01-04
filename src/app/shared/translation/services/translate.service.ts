import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from 'rxjs/Subject';

declare function require(url: string);

const english = require('../languages/lang-en.json');
const bulgarian = require('../languages/lang-bg.json');

@Injectable()
export class TranslateService {
    public OnLanguageChange: Subject<String>
        = new Subject<String>();

    private language: string;

    public changeLanguage(language: string) {
        this.language = language;
        
        this.OnLanguageChange.next(this.language);
    }

    public translate(text) {

        switch (this.language) {
            case 'EN':
                text = english[text] || text;
                break;
            case 'BG':
                text = bulgarian[text] || text;
                break;
            default:
                text = english[text] || text;
                break;
        }

        return text;
    }
}