import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { dulceScreen } from '../components/dulce/dulceScreen'
import { addRecipe } from '../components/add/addRecipe'
import { foodScreen } from '../components/comida/foodScreen'
import { homeScreen } from '../components/home/homeScreen'
import { Navbar } from '../components/ui/navBar'
import { saladoScreen } from '../components/salado/saladoScreen'
import { SearchScreen } from '../components/search/searchScreen'
import { profileScreen } from '../components/profile/profileScreen'
export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className='container-fluid'>
                <Switch>
                    <Route exact path='/salado' component= { saladoScreen} />
                    <Route exact path='/dulce' component= { dulceScreen } />
                    <Route exact path='/comida/:foodId' component= { foodScreen } />
                    <Route exact path='/search' component= {SearchScreen} />
                    <Route exact path='/add' component= {addRecipe} />
                    <Route exact path='/home' component= {homeScreen} />
                    <Route exact path='/profile' component= {profileScreen} />
                    <Redirect to ='/home'/>
                </Switch>
            </div>
        </>
    )
}
