import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage'
// import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
// import AddExpensePage from '../components/AddExpensePage';
// import EditExpensePage from '../components/EditExpensePage';
// import HelpPage from '../components/HelpPage';
// import Page404 from '../components/PageNotFound';

const AppRouter = ()=>{
   return ( 
   <BrowserRouter>
    <Header />
     <Switch>
        <Route path="/" component={HomePage} exact={true}/>
     </Switch>
    </BrowserRouter>
    );
};

export default AppRouter;