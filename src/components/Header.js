import React,{ Component } from 'react';
import styled from 'styled-components';

class Header extends Component{

  render(){
    return(
      <Head></Head>
    );
  }
}
export default Header;

const Head = styled.div`
  position:fixed;
  left:0;
  top:0;
  background-color: rgba(0,0,0,1.0);
  box-shadow: 0px 2px 5px #888888;
  /*margin-bottom: 10px;*/
  /*border: 1px solid grey;*/
  width: 100%;
  height: 60px;
  z-index: 1000;
`;
