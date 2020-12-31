import React from "react";

import './PortfolioEntry.css';

import Card from  'react-bootstrap/Card';
import Badge from  'react-bootstrap/Badge';
import Button from  'react-bootstrap/Button';
import {RiGithubLine, RiFile2Line} from 'react-icons/ri/';

class PortfolioEntry extends React.Component{

    renderTags(){
        if(this.props.tags.length){
            return(
                this.props.tags.map(tag => { 
                    return(<span><Badge variant={tag.bootstrap_variant?tag.bootstrap_variant:""} style={tag.style}>{tag.text}</Badge>{' '}</span>)
                })
            )
        }
        return "none"
    }

    renderButtons(){
        let buttons = [];

        if(this.props.gh_source){
            buttons.push((<Button variant="dark" target="_blank" href={this.props.gh_source} size="sm"><RiGithubLine/>  Source Code</Button>));
            buttons.push(<span>{' '}</span>)
        }

        if(this.props.browse){
            buttons.push((<Button variant="primary" href={this.props.browse} target="_blank" size="sm"><RiFile2Line/> Browse</Button>))
            buttons.push(<span>{' '}</span>)
        }

        return buttons;
    }

    render(){
        console.log(this.props.img);
        return (
            <Card className="EntryCard">
                <Card.Body>
                    <Card.Title>
                        {this.props.title?this.props.title:"[Untitled]"}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Tags: {this.renderTags()}
                        {/*<Badge variant="success">Finished</Badge> <Badge variant="primary">HTML/CSS</Badge> <Badge variant="secondary">Languages</Badge>*/}
                    </Card.Subtitle>
                    <Card.Text>
                        {this.props.children}
                    </Card.Text>

                    {
                        this.renderButtons()
                    }
                    {
                        /*
                    <Button variant="dark" target="_blank" href="https://github.com/BomberBeetle/rescool" size="sm"><RiGithubLine/>  Source Code</Button> {' '}
                    <Button variant="primary" href="https://bomberbeetle.github.io/rescool/" target="_blank" size="sm"><RiFile2Line/> Browse</Button>
                        */ 
                    }
                    </Card.Body>
                {this.props.img?<Card.Img variant="bottom" src={this.props.img}/>:''}    
            </Card>
        );
    }
}

export default PortfolioEntry;