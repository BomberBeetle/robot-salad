import {createContext} from 'react';

export const locales = {
    br: {displayName: 'Português Brasileiro', intl_locale: "pt-BR"},
    us: {displayName: 'English', intl_locale: "en-us"},
}

export const LocaleContext = createContext({
    locale: locales.us,
    changeLocale: () => {},
});