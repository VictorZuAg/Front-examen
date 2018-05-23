import React from 'react'

import {Route, Switch} from 'react-router-dom'
import App from './App'
import Usuarios from './usuarios'
import Compras from './compras'

const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/:id" component={Compras}/>
        </Switch>
    </App>;
export default AppRoutes;