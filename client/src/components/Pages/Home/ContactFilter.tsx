import React,{useContext, useState,useEffect} from 'react'
import {ContactContext} from '../../../context/contact/contactContext';
import {TextField} from '@material-ui/core';
import {useStyles} from './searchstyles';
export const ContactFilter = () => {
   const classes = useStyles();
   const contactContext = useContext(ContactContext);
   const {filterContacts, clearFilter, filtered} = contactContext;
   const [search, setSearch] = useState("");
   useEffect(()=>{
      if(filtered===null){
        setSearch("");
      }
   },[filtered]);
   const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setSearch(e.target.value);
      if(search!==""){
         filterContacts(e.target.value);
      }else{
        clearFilter();
      }
   }

    return (
        <form  >
           <TextField autoComplete="off" className={classes.search} id="search" label="Search" variant="outlined" onChange={changeHandler} />  
        </form>
    )
}
