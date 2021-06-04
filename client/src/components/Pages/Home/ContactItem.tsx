import React,{useContext} from 'react';
import {ContactContext} from '../../../context/contact/contactContext';
import {Card,Chip,Avatar,CardContent,CardActions,Button, Typography} from '@material-ui/core'
import {Mail} from '@material-ui/icons';
import {Phone,Face} from '@material-ui/icons';
import useStyles from './Citem';

type Contact = {
    id : any,
    name : string;
    email:string;
    phone:string;
    type:string;
}
interface Prop{
   contact:Contact
}

const ContactItem:React.FC<Prop> = ({contact}) => {
    const classes = useStyles();
    const contactContext = useContext(ContactContext);
    const {deleteContact,setCurrent, clearCurrent} = contactContext;
    const onDelete = () =>{
      deleteContact(contact.id);
      clearCurrent(); 
    }
    let personal:boolean = true;
    if(contact.type=== "professional")personal = false;
    return (
        <div>
        <Card elevation={4} className={classes.card} >
            <CardContent>
                <div className={classes.avatardiv}>
                <Avatar>{contact.name.charAt(0).toUpperCase()}</Avatar>
                <Chip
                    size="small"
                    icon={<Face/>}
                    label = {contact.type}
                    color = {personal? "secondary" : "primary"}
                  
                />
                </div>
                   
                    <Typography gutterBottom variant ="h5">
                    {contact.name}
                    </Typography>
                  
                    <div className={classes.icontext}>
                    <Mail className={classes.icon}  color="primary"/>
                    <Typography>
                    {contact.email}
                    </Typography>
                    </div>
                    <div className={classes.icontext}>
                    <Phone className={classes.icon} color="primary"/>
                    <Typography>
                    {contact.phone}
                    </Typography>
                    </div>
                    
                   
            </CardContent>
            <CardActions>
               <Button onClick={()=>setCurrent(contact)} size="small" color="primary">Edit</Button>
               <Button onClick={onDelete} size="small" color="secondary">Delete</Button>
            </CardActions>
        </Card>
        </div>
    ) 
}

export default ContactItem
