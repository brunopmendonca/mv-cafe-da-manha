import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from "./Telas/Login/Login"
import Usuario from "./Telas/Usuario/Usuario"

const Routes = () => {

    return (

        <BrowserRouter>

            <Switch>
                <Route path="/" exact component={Login} />
				<Route path="/usuario/" component={Usuario} />
            </Switch>

        </BrowserRouter>)


}

export default Routes