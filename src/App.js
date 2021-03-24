import React from 'react';
import Routes from './routes' 
import Navigator from './components/navigator/Navigator'
import {ThemeContext, themes, fonts, sizes} from './context/theme-context';
import {LocaleContext, locales} from './context/locale-context';

class App extends React.Component{
constructor(props){
  super(props);
  this.state = {
    style: {
      theme: themes.dark,
      font: fonts.normal,
      size: sizes.normal,
    },
    locale: locales.br,
  }
}

setFont = (font) => {
  let newState = this.state;
  newState.style.font = font;
  this.setState(newState)
}

setTheme = (theme) => {
  let newState = this.state;
  newState.style.theme = theme;
  this.setState(newState);
}

setLocale = (locale) => {
  let newState = this.state;
  newState.locale = locale;
  this.setState(newState);
}

render() {
  return (
    <div style={{height:"100%",...this.state.style.theme.background}}>
    <LocaleContext.Provider value={this.state.locale}>
    <ThemeContext.Provider value={this.state.style}>
    <Navigator setFont={this.setFont} setTheme={this.setTheme} setLocale={this.setLocale}/>
    <Routes />
    </ThemeContext.Provider>
    </LocaleContext.Provider>
    </div>
  );
}
}

export default App;
