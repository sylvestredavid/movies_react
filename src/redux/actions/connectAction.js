import {connectError, connectPending, connectSuccess} from "./index";
import * as jwt_decode from 'jwt-decode'

//connectAction est un thunk, une fonction qui retourne une fonction. Elle va nous permettre de dispatcher plusieurs actions
// par exemple, ici, on dispatche connectPending, on va envoyer l'user, pour la connexion via l'api avec fetch, puis si la connexion
//a réussis, on dispatche connectSuccess en lui passant l'user (le token retourner par l'api et décodé), sinon on dispatch connectError en lui passant l'erreur
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
                dispatch(connectError(error.message));
            })
    }
}

