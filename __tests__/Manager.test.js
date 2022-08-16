const Manager = require('../lib/Manager');
const manager = new Manager('name', 'id', 'email', 'officenumber');

test('manager name', () => {
    expect(manager.name).toBe('name');
})

test('manager id', () => {
    expect(manager.id).toBe('id');
})

test('manager email', () => {
    expect(manager.email).toBe('email');
})

test('adds office number', () => {
    expect(manager.officeNumber).toBe('officenumber');
})

test('getRole() returns Manager', () => {
    expect(manager.getRole()).toBe('Manager');
})