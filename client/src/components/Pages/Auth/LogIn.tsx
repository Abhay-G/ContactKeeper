import React,{useState,useContext,useEffect} from 'react';
import {Container, Avatar,TextField,FormControlLabel,Checkbox, Link, Grid, Typography, Button, CssBaseline} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useHistory,Link as Linkk} from 'react-router-dom';
import {AlertContext} from '../../../context/alert/AlertContext';
import {AuthContext} from '../../../context/auth/AuthContext';
import useStyle from "./formstyles";
const Form: React.FC = ()=> {
    const classes = useStyle();
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const history = useHistory();
    const { setAlert } = alertContext;
    const {login,error,clearErrors,isAuthenticated} = authContext;
    useEffect(()=>{
      if(isAuthenticated){
         history.push('/');
      }
      if(error === 'Invalid credentials'){
       setAlert(error,'error');
      //  clearErrors();
      }
      // eslint-disable-next-line
    },[error,isAuthenticated,history]);
    const [user, setUser] = useState({
      email:'',
      password:''
  })
  const { email, password} = user;

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setUser({...user,[e.target.name]:e.target.value});
  }
  const submitHandler = (e:React.SyntheticEvent)=>{
     e.preventDefault();
     if(email===''|| password===''){
      setAlert('Please enter all fields','warning');
    }else{
      login({
        email,
        password,
      })
    }

  }
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.papersignIn}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={submitHandler}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={changeHandler}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={changeHandler}
              name="password"
              label="Password"
              type="password"
              id="password"
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
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                  <Linkk className={classes.link} to='/signup'> Don't have an account? Sign Up</Linkk>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
}

export default Form
