import React,{ Component } from 'react';
import styled from 'styled-components';

class Post extends Component{

  render(){
    return(
      <Article>Articulo</Article>
    );
  }
}
export default Post;

const Article = styled.div`
  background-color: #fff;
  border: 1px solid grey;
  width: 30%;
  height: 150px;
`;
