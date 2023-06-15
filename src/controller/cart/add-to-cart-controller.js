window.cartProduct = function ($scope, $rootScope, $http, $routeParams) {
  $rootScope.listProductCart = [];
  $rootScope.listProducts = [];
  $rootScope.indexCart = 0;
  $rootScope.form_product = {
    id: "",
    name: "",
    price: 0,
    soLuong: 1,
    description: "",
    image: "",
    category: "",
  };
  let id = $routeParams.id;

  //
  $http.get(`${productAPI}/${id}`).then(
    function (response) {
      $http
        .post(cartAPI, {
          id: response.data.id,
          name: response.data.name,
          price: response.data.price,
          soLuong: 1,
          description: response.data.description,
          image: response.data.image,
          category: response.data.category,
        })
        .then(
          function (response) {
            if (response.statusText === "OK") {
              $rootScope.listProductCart.push(response.data);
            }
          },
          function (e) {
            console.log(e);
          }
        );
    },
    function (e) {
      console.log(e);
    }
  );
  // get
  $http.get(cartAPI).then(
    function (response) {
      if (response.statusText === "OK") {
        $rootScope.listProductCart = response.data;
      }
    },
    function (e) {
      console.log(e);
    }
  );
  // delete cart
  $scope.deleteCart = function (event, index) {
    event.preventDefault();
    $http
      .delete(`${cartAPI}/${$scope.listProductCart[index].id}`)
      .then(function (response) {
        if (response.statusText === "OK") {
          $rootScope.listProductCart.splice(index, 1);
          alert("Xóa product thành công");
        }
      });
  };
  // Tổng
  $scope.tongGia = function () {
    var tongGia = 0;
    for (var i = 0; i < $scope.listProductCart.length; i++) {
      $rootScope.indexItemCart = $scope.listProductCart[i].soLuong;
      if ($scope.listProductCart[i].chon) {
        tongGia +=
          $scope.listProductCart[i].price * $scope.listProductCart[i].soLuong;
      }
    }
    return tongGia;
  };
};
