import './Blog.css';
import Container from  'react-bootstrap/Container';
import Row from  'react-bootstrap/Row';
import Navigator from '../../components/navigator/Navigator'
import Col from  'react-bootstrap/Col';
import posts from './posts'
import BlogPost from '../../components/blog_post/BlogPost'

function Blog(){
    return(
      <div className="BlogRoot"> 
      <Navigator/>
      <Container className="MainContainerBlog">
      <Row className="justify-content-center" gx={2}>
          <Col className="text-break" sm={10} >
                {
                    posts.map(post=>{
                        return(
                            <BlogPost 

                             title={post.title}
                             subtitle={post.subtitle}
                             date = {post.date}
                             
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

export default Blog;