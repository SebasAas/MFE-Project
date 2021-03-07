import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

function App() {
    return (
        <StylesProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/pricing" exact component={Pricing}/>
                </Switch>
            </Router>
        </StylesProvider>
    )
}

export default App
