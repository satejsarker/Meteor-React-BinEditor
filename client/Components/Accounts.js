import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';


class Accounts extends Component{
    componentDidMount(){
        // render Blaze account form 
        //render the Accounts form in DIV
      this.view=  Blaze.render(Template.loginButtons,
            ReactDom.findDOMNode(this.refs.container))

    }
    componentWillUnmount(){
        // go find the form we created and destroy them
        // we need t clean up those forms ourself
        Blaze.remove(this.view);
    }
    render(){
        return(
                <div ref="container">
                    </div>
        );
    }
}

export default Accounts;