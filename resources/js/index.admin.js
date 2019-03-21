import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

import { routes } from './routes';


const App = props => (
    <Router>
        <>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/categories">Categories List</Link>
            </li>
        </ul>
        <hr/>

        {routes.map((route, key) => (
            <Route
            key={key}
            exact
            path={route.path}
            component={route.component}
            />
        ))}
        </>
    </Router>
);


if(document.querySelector('#root')){
ReactDOM.render(<App />,document.querySelector('#root'));
}