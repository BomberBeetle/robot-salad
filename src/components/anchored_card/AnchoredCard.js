import React from "react";
import Card from 'react-bootstrap/Card'

class AnchoredCard extends React.Component{
    render(){
        return(
        <a href={this.props.href} style={{color:"inherit"}}>
        <Card style={{marginBottom:"20px"}}>
            <Card.Body>
                    {this.props.children}
            </Card.Body>
        </Card>
        </a>)
    }
}

export default AnchoredCard;