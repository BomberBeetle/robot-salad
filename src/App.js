import React from 'react';
import Routes from './routes' 
import Navigator from './components/navigator/Navigator'
import {ThemeContext, themes, fonts, sizes} from './theme-context';

class App extends React.Component{
constructor(props){
  super(props);
  this.state = {
    style: {
      theme: themes.light,
      font: fonts.normal,
      size: sizes.normal,
    }
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

render() {
  return (
    <div style={{height:"100%",...this.state.style.theme.background}}>
    <ThemeContext.Provider value={this.state.style}>
    <Navigator setFont={this.setFont} setTheme={this.setTheme}/>
    <Routes />
    </ThemeContext.Provider>
    </div>
  );
}
}

export default App;
