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
        it.todo('restores an item to 100 durability');
        it.todo('doesn\'t affect an item already at 100 durability');
        it.todo('should be able to handle an item with negative durability');
    });

    // test succeed function
    describe('succeed()', () => {
        // todos
        it.todo('should increase an item\'s enhancement by 1');
        it.todo('if item enhancement is level 20, level should not change');
        it.todo('should not change item durability');
    });

    // test fail function
    describe('fail()', () => {
        // todos
        it.todo('should decrease item durability by 5 if enhancement is less than 15');
        it.todo('should decrease item durability by 10 if enhancement is 15 or more');
        it.todo('should decrease item enhancement level by 1 if enhancement level is 15+');
    });
});