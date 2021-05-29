import { makeStyles } from '@material-ui/core/styles';

const userStyle = makeStyles(()=>({
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