import {expect} from 'chai';
import 'mocha';
import UserRoute from '../../routes/user.routes.config';
import * as express from 'express';
import * as request from 'supertest';

describe('Sample test', () => {
    it('should return success', () => {
        const app = express();
        const uRoute = new UserRoute(app);
        uRoute.configureRoutes();

        request(app).post('/users/post-create').then((response: any) => {
            expect(response.body.message).to.be.equal('success');
        });
    });
});