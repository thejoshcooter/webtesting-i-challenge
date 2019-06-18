// import enhancer functions
const enhancer = require('./enhancer.js');

// Item Objects
// Items have name, durability and enhancement.
// The item's enhancement it's a number from 0 to 20.
// The item's durability it's a number from 0 to 100.

// enhancer tests
describe('enhancer.js tests', () => {
    // test repair function
    describe('repair()', () => {
        // todos
        // it.todo('restores an item to 100 durability');
        // it.todo('doesn\'t affect an item already at 100 durability');
        // it.todo('should be able to handle an item with negative durability');

        // tests
        it('restores an item to 100 durability', () => {
            expect(enhancer.repair({ durability: 56 })).toEqual({ durability: 100 });
            expect(enhancer.repair({ durability: -20 })).toEqual({ durability: 100 });
        });

        it('does not affect an item already at 100 durability', () => {
            expect(enhancer.repair({ durability: 100 })).toEqual({ durability: 100 });
        });
    });

    // test succeed function
    describe('succeed()', () => {
        // todos
        // it.todo('should increase an item\'s enhancement by 1');
        // it.todo('if item enhancement is level 20, level should not change');
        it.todo('should not change item durability');

        // tests
        it('should increase item enhancement by 1', () => {
            expect(enhancer.succeed({ enhancement: 5 })).toEqual({ enhancement: 6 });
            expect(enhancer.succeed({ enhancement: 10 })).toEqual({ enhancement: 11 });
        });

        it('should not change enhancement level if already level 20', () => {
            expect(enhancer.succeed({ enhancement: 20 })).toEqual({ enhancement: 20 });
        });

        it('should not change item durability', () => {  
            expect(enhancer.succeed({ enhancement: 6, durability: 10 })).toEqual({ enhancement: 7, durability: 10 });
        });
    });

    // test fail function
    describe('fail()', () => {
        // todos
        // it.todo('should decrease item durability by 5 if enhancement is less than 15');
        // it.todo('should decrease item durability by 10 if enhancement is 15 or more');
        it.todo('should decrease item enhancement level by 1 if enhancement level is 15+');

        // tests
        it('should decrease item durability by 5 if enhancement is less than 15', () => {
            expect(enhancer.fail({ enhancement: 14, durability: 50 })).toEqual({ enhancement: 14, durability: 45 });
            expect(enhancer.fail({ enhancement: 10, durability: 80 })).toEqual({ enhancement: 10, durability: 75 });
        });

        it('should decrease item durability by 10 if enhancement is 15 or more', () => {
            expect(enhancer.fail({ enhancement: 15, durability: 100 })).toEqual({ enhancement: 14, durability: 90 });
            expect(enhancer.fail({ enhancement: 17, durability: 70 })).toEqual({ enhancement: 16, durability: 60 });
        });

        it('should decrease item enhancement level by 1 if enhancement level is 15+', () => {
            expect(enhancer.fail({ enhancement: 18, durability: 100 })).toEqual({ enhancement: 17, durability: 90 });
            expect(enhancer.fail({ enhancement: 17, durability: 70 })).toEqual({ enhancement: 16, durability: 60 });
        });
    });
});