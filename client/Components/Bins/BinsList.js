import React,{Component} from 'react';


import {createContainer} from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/Bin';
import {Link} from 'react-router'

class BinList extends Component{
    onBinRemove(bin){
        Meteor.call('bins.remove',bin)
    }
  rnederList(){
      return this.props.bins.map(bin=>{
          const url=`/bins/${bin._id}`
          return (
                < li className = "list-group-item" key={bin._id} >
                    <Link to={url}>BIN {   bin._id}</Link>
                    <span className="pull-right">
                        
                        <button 
                        className="btn btn-danger"
                        onClick={()=>this.onBinRemove(bin)}
                        >
                            Remove
                            </button>
                        </span>
                    </li>
          )
      })
  }
    
    render(){
        console.log(this.props.bins)
        return(
            <ul className="list-group">
            {this.rnederList()}
                </ul>
        )
    }
}

export default createContainer(()=>{
    Meteor.subscribe('bins');
    Meteor.subscribe('shareBins');
    return {bins:Bins.find({}).fetch()};
},BinList)