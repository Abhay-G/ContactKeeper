import React from 'react'
import { Container,Grid} from '@material-ui/core'
import useStyles from './styles';
import SignupForm from './SignUp';
const Main:React.FC =()=> {

    const classes = useStyles();
    return (
        
        <main>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container justify="center"> 
                    <Grid item xs={12}  md={6} >
                    <SignupForm/>
                    </Grid>
                </Grid>
            </Container>
        </main>
        
    )
}

export default Main;
