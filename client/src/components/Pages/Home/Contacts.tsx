import React,{useContext,useEffect} from 'react';
import {Container, Grid} from '@material-ui/core';
import useStyle from "./contactsStyle";
import ContactItem from './ContactItem';
import Spinner from '../../layout/Spinner';
import {ContactContext} from '../../../context/contact/contactContext';

const Contacts:React.FC = () => {
    const classes = useStyle();
    const contactContext = useContext(ContactContext); 
    const {contacts,loading,filtered,getContacts} = contactContext;
    
  
    interface Contact{
        id:any,
        name : string,
        email:string,
        phone:string,
        type:string,
        
    }
    useEffect(()=>{
       getContacts(); 
       //eslint-disable-next-line
    },[])
    if(contacts!==null && contacts.length===0 && !loading){
     return <h3>Please add a contact</h3>
    }
    return (
        <div>
           
           <Container className={classes.container}>
           {contacts!==null && !loading?(
               <Grid container justify="flex-start" spacing={4}> 
               {filtered!==null
               ? filtered.map((contact:Contact)=>{
                             return(
                                 <Grid item xs={12} sm={6}>
                                   <ContactItem contact ={contact}/>
                                 </Grid>
                               
                              
                             )  
               })
               :contacts.map((contact:Contact)=>{
                    return(
                     
                     <Grid item xs={12} sm={6}>
                       <ContactItem contact ={contact}/>
                     </Grid>
        
                    )
                })
             }
            
             </Grid>
           ):<Spinner/>}
                
         
           </Container>
        </div>
    )
}

export default Contacts;
