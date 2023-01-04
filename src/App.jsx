import React from 'react';
import  ReactDOM  from 'react-dom';
import Header from './global/Header';
import Footer from './global/Footer';
import { BrowserRouter as Router ,
    Switch,
    Route } from 'react-router-dom';


class App extends React.Component {

// Research state managment components
render(){
    return (    
    <Router>
        <div className="app">
            <div className="headerContainer">
            <Route exact path="/" render={props => (
                                <React.Fragment>
                                <div>
                                   <div className="center">
                                        <Header/>
                                   </div>
                                </div>
                                </React.Fragment>
                            )} />
            </div>
    <routes>
       

    </routes>

    </div>
    </Router>
    
    
    )
}


    
}
export default App;