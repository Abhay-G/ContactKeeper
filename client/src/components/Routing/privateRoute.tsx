import React,{useContext} from 'react'
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../../context/auth/AuthContext';

interface IProps {
    exact:boolean,
    path: string; 
    component: any, 
}
export default function PrivateRoute({component:Component,...rest}:IProps) {
    const authContext = useContext(AuthContext);
    const{isAuthenticated,loading} = authContext;
    return (
        <div>
            <Route {...rest} render={props=> !isAuthenticated && !loading?(
                <Redirect to='/signin'/>
            )
            :
            (<Component{...props}/>)
            }
            />
        </div> 
    )
}

