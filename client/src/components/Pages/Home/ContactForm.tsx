import React,{useState,useContext} from 'react'
import {ContactContext} from '../../../context/contact/contactContext';
import {
    TextField,
    FormControlLabel,
    Checkbox,
    Typography,
    Button,
} from '@material-ui/core';
import useStyle from '../SignIn/formstyles';
const ContactForm = () => {
    const classes = useStyle();
    const contactContext = useContext(ContactContext);
    const[contact,setContact] = useState({
        name:'',
        email:'',
        phone:'',
        type:'personal',
    })
    const{name, email, phone,type} = contact;

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setContact({
            ...contact,[e.target.name]:e.target.value
        })
    }
    const submitHandler = (e: React.SyntheticEvent) =>{
        e.preventDefault();
        contactContext.addContact(contact)
        setContact({ 
        name:'',
        email:'',
        phone:'',
        type:'personal',
       });
    }
    return (
        <div className={classes.paper}>
                            <Typography component='h1' variant='h5'>
                                Add Contact
                            </Typography>
                            <form className={classes.form} onSubmit={submitHandler} autoComplete='off'>
                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    required
                                    fullWidth
                                    id='name'
                                    value={name}
                                    label='Name'
                                    name='name'
                                    autoComplete='off'
                                    autoFocus
                                    onChange ={changeHandler}
                                />
                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    required
                                    fullWidth
                                    value={email}
                                    id='email'
                                    label='Emai'
                                    name='email'
                                    autoComplete='off'
                                    autoFocus
                                    onChange ={changeHandler}
                                />
                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    required
                                    fullWidth
                                    name='phone'
                                    label='Phone'
                                    type='text'
                                    id='phone'
                                    value={phone}
                                    autoComplete='off'
                                    onChange ={changeHandler}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="personal"
                                            checked ={type === "personal"}
                                            color='primary'
                                            name = "type"
                                            onChange ={changeHandler}
                                        />
                                    }
                                    label='Personal'
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="professional"
                                            checked ={type === "professional"}
                                            name="type"
                                            color='primary'
                                            onChange ={changeHandler}

                                        />
                                    }
                                    label='Professional'
                                />
                                <Button
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    color='primary'
                                    className={classes.submit}
                                >
                                    Submit
                                </Button>
                            </form>
                        </div>
    )
}

export default ContactForm
