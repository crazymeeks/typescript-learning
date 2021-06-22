import CommonRouteConfig from './common.routes.config';
import * as express from 'express';
import TodoController from '../controllers/todos';

export default class UserRoute extends CommonRouteConfig {


    constructor(app: express.Application){
        super(app, 'UserRoute');
    }
    configureRoutes(): express.Application
    {

        const todoController = new TodoController();

        this.app.route('/users')
                .get(todoController.getUser);
        return this.app;
    }
}