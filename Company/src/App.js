import React from 'react'
import EmployeeList from './EmployeeList'
import NewEmployee from './NewEmployee'
import Edit from './Edit'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import Drawer from './Drawer'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  container:{
    display:'flex'
  }
})
function App() {
  const classes = useStyles();
  return (
    <div  className={classes.container}>
      <Router>
        <Drawer></Drawer>
        <Switch>
          <Route exact from="/" render={props=><EmployeeList {...props}></EmployeeList>}></Route>
          <Route exact from="/new" render={props=><NewEmployee {...props}></NewEmployee>}></Route>
          <Route exact from="/edit/:id" render={props=><Edit {...props}></Edit>}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
