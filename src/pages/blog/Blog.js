import './Blog.css';

import Container from  'react-bootstrap/Container';
import Row from  'react-bootstrap/Row';
import Navigator from '../../components/navigator/Navigator'
import Col from  'react-bootstrap/Col';

import posts from './posts'
import BlogPost from '../../components/blog_post/BlogPost'

function Blog(){
    return(
        <div>
      <Navigator/>
      <Container className="MainContainer">
      <Row className="justify-content-center" gx={2}>
          <Col className="text-break" sm={10} >
                {
                    posts.map(post=>{
                        return(
                            <BlogPost>
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