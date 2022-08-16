const Engineer = require('../lib/Engineer');
const engineer = new Engineer('name', 'id', 'email', 'github');

test('engineer name', () => {
    expect(engineer.name).toBe('name');
})

test('engineer id', () => {
    expect(engineer.id).toBe('id');
})

test('engineer email', () => {
    expect(engineer.email).toBe('email');
})

test('engineer github', () => {
    expect(engineer.github).toBe('github');
})

test('getGithub() returns github', () => {
    expect(engineer.getGithub()).toBe('github');
})

test('getRole() returns Engineer', () => {
    expect(engineer.getRole()).toBe('Engineer');
})