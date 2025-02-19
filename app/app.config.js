app.config(
  [
    '$routeProvider',
    '$locationProvider',
    function (
      $routeProvider,
      $locationProvider
    ) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/users', {
          templateUrl: 'views/user-list.html',
          controller: 'UserListController'
      })
      .when('/user/:id', {
          templateUrl: 'views/user-view.html',
          controller: 'UserViewController'
      })
      .when('/', {
        redirectTo: '/users'
      })
      .when('/not-found', {
        templateUrl: 'views/not-found.html'
      })
      .otherwise({ redirectTo: '/not-found' });
    }
  ]
);
