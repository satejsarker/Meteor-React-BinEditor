import React,{Component} from 'react';

import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';
class BinEditor extends Component{
    onEdit(content){
        Meteor.call('bins.update', this.props.bin,content)
    }
    render(){
        return(
            <div className="col-xs-8">
                <h5>Input the value </h5>
                <CodeMirror
                value={this.props.bin.content}
                onChange={this.onEdit.bind(this)}
                options={{mode:'makedown',lineNumbers:true}} />
                </div>
        )
    }
}

export default BinEditor;