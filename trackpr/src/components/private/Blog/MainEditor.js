import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import {Editor, EditorState, RichUtils} from 'draft-js';
import EditorMenu from './EditorMenu'
import SingleColumn from '../NewsletterTemplates/SingleColumn'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    editor: {
        border: '1px solid gray',
        minHeight: '30em'
      }
  });
class MainEditor extends Component {

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

    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }
    _onItalicClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }

  render() {
    const { classes } = this.props;

    function myBlockRenderer(contentBlock) {
      const type = contentBlock.getType();
        return {
          component: SingleColumn,
          editable: true,
          props: {
            foo: 'bar',
          },
        };
      
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={6}>
            <Grid item xs>
                <EditorMenu/>
            </Grid>
            <Grid item xs={8}>

            <div className={classes.editor} onClick={this.focusEditor}>
            <button onClick={this._onBoldClick.bind(this)}>Bold</button>
            <button onClick={this._onItalicClick.bind(this)}>Italic</button>
            <Editor
                editorState={this.state.editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.onChange}
                blockRendererFn={myBlockRenderer} 
                placeholder="Enter some text..."
            />                
            </div>
            </Grid>
        </Grid>

      </div>
    )
  }
}

export default withStyles(styles)(MainEditor);