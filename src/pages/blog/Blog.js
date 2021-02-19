import {Component} from 'react';
import './Blog.css';
import Container from  'react-bootstrap/Container';
import Row from  'react-bootstrap/Row'
import Col from  'react-bootstrap/Col';
import posts from './posts'
import BlogPost from '../../components/blog_post/BlogPost'
import {ThemeContext} from '../../theme-context';

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
                }
          </Col>
      </Row>
  </Container>
  </div>
    )
}
}

Blog.contextType = ThemeContext;
export default Blog;