app.controller('UserViewController', function ($scope, $routeParams, $location, UserService, NotificationService) {
  const userId = $routeParams.id;

  $scope.isFormChecked = false;
  $scope.isNewUser = userId === 'new';
  $scope.user = userId !== 'new' ? angular.copy(UserService.getUser(userId)) : {};
  $scope.errors = {};

  $scope.createUser = function () {
    if (Object.values($scope.errors).some(error => error)) {
      NotificationService.show("Something went wrong!", "error");
      $scope.isFormChecked = true;
      return;
    } 

    UserService.addUser($scope.user);
    NotificationService.show("User created successfully!", "success");
    $location.path('/users');
  }

  $scope.saveUser = function () {
    if (Object.values($scope.errors).some(error => error)) {
      NotificationService.show("Something went wrong!", "error");
      $scope.isFormChecked = true;
      return;
    }

    UserService.updateUser($scope.user);
    NotificationService.show("User saved successfully!", "success");
    $location.path('/users');
  };

  $scope.deleteUser = function (id) {
    if (confirm("Are you sure you want to delete this user?")) {
      UserService.deleteUser(id);
      $scope.users = UserService.getUsers();
      NotificationService.show("User deleted successfully!", "success");
      $location.path('/users');
    }
  };

  $scope.closeModal = function () {
    $location.path('/users');
  };
});
