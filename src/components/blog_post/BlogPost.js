import React from "react";
import Card from 'react-bootstrap/Card'
import "./blog_post.css";
import {LocaleContext, locales} from '../../context/locale-context';

class AnchoredCard extends React.Component{
    render(){
        return(
        <Card className="PostCard" style={this.props.style?this.props.style:{}}>
            <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.subtitle}</Card.Subtitle>
                    {this.props.children}
            </Card.Body>
            <Card.Footer className="text-muted">
                <LocaleContext.Consumer>
                {
                
                currentLocale => {
                    let strings;
                    if(currentLocale===locales.br){
                        strings = require('./locale-content/br').default;
                    }
                    else if(currentLocale===locales.us){
                        strings = require('./locale-content/us').default;
                    }
                    return(<span>{strings.postedOn}{new Intl.DateTimeFormat(currentLocale.intl_locale, {hour: "numeric", minute: "numeric", day: "numeric",month:"short", year: "numeric"}).format(this.props.date)}</span>)
                }
                }
                </LocaleContext.Consumer>
            </Card.Footer>
        </Card>
        )
    }
}

export default AnchoredCard;