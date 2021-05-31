import { useContext } from 'react';
import { AlertContext } from '../../context/alert/AlertContext';
import { Alert, Color } from '@material-ui/lab';
const Alerts = () => {

    interface IAlert{
        type:Color;
        msg:string;
        id:string;
    }

    const alertContext = useContext(AlertContext);
    const{alerts} = alertContext;

    return (
        alerts.length>0 && alerts.map((alert : IAlert) =>
            <div>
                <Alert severity={alert.type}>{alert.msg}</Alert>
            </div>
        )
    );
}

export default Alerts;
