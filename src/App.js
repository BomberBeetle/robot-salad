import React from 'react';
import Routes from './routes' 
import Navigator from './components/navigator/Navigator'
import {ThemeContext, themes, fonts, sizes} from './theme-context';

class App extends React.Component{
constructor(props){
  super(props);
  this.state = {
    style: {
      theme: themes.dark,
      font: fonts.normal,
      size: sizes.normal,
    }
  }
}

setFont = (font) => {
  let newState = this.state
  newState.style.font = font;
  this.setState(newState)
}

render() {
  return (
    <ThemeContext.Provider value={this.state.style}>
    <Navigator setFont={this.setFont}/>
    <Routes />
    </ThemeContext.Provider>
  );
}
}

export default App;
