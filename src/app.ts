import * as express from 'express';
import {Application as ExpressApp} from 'express';
import {Request, Response, NextFunction } from 'express';
import CommonRoutesConfig from './routes/common.routes.config';
import UserRoute from './routes/user.routes.config';
import debug from 'debug';
import * as expressLayouts from 'express-ejs-layouts';


const app: ExpressApp = express();
const routes: Array<CommonRoutesConfig<ExpressApp>> = [];
const debugLog: debug.IDebugger = debug('app');

const {
    PORT = 3000
} = process.env;


app.set('view engine', 'ejs');
app.set('views', './src/views');

// using ejs-express module for view partials
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);
app.use(expressLayouts);

routes.push(new UserRoute(app));

// Error handling middleware function
// automatically fired by express if
// there are error above
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
});

app.listen(PORT, () => {
    routes.forEach((route: CommonRoutesConfig<ExpressApp>) => {
        route.configureRoutes();
        debugLog(`Routes configured for ${route.getName()}`);
    });
    console.log(routes);
    console.log('server started at http://localhost:'+PORT);
});