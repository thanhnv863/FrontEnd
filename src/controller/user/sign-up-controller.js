window.SignUpController = function ($scope, $http, $location) {
  $scope.signUp = function (event) {
    event.preventDefault();
    let firstName = $scope.user.firstName;
    let lastName = $scope.user.lastName;
    let email = $scope.user.email;
    let password = $scope.user.password;
    if (angular.isDefined(firstName)) {
      if (firstName.trim().length == 0) {
        alert("Không được để trống first name");
        return;
      }
    } else {
      alert("Không được để trống first name");
      return;
    }
    if (angular.isDefined(lastName)) {
      if (lastName.trim().length == 0) {
        alert("Không được để trống last name");
        return;
      }
    } else {
      alert("Không được để trống last name");
      return;
    }
    if (angular.isDefined(email)) {
      if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        alert("Email sai định dạng");
        return;
      }
    } else {
      alert("Please enter a email");
      return;
    }
    if (angular.isDefined(password)) {
      if (password.length == 0) {
        alert("Không được để trống password");
        return;
      }
    } else {
      alert("Không được để trống password");
      return;
    }
    $http.post(userAPI, $scope.user).then(function (response) {
      alert("Đăng kí tài khoản thành công!");
      $location.path("/login");
    });
  };
};
