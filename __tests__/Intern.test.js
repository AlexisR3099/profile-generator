const Intern = require('../lib/Intern');
const intern = new Intern('name', 'id', 'email', 'school');

test('intern name', () => {
    expect(intern.name).toBe('name');
})

test('intern id', () => {
    expect(intern.id).toBe('id');
})

test('intern email', () => {
    expect(intern.email).toBe('email');
})

test('intern school', () => {
    expect(intern.school).toBe('school');
})

test('getSchool returns school', () => {
    expect(intern.getSchool()).toBe('school');
})

test('getRole returns Intern', () => {
    expect(intern.getRole()).toBe('Intern');
})