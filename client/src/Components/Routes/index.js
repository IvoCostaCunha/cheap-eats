import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Home from '../../Pages/Home'
import Profil from '../../Pages/Profil'


const index = () => {
  return (
    <div>
        
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profil" exact component={Profil} />

                <Redirect to ="/" />


            </Switch>
        </Router>
    </div>
  )
}

export default index