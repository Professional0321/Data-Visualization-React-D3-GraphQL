//React 
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Apollo
import ApolloClient from "apollo-boost";
import { ApolloProvider} from "react-apollo";

//Components and Pages
import App from './js/App';
import HomepageLayout  from './landing-page/landing';

//REQUIRED STYLES
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import 'semantic-ui-css/semantic.min.css'
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

const app =  document.getElementById('root')

const client = new ApolloClient({
    uri: process.env.REACT_APP_graphqlURL
});

ReactDOM.render(
    <Router>
        <Switch>
            <Route component={HomepageLayout} exact path="/" />
            <ApolloProvider client={client}>
                <Route exactly path='/app' render={(props) => <App {...props} routePath="/app" />} />
            </ApolloProvider>
        </Switch>
    </Router>
    ,app
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();