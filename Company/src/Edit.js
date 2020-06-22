
import React,{useState,useEffect} from 'react';
import {Avatar,Button,CssBaseline,TextField,Link,Grid,Box,Typography,Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import axios from 'axios';
import { useHistory,useParams } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Riktam Tech
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Edit() {
  let history = useHistory();
  const {id}=useParams()
  const [user,setUser]=useState({
      name:'',
      email:'',
      phone:''
  }); 
  useEffect(() => {
    loadUser();
  }, []);
  const onInputChange=e=>{
      setUser({...user,[e.target.name]:e.target.value})
      
  }
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAddRoundedIcon></PersonAddRoundedIcon>
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit Employee
        </Typography>
        <form className={classes.form} noValidate onSubmit={e=>onSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                value={user.name}
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
                onChange={e=> onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={user.email}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e=> onInputChange(e)}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={user.phone}
                name="phone"
                label="Phone"
                id="phone"
                onChange={e=> onInputChange(e)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update Employee Details
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}