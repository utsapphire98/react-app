import React, { Component } from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import ContactsList from './components/ContactList'
import ContactForm from './components/ContactForm';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ContactDetail from './components/ContactDetail';
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <h2 className="alert alert-info">Assessment-6 <i>by Uttkarsh</i></h2>
                        <div className="row">
                            <div className="col-md-5">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <Link to="/view-contacts">ALL USERS</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/add-new-contact">ADD USER</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-7">
                                <Route path="/add-new-contact" component={ContactForm} exact={true} />
                                <Route path="/view-contacts" component={ContactsList} exact={true} />
                                <Route path="/contact-detail/:id" component={ContactDetail} exact={true} />
                            </div>

                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}
ReactDom.render(<App />, document.getElementById("root"));