
import {Request, Response, NextFunction} from 'express';


export default class UserController{

    getUser = (req: Request, res: Response, next: NextFunction) => {
        res.status(200).render('web/page', {
            layout: 'layout/web'
        });
    }

    postCreate = (req: Request, res: Response, next: NextFunction): Response => {
        return res.status(200).json({message: 'success'});
    }
}