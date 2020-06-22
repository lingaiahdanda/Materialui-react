import React,{useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import axios from "axios" 
import Edit from './Edit'
import {withRouter} from 'react-router-dom'
import { makeStyles ,withStyles} from '@material-ui/core/styles';
import {Table,TableBody,TableCell,TableContainer,TableHead,TextField,TableRow,Paper,Button,Dialog,DialogActions,DialogTitle,DialogContent,DialogContentText} from '@material-ui/core';
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.info.dark,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
}))(TableRow);
const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
});
  

function EmployeeList(props) {
    const {history } = props 
    const classes = useStyles();
    const [users,setUser]=useState([]);
    
    useEffect(()=>{
        console.log("how are you?");
        loadUsers();
    },[]);

    const loadUsers = async ()=>{
        const result =await  axios.get("http://localhost:3003/users");
        setUser(result.data.reverse())        
    }

    const deleteUser=(user)=>{
      var result = window.confirm("Are you Sure you Want to delete?"); 
      if (result) {
        axios.delete(`http://localhost:3003/users/${user.id}`);
        loadUsers();
      }
        
    }
    const [open, setOpen] = React.useState(true);
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell >Email</StyledTableCell>
                    <StyledTableCell >Phone</StyledTableCell>
                    <StyledTableCell >Action</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {users.map((user) => (
                    <StyledTableRow  key={user.name}>
                        <StyledTableCell>{user.name}</StyledTableCell>
                        <StyledTableCell >{user.email}</StyledTableCell>
                        <StyledTableCell >{user.phone}</StyledTableCell>
                        <StyledTableCell className={classes.row} >
                            <Link to={`/edit/${user.id}`}><Button style={{ margin:10 }} variant="contained" color="primary">Edit</Button></Link>
                            <Link 
                              onClick={() => deleteUser(user)} color="secondary">
                              <Button variant="contained" color="secondary">Delete</Button>
                            </Link>
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>)
}

export default  withRouter(EmployeeList)
