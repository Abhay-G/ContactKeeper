import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    navbar: {
        backgroundColor: '#1a1a2e',
    },
    fab:{
        width:'35px',
        height:'15px',
    },
    logo:{
        color:"white",
        textDecoration: "none",
    },
    links:{
      color:"white",
      textDecoration: "none",

    }
}));
export default useStyles;
