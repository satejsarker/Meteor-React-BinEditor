import React,{Component} from 'react'

class BinShare extends Component{
    ShareList(){
        return this.props.bin.shareWith.map((email)=>{
                return <button 
                key={email}
                className = "btn btn-warning" >
                 {email}
                 </button>
        })
    }
    onShare(){

        const email=this.refs.email.value;
        console.log(email)
        console.log(this.props.bin)
      Meteor.call('bins.share',this.props.bin,email)
    }
    render(){
        return(
            <footer className="bins-share">
            <div className="input-group">
            <input ref="email" className="form-control"
           />
           <div className='input-group-btn'>
           
           <button 
            onClick={this.onShare.bind(this)}
           className="btn btn-info">
                    Share Bin
           </button>
           </div>
           </div> 
           <div>
               shared With: 
               </div>
               <div className='btn-group'>
               {this.ShareList()}
               </div>
            </footer>
        )
    }
}

export default BinShare;