import { useContext } from 'react';
import { AlertContext } from '../../context/alert/AlertContext';
import { Alert, Color } from '@material-ui/lab';
import {useStyles} from './alertstyles';
const Alerts = () => {
    const classes = useStyles();
    interface IAlert{
        type:Color;
        msg:string;
        id:string;
    }

    const alertContext = useContext(AlertContext);
    const{alerts} = alertContext;

    return (
        alerts.length>0 && alerts.map((alert : IAlert) =>
            <div key={alert.id} style={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                <Alert className={classes.alert} severity={alert.type}>{alert.msg}</Alert>
            </div>
        )
    );
}

export default Alerts;
