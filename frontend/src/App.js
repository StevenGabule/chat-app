import React from 'react'
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Chat from "./components/Chat/Chat";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import ProtectedRoute from "./components/Router/ProtectedRoute";
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <ProtectedRoute path={'/'} exact component={Chat}/>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/register'} component={Register}/>
                    <Route render={() => <h1>404 page not found</h1>}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
