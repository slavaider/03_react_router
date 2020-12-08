import React, {Component} from 'react'
import './App.css'
import {NavLink, Redirect, Route, Switch} from 'react-router-dom'
import About from './components/About/About'
import Cars from './components/Cars/Cars'
import CarDetail from './components/CarDetail/CarDetail'

class App extends Component {
    state = {
        isLoggedIn: false,
    }

    render() {
        return (
            <div>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink
                                exact
                                activeClassName='wfm-active'
                                to="/"
                                activeStyle={{color: 'blue'}}
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName='wfm-active'>About</NavLink>
                        </li>
                        <li>
                            <NavLink
                                // {{pathname: 'cars', search: '?a=1&b=2', hash: 'wfm-hash'}}
                                to='/cars'
                                activeClassName='wfm-active'
                            >Cars</NavLink>
                        </li>
                    </ul>
                </nav>

                <hr/>
                <div style={{textAlign: 'center'}}>
                    <h3>Is login In : {this.state.isLoggedIn.toString()}</h3>
                    <button onClick={() => this.setState({isLoggedIn: true})}>Login</button>
                </div>
                <hr/>

                {/*localhost:3000*/}
                <Switch>
                    <Route path={'/'} exact render={() => <h1>Homepage</h1>}/>
                    {this.state.isLoggedIn ? <Route path={'/about'} component={About}/> : null}
                    <Route path={'/cars/:name'} component={CarDetail}/>
                    <Route path={'/cars'} component={Cars}/>
                    <Redirect to={'/'}/>
                    {/*<Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 Not Found</h1>}/>*/}
                </Switch>
            </div>
        );
    }
}

export default App
