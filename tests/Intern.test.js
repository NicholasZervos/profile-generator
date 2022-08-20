const Employee = require('../libs/Employee');
const Intern = require('../libs/Intern');


const testIntern = new Intern('Joe', '4', 'joe@gmail.com', 'UNC');

test('can get name using the getName function', function(){
    expect(testIntern.getName()).toBe('Joe')
});

test('can get school of intern by using the getSchool function', function(){
    expect(testIntern.getSchool()).toBe('UNC')
});