import CommonRouteConfig from './common.routes.config';
import {Application as ExpressApp} from 'express';
import UserController from '../controllers/user-controller';

export default class UserRoute extends CommonRouteConfig<ExpressApp> {


    constructor(app: ExpressApp){
        super(app, 'UserRoute');
    }
    configureRoutes(): ExpressApp
    {

        const userCtrl = new UserController();

        this.app.route('/users')
                .get(userCtrl.getUser);
        this.app.route('/users/post-create').post(userCtrl.postCreate);
        return this.app;
    }
}