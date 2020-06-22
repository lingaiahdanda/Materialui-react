import React from 'react'
import { AppBar, Typography ,Toolbar} from '@material-ui/core'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import {makeStyles} from '@material-ui/styles'
const useStyles = makeStyles(()=>({
    typographyStyles:{
        flex:1
    }
}))
function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    RiktamTechnologies
                </Typography>
                <HomeRoundedIcon></HomeRoundedIcon>
            </Toolbar>
        </AppBar>
    )
}

export default Header
