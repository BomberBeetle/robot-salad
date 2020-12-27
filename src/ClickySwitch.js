
import React from 'react';
import OnImage from './images/SwitchOn.png';
import OffImage from './images/SwitchOff.png';
import ClickSound from './audio/click.mp3';

class ClickySwitch extends React.Component{

    constructor(props){
        super(props);
        this.state = {toggled: props.toggled};
        this.audioRef = React.createRef();
        this.clicked = () =>{ 
            this.setState({toggled: !this.state.toggled});
            let audio = this.audioRef.current;
            audio.currentTime=0;
            audio.play();
        }
    }

    render(){
         return(
            <div>
             <img src={this.state.toggled?OnImage:OffImage} onClick={this.clicked} alt="A toggle switch."/>
             <audio ref={this.audioRef}>
                 <source src={ClickSound} type="audio/mpeg"/>
                 how tf cant you play some weak ass mp3 my homie.
            </audio>
            </div>
         );
     }
 }

 export default ClickySwitch;