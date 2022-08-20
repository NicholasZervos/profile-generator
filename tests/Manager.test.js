const Employee = require('../libs/Employee');
const Manager = require('../libs/Manager');


const testManager = new Manager('Joe', '4', 'joe@gmail.com', '#112a');

test('can get name using the getName function', function(){
    expect(testManager.getName()).toBe('Joe')
});

test('can get office number using the getOfficeNumber function', function(){
    expect(testManager.getOfficeNumber()).toBe('#112a')
});
