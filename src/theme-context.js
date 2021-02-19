import {createContext} from 'react';

export const themes = {
    light:{
        content:{
            backgroundColor:"white"
        },
        background:{
            backgroundColor: "#b9f7e1",
        }
    },
    dark:{
        content:{
            color: "#FBFBFB", backgroundColor:"#203030",
        },
        cards:{
            borderColor: "#202020", backgroundColor:"#162424"
        },
        background:{
            backgroundColor: "#131917",
        },
    },
    darkest:{}
}

export const sizes = {
    normal: {},
    large: {}
}

export const fonts = {
    normal: 'inherit',
    dyslexic: 'Open Dyslexic'
}

export const ThemeContext = createContext({
    theme: themes.dark,
    size: sizes.normal,
    font: fonts.dyslexic,

    toggleFont: () =>{}
   })


   