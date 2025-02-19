app.controller('UserListController', function ($scope, $location, UserService) {
  $scope.users = UserService.getUsers();

  $scope.moveToDetails = function (id) {
    $location.path(`/user/${id}`);
  }
});
