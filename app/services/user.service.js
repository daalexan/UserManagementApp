app.service('UserService', function () {
  let users = [
    { id: 1, user_name: 'admin123', first_name: 'Admin', last_name: 'User', email: 'admin@example.com', password: 'Admin1234', user_type: 'Admin', repeat_password: 'Admin1234' },
    { id: 2, user_name: 'driver1', first_name: 'Simple', last_name: 'User', email: 'simple@example.com', password: 'Driver123', user_type: 'Driver', repeat_password: 'Driver123' }
  ];

  this.getUsers = function () {
    return users;
  };

  this.getUser = function (id) {
    return users.find(user => user.id == id);
  };

  this.addUser = function (user) {
    user.id = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
    users.push(user);
  };

  this.updateUser = function (updatedUser) {
    let index = users.findIndex(user => user.id == updatedUser.id);
    if (index !== -1) {
      users[index] = updatedUser;
    }
  };

  this.deleteUser = function (id) {
    users = users.filter(user => user.id != id);
  };
});
