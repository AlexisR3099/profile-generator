const Employee = require('../lib/Employee');
const employee = new Employee('name', 'id', 'email');

test('employee name', () => {
    expect(employee.name).toBe('name');
})

test('employee id', () => {
    expect(employee.id).toBe('id')
})

test('employee email', () => {
    expect(employee.email).toBe('email')
})

test('getName() returns name', () => {
    expect(employee.getName()).toBe('name')
})

test('getId() returns id', () => {
    expect(employee.getId()).toBe('id')
})

test('getEmail() returns email', () => {
    expect(employee.getEmail()).toBe('email')
})

test('getRole() returns Employee', () => {
    expect(employee.getRole()).toBe('Employee')
})