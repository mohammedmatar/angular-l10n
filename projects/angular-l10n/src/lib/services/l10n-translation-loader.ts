import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { L10nProvider } from '../models/types';
import { l10nError } from '../models/l10n-error';

/**
 * Implement this class-interface to create a loader of translation data.
 */
@Injectable() export abstract class L10nTranslationLoader {

    /**
     * @param language The current language
     * @param provider The provider of the translations data
     * @return An object of translation data for the language: {key: value}
     */
    public abstract getTranslation(language: string, provider: L10nProvider): Observable<any>;

}

@Injectable() export class L10nDefaultTranslationLoader implements L10nTranslationLoader {

    public getTranslation(language: string, provider: L10nProvider): Observable<any> {
        return provider.asset[language] ?
            of(provider.asset[language]) :
            throwError(l10nError(L10nDefaultTranslationLoader, 'Asset not found'));
    }

}
