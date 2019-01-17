import React, { Component } from 'react'

import BlogEntries from './Blog/BlogEntries';
import MainEditor from './Blog/MainEditor';

const styles = {
  
  };
export default class Blog extends Component {

    
      render() {
        return (
          <div>
            <BlogEntries/>
            <MainEditor/>
          </div>
        );
      }
    
    
 
}
