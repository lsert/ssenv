import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DyLoader from './tools/dyLoader';

function NotFound() {
    return <h2>404 not found</h2>;
}

console.log('12');

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about/">About</Link>
                            </li>
                            <li>
                                <Link to="/users/">Users</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/" exact component={DyLoader(() => import('./pages/home'))} />
                        <Route path="/users/" component={DyLoader(() => import('./pages/user'))} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;