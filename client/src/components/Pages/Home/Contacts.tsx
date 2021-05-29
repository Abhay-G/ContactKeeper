import React,{useContext} from 'react';
import {Container, Grid} from '@material-ui/core';
import useStyle from "./contactsStyle";
import ContactItem from './ContactItem';
import {ContactContext} from '../../../context/contact/contactContext';
const Contacts:React.FC = () => {
    const classes = useStyle();
    const contactsValue = useContext(ContactContext); 
    const {contacts} = contactsValue;

    interface Contact{
        id:any,
        name : string,
        email:string,
        phone:string,
        type:string,
        
    }
    return (
        <div>
           <Container className={classes.container}>
                <Grid container justify="flex-start" spacing={4}> 
                  
                   {contacts.map((contact:Contact)=>{
                       return(
                        <Grid item xs={12} sm={6}>
                          <ContactItem contact ={contact}/>
                        </Grid>
                       )
                   })}
                   
                </Grid>
           </Container>
            
        </div>
    )
}

export default Contacts;
