import React from 'react'
import { Container,Grid} from '@material-ui/core'
import useStyles from './styles';
import Form from './Form';
const Main:React.FC =()=> {

    const classes = useStyles();
    return (
        
        <main>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container justify="center" spacing={10}> 
                    <Grid item xs={12}  md={6} >
                    <Form/>
                    </Grid>
                </Grid>
            </Container>
        </main>
        
    )
}

export default Main;
