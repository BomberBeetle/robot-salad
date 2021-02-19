import {createContext} from 'react';

const themes = {
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

const sizes = {
    normal: {},
    large: {}
}

const fonts = {
    normal: {},
    dyslexic: 'Open Dyslexic'
}

const ThemeContext = createContext({
    theme: themes.dark,
    size: sizes.normal,
    font: fonts.dyslexic,
   })

export default ThemeContext;
   