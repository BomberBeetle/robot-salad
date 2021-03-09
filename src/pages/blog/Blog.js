import {Component} from 'react';
import './Blog.css';
import Container from  'react-bootstrap/Container';
import Row from  'react-bootstrap/Row'
import Col from  'react-bootstrap/Col';

import BlogPost from '../../components/blog_post/BlogPost'
import {ThemeContext} from '../../context/theme-context';
import {locales, LocaleContext} from '../../context/locale-context';

class Blog extends Component{
render(){
    let theme = this.context.theme;
    let font = this.context.font;
    return(
      <div className="BlogRoot" style={theme.background}> 
      <Container className="MainContainerBlog" style={theme.content}>
      <Row className="justify-content-center" gx={2} style={{fontFamily: font,}}>
          <Col className="text-break" sm={10} style={{marginTop:"25px",}}>
                {
                    /*
                    posts.map(post=>{
                        return(
                            <BlogPost 

                             title={post.title}
                             subtitle={post.subtitle}
                             date = {post.date}
                             style = {theme.cards}
                            >

                                {post.JSXcontent}

                            </BlogPost>
                        )
                    })
                    */
                }
                <LocaleContext.Consumer>
                    {
                        currentLocale => {
                            let posts;
                            if(currentLocale===locales.us){
                                posts = require('./locale-content/us.js').posts;
                            }
                            else if(currentLocale===locales.br){
                                posts = require('./locale-content/br.js').posts;
                            }
                            return(
                                posts.map(post=>{
                                    return(
                                        <BlogPost 
            
                                         title={post.title}
                                         subtitle={post.subtitle}
                                         date = {post.date}
                                         style = {theme.cards}
                                        >
            
                                            {post.JSXcontent}
            
                                        </BlogPost>
                                    )
                                })
                            );
                        }
                    }
                </LocaleContext.Consumer>
          </Col>
      </Row>
  </Container>
  </div>
    )
}
}

Blog.contextType = ThemeContext;
export default Blog;