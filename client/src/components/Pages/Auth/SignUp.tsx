import React,{useState} from 'react';
import {Container, Avatar,TextField,FormControlLabel,Checkbox, Link, Grid, Typography, Button, CssBaseline} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyle from "./formstyles";
const Form: React.FC = ()=> {
    const classes = useStyle();
    // interface User{
    //     name:string;
    //     email:string;
    //     password:string;
    //     password2:string;
    // };
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        password2:'',
    })
    const {name, email, password, password2} = user;

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const submitHandler = (e:React.SyntheticEvent)=>{
       e.preventDefault();
       console.log('Register submit');

    }
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={submitHandler}>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={changeHandler}
              id="name"
              label="Your Name"
              name="name"
              autoComplete="off"
              value ={name}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={changeHandler}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              value ={email}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={changeHandler}
              name="password"
              label="Password"
              type="password"
              value ={password}
              id="password"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={changeHandler}
              name="password2"
              label="Confirm Password"
              type="password"
              id="password"
              value ={password2}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
}

export default Form
