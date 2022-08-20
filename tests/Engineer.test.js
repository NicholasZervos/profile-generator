
const Engineer = require('../lib/Engineer');
const Employee = require('../libs/Employee');


const testEngineer = new Engineer('Joe', '4', 'joe@gmail.com', 'JoesGit');

test('can get name using the getName function', function(){
    expect(testEngineer.getName()).toBe('Joe')
});

test('can get Github username using the getGithub function', function(){
    expect(testEngineer.getGithub()).toBe('JoesGit')
});
