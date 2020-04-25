import {register, sign_in} from '../controller/userController'

/**
 * routes de l'api pour travailler sur les users
 * @param app : le server qui va utiliser les routes
 */
export const userRoutes = (app) => {

    //quand on a une route /user/register avec la méthode post, on appel la fonction register de userController
    app.route('/users/register')
        .post(register)

    //quand on a une route /user/signIn avec la méthode post, on appel la fonction sign_in de userController
    app.route('/users/signIn')
        .post(sign_in)
}
