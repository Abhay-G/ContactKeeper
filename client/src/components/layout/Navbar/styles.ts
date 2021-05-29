import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: '#1a1a2e',
    },
    logo:{
        color:"white",
        textDecoration: "none",
    },
    about:{
      position: "absolute",
      right:"20px",
      color:"white",
      textDecoration: "none",

    }
}));
export default useStyles;
