// import * as express from 'express';
import {Application as ExpressApp} from 'express';

export default abstract class CommonRouteConfig<T extends ExpressApp> {
    app: T;
    name: string;

    constructor(app: T, name: string) {
        this.app = app;
        this.name = name;
    }

    getName() {
        return this.name;
    }

    abstract configureRoutes(): T;

}