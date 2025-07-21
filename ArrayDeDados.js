const users = [
  { id: 1, name: 'Ana', email: 'ana@example.com', isActive: true },
  { id: 2, name: 'Bruno', email: 'bruno@example.com', isActive: false },
  { id: 3, name: 'Carla', email: 'carla@example.com', isActive: true },
  { id: 4, name: 'Daniel', email: 'daniel@example.com', isActive: false },
  { id: 5, name: 'Elena', email: 'elena@example.com', isActive: true }
];

const activeUserEmails = users
  .filter(user => user.isActive) 
  .map(user => user.email);

const inativeUserEmails = users
  .filter(user => !user.isActive) 
  .map(user => user.email);

console.log(activeUserEmails);
console.log(inativeUserEmails);

