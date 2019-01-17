import React, { Component } from 'react'
import {Editor, EditorState, RichUtils} from 'draft-js';

import BlogEntries from './Blog/BlogEntries';

const styles = {
    editor: {
      border: '1px solid gray',
      minHeight: '6em'
    }
  };
export default class Blog extends Component {

    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }
    _onItalicClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }

    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.setEditor = (editor) => {
          this.editor = editor;
        };
        this.focusEditor = () => {
          if (this.editor) {
            this.editor.focus();
          }
        };
      }
    
      componentDidMount() {
        this.focusEditor();
      }

    
    
      render() {
        return (
          <div>
          <BlogEntries/>
          <div style={styles.editor} onClick={this.focusEditor}>
            <button onClick={this._onBoldClick.bind(this)}>Bold</button>
            <button onClick={this._onItalicClick.bind(this)}>Italic</button>
            <Editor
                editorState={this.state.editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.onChange}
            />                
            </div>
          </div>
        );
      }
    
    
 
}
