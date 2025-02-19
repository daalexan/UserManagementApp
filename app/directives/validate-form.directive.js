app.directive("validateField", function () {
  return {
    restrict: "A",
    require: "ngModel",
    link: function (scope, element, attrs, ngModel) {
      scope.$watch(attrs.ngModel, function () {
      const fieldName = attrs.name;
      scope.errors[fieldName] = "";

      if (attrs.required && !ngModel.$modelValue) {
        scope.errors[fieldName] = `${fieldName.replace('_', ' ')} is required.`;
      }

      if (fieldName === "email" && ngModel.$modelValue) {
        let emailPattern = /\S+@\S+\.\S+/;
    
        if (!emailPattern.test(ngModel.$modelValue)) {
          scope.errors[fieldName] = "Invalid email format.";
        }
      }

      if (fieldName === "password" && ngModel.$modelValue) {
        let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!passwordPattern.test(ngModel.$modelValue)) {
          scope.errors[fieldName] = "Password must be at least 8 characters long and contain at least one letter and one number.";
        }
      }

      if (fieldName === "repeat_password" && scope.user.password !== scope.user.repeat_password) {
        scope.errors[fieldName] = "Passwords do not match.";
      }
    });
  }};
});
