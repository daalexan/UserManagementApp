app.service('NotificationService', function ($rootScope, $timeout) {
  $rootScope.notification = {
    message: "",
    type: "",
    visible: false
  };

  this.show = function (message, type = "success", duration = 3000) {
    $rootScope.notification.message = message;
    $rootScope.notification.type = type;
    $rootScope.notification.visible = true;

    $timeout(function () {
      $rootScope.notification.visible = false;
    }, duration);
  };
});