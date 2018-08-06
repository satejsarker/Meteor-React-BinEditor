import React from 'react';
import ReactDom from 'react-dom';
import {Route,Router,IndexRoute,browserHistory} from 'react-router';
import App from './Components/App';
import { Bins } from '../imports/collections/Bin';
import BinsMian from './Components/Bins/BinsMain';
import BinsList from './Components/Bins/BinsList';


const routes=(
<Router history={browserHistory} >
<Route path="/" component={App} >
<IndexRoute component={BinsList} />
<Route path='bins/:binId' component={BinsMian} />
</Route>
</Router>
);

Meteor.startup(()=>{
  ReactDom.render(routes,document.querySelector('.react-render'))
})