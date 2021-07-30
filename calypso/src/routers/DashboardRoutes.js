import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import  DulceScreen  from '../components/dulce/dulceScreen'
import  AddRecipe  from '../components/add/addRecipe'
import  FoodScreen  from '../components/comida/foodScreen'
import  HomeScreen  from '../components/home/homeScreen'
import  Navbar  from '../components/ui/navBar'
import  SaladoScreen  from '../components/salado/saladoScreen'
import  SearchScreen  from '../components/search/searchScreen'
import  ProfileScreen  from '../components/profile/profileScreen'
export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className='container-fluid'>
                <Switch>
                    <Route exact path='/salado' component= { SaladoScreen} />
                    <Route exact path='/dulce' component= { DulceScreen } />
                    <Route exact path='/comida/:foodId' component= { FoodScreen } />
                    <Route exact path='/search' component= {SearchScreen} />
                    <Route exact path='/add' component= {AddRecipe} />
                    <Route exact path='/home' component= {HomeScreen} />
                    <Route exact path='/profile' component= {ProfileScreen} />
                    <Redirect to ='/home'/>
                </Switch>
            </div>
        </>
    )
}
