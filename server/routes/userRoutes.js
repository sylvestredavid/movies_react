import {register, sign_in} from '../controller/userController'

export const userRoutes = (app) => {

    app.route('/users/register')
        .post(register)

    app.route('/users/signIn')
        .post(sign_in)
}
