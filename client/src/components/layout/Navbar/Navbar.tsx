import React from 'react'
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button, CssBaseline} from '@material-ui/core'
import {PermContactCalendar} from '@material-ui/icons';
import useStyles from './styles';
export default function Navbar() {
    const classes = useStyles();
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
                 <Button color="inherit"><Link className ={classes.links} to='/about'>About</Link></Button>
                 <Button color="inherit"><Link className ={classes.links} to='/signin'>SignIn</Link></Button>
                 <Button color="inherit"><Link className ={classes.links} to='/signup'>SignUp</Link></Button>
                </ul>
               
            </Toolbar>
        </AppBar>
        </>
            
       
    )
}
