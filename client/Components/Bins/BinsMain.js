import React, { Component } from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/Bin';
import BinEditor from './BinEditor';
import BinViewer from './BinViewer';
import BinShare from './BinShare';


class BinsMian extends Component{
    render(){
        if(!this.props.bin){return <div>Loading....</div>}
        return(
            <div>
                <BinEditor bin={this.props.bin}/>
                
                <BinViewer bin={this.props.bin}/>
               
               < BinShare bin = {
                   this.props.bin
               }
               />
                </div>
        );
    }
}

export default createContainer((props)=>{
    const {binId}=props.params;
    Meteor.subscribe('bins');
    Meteor.subscribe('shareBins')
    return {bin:Bins.findOne(binId)}
}, BinsMian);