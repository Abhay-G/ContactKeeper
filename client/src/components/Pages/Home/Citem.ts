import { makeStyles } from '@material-ui/core/styles';

const userStyle = makeStyles(()=>({
    card:{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/dotnoise-light-grey.png')",
        //boxShadow: "0 0 5px 4px rgb(63,81,181,0.15)"
        
    },
   icontext:{
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
        marginBottom:"10px",
   },
   avatardiv:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:"10px",
   },
   icon:{
       marginRight:"20px",
   }
}));
export default userStyle;