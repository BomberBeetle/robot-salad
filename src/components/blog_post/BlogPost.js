import React from "react";
import Card from 'react-bootstrap/Card'

class AnchoredCard extends React.Component{
    render(){
        return(
        
        <Card>
            <Card.Body>
                    {this.props.children}
            </Card.Body>
        </Card>
        )
    }
}

export default AnchoredCard;