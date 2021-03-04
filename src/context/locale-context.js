import {createContext} from 'react';

export const locales = {
    br: {displayName: 'Português Brasileiro'},
    us: {displayName: 'English'},
}

export const LocaleContext = createContext({
    locale: locales.us,
    changeLocale: () => {},
});