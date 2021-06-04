import React,{useEffect,useContext} from 'react';
import Contacts from './Contacts';
import ContactForm from './ContactForm';
import {ContactFilter} from './ContactFilter';
import {AuthContext} from '../../../context/auth/AuthContext';

import {
    Container,
    Grid,
    CssBaseline,
} from '@material-ui/core';

function Home() {
    const authContext = useContext(AuthContext);
    useEffect(() =>{
        authContext.loadUser();
        //eslint-disable-next-line
    },[])
    return (
        <main className='app'>
            <CssBaseline />
            <Container maxWidth='lg'>
                <Grid container justify='center' spacing={8}>
                    <Grid item xs={12} sm={4}>
                    <div   className='cform'>
                    <ContactForm/>
                    </div>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <ContactFilter/>
                        <Contacts/>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}

export default Home;
