import React from 'react'
import { Drawer as MUIDrawer,ListItem,List,ListItemIcon,ListItemText} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import {withRouter} from 'react-router-dom'
const useStyles = makeStyles({
  drawer:{
    width:'200px',
  }
})
function Drawer(props) {
    const {history } = props 
    const classes = useStyles();
    const itemsList = [
        {
            text:'Company',
            icon:<MenuRoundedIcon></MenuRoundedIcon>,
        },
        {
            text:'Employees List',
            icon:<PeopleAltRoundedIcon></PeopleAltRoundedIcon>,
            onClick:()=>history.push('/')
        },
        {
            text:'Add Employee',
            icon:<PersonAddRoundedIcon></PersonAddRoundedIcon>,
            onClick:()=>history.push('./new')
        }];
    return (
        <MUIDrawer open variant="permanent" className={classes.drawer}>
            <List>
                {itemsList.map((item, index) => (
                    <ListItem button key={item.text} onClick={item.onClick}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </MUIDrawer>
    )
}

export default  withRouter(Drawer);
