import {connectError, connectPending, connectSuccess} from "./index";
import * as jwt_decode from 'jwt-decode'


export const connectAction = (user) => {
    return (dispatch) => {
        dispatch(connectPending());
        fetch('http://localhost:8080/users/signIn', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                const userDecode = jwt_decode(res.token)
                userDecode.token = res.token
                console.log(userDecode)
                dispatch(connectSuccess(userDecode));
                return res;
            })
            .catch(error => {
                dispatch(connectError(error));
            })
    }
}

