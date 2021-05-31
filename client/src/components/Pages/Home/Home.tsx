import React from 'react';
import Contacts from './Contacts';
import ContactForm from './ContactForm';
import {ContactFilter} from './ContactFilter';

import {
    Container,
    Grid,
    CssBaseline,
} from '@material-ui/core';

function Home() {
    
    return (
        <main>
            <CssBaseline />
            <Container maxWidth='lg'>
                <Grid container justify='center' spacing={8}>
                    <Grid item xs={12} sm={4}>
                    <ContactForm/>
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
