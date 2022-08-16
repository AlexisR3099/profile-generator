const Manager = require('../lib/Manager');
const manager = new Manager('name', 'id', 'email', 'office number');

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
    expect(manager.officeNumber).toBe('office number');
})

test('getRole() returns Manager', () => {
    expect(manager.getRole()).toBe('Manager');
})