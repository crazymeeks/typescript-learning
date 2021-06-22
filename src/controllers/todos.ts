
import {Request, Response, NextFunction} from 'express';


export default class TodoController{

    getUser = (req: Request, res: Response, next: NextFunction) => {
        res.status(200).render('web/page', {
            layout: 'layout/web'
        });
    }

    helloTesting() {
        return true;
    }
}