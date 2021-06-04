import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../context/auth/AuthContext';
import Fab from '@material-ui/core/Fab';
import {AppBar, Toolbar, Typography, Button, CssBaseline} from '@material-ui/core'
import {PermContactCalendar,ExitToApp} from '@material-ui/icons';

import useStyles from './styles';
export default function Navbar() {
    const classes = useStyles();
    const authContext = useContext(AuthContext);
    const {isAuthenticated,logout,user} = authContext;
    const  onLogout = () =>{
        logout();
    }
    const authLinks = (
        <>
        <h3 style={{marginRight:"20px"}}>Hello {user&&user.name.split(" ")[0]}</h3>
        <Fab className={classes.fab}size="small" onClick={onLogout}>
            <ExitToApp/>
        </Fab>
        </>
    )
    const guestLinks=(
      <>
       <Button color="inherit"><Link className ={classes.links} to='/signin'>SignIn</Link></Button>
       <Button color="inherit"><Link className ={classes.links} to='/signup'>SignUp</Link></Button>
      </>
    )
    return (
        <>
        <CssBaseline/>
        <AppBar position='relative'>
            <Toolbar variant="dense" className = {classes.navbar} >
                <PermContactCalendar/>
                <Typography variant='h6'>
                   <Link className={classes.logo} to='/'> Contact Keeper</Link>
                </Typography>
                <ul style={{display:"flex", justifyContent:"center",alignItems:"center", position:"absolute", right:"20px"}}>
                 {isAuthenticated?authLinks:guestLinks}
                </ul>
               
            </Toolbar>
        </AppBar>
        </>
            
       
    )
}
