const Employee = require('../libs/Employee')
const testEmployee = new Employee('Joe', '4', 'joe@gmail.com')
test('can get name using the getName function', function(){
    expect(testEmployee.getName()).toBe('Joe')
})