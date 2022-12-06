import React from 'react'
import {Route} from 'react-router-dom'

import Chips from './Chips'
import Candy from './Candy'
import Soda from './Soda'
import NavBar from './NavBar'

const VendingMachine = () => {

    return(
        <div>
            <NavBar />
            <Route exact path="/">
                <img src="/images/vending-machine-2.jpeg" alt="vending-machine" />
            </Route>
            <Route exact path="/chips">
                <Chips />
            </Route>
            <Route exact path="/soda">
                <Soda />
            </Route>
            <Route exact path="/candy">
                <Candy /> 
            </Route>
        </div>
    )
}

export default VendingMachine;