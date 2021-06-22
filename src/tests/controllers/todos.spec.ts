import TodoController from '../../controllers/todos';
import {expect} from 'chai';
import 'mocha';

describe('Sample test', () => {
    it('should return true', () => {
        
        const controller = new TodoController();
        expect(controller.helloTesting()).to.be.true;
    });    
});