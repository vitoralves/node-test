const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    it('should add two number', () => {
        var res = utils.add(33, 11);
        expect(res).toBe(44).toBeA('number');
    });

    it('should square a number', () => {
        var res = utils.square(2);
        expect(res).toBe(4).toBeA('number');
    });

    it('should set first and last name', () => {
        let user = {
            age: 24,
            location: 'Franca'
        }
        var res = utils.setName(user, 'Vitor Diogo');
        expect(res).toBeA('object').toInclude({ firstName: 'Vitor', lastName: 'Diogo' });
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 5, (sum) => {
            expect(sum).toBe(9).toBeA('number');
            done();
        });
    });

    it('should async square two numbers', (done) => {
        utils.asyncSquare(3, (res) => {
            expect(res).toBe(9).toBeA('number');
            done();
        });
    });
});

describe('Other examples', () => {
    it('should expect some values', () => {
        // expect(12).toNotBe(11);
        // expect({ name: 'Vitor' }).toEqual({ name: 'Vitor' });
        // expect([2,3,4]).toInclude(2);
        expect({
            name: 'Vitor',
            age: 24,
            location: 'Franca'
        }).toInclude({
            age: 24
        })
    });
})
