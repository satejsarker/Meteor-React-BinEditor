import React,{Component} from 'react';
import Accounts from './Accounts';
import { Link,browserHistory } from 'react-router';


class Header extends Component{
onBindClick(event){
    event.preventDefault();
    Meteor.call('bins.insert',(error,binId)=>{
        browserHistory.push(`/bins/${binId}`)
    });
}
    
    render(){
        return(
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    
                    <ul className="nav navbar-nav">
                        <li>
                                < Link to = '/'className = 'navbar-brabd' > BinEditor </Link>
                            </li>
                    <li>
                        <a>
                            <Accounts/>
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={this.onBindClick.bind(this)}>
                                Create Bin
                                </a>
                            </li>
                    </ul>
                </div>
                </nav>
        );
    }
}

export default Header;