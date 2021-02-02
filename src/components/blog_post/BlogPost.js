import React from "react";
import Card from 'react-bootstrap/Card'

class AnchoredCard extends React.Component{
    render(){
        return(
        <Card>
            <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.subtitle}</Card.Subtitle>
                    {this.props.children}
            </Card.Body>  
            <Card.Footer className="text-muted">Posted On: {new Date(this.props.date).toUTCString()}</Card.Footer>
        </Card>
        )
    }
}

export default AnchoredCard;