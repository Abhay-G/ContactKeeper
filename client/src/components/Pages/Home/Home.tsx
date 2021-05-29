import React from 'react';
import Contacts from './Contacts';
import {
    Container,
    Grid,
    CssBaseline,
} from '@material-ui/core';
import ContactForm from './ContactForm';
function Home() {
  
    return (
        <main>
            <CssBaseline />
            <Container maxWidth='lg'>
                <Grid container justify='center' spacing={4}>
                    <Grid item xs={12} sm={4}>
                    <ContactForm/>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Contacts/>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}

export default Home;
