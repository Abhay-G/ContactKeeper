import React from 'react'
import {AppBar, Toolbar, Typography, Button, CssBaseline} from '@material-ui/core'
import {PermContactCalendar} from '@material-ui/icons';
import useStyles from './styles';
export default function Navbar() {
    const classes = useStyles();
    return (
        <>
        <CssBaseline/>
        <AppBar position='relative'>
            <Toolbar variant="dense" className = {classes.navbar}>
                <PermContactCalendar/>
                <Typography variant='h6'>
                    Contact Keeper
                </Typography>
            </Toolbar>
        </AppBar>
        </>
            
       
    )
}
