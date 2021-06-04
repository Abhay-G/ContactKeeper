import React,{useState,useContext,useEffect} from 'react';
import {useHistory,Link as Linkk} from 'react-router-dom';
import {AlertContext} from '../../../context/alert/AlertContext';
import {AuthContext} from '../../../context/auth/AuthContext';
import {Container,Typography,Button,Link,Grid, Avatar,TextField, CssBaseline} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyle from "./formstyles";

 

const Form: React.FC = ()=> {
    const classes = useStyle();
    const history = useHistory();
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { setAlert } = alertContext;
    const {register,error,clearErrors,isAuthenticated} = authContext;
    useEffect(()=>{
      if(isAuthenticated){
         history.push('/');
      }
      if(error === 'User already exists'){
       setAlert(error,'error');
       clearErrors();
      }
      // eslint-disable-next-line
    },[error,isAuthenticated,history]);
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
       if(name===''||email===''|| password===''){
         setAlert('Please enter all fields','warning');
       }else if(password.length<6){
        setAlert('Password is very short','info');
       }else if(password!==password2){
        setAlert('Passwords do not match','error');
       }else{
         register({
           name,
           email,
           password,
         })
       }
      

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
              fullWidth
              onChange={changeHandler}
              name="password2"
              label="Confirm Password"
              type="password"
              id="password"
              value ={password2}
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
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
              <Linkk className={classes.link} to='/signin'>Already have an account? Sign In</Linkk>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
}

export default Form
