window.ProductDeleteController = function (
  $scope,
  $http,
  $routeParams,
  $location
) {
  let id = $routeParams.id;
  if (id != undefined) {
    $http.delete(productAPI + "/" + id).then(function () {
      alert("Remove sản phẩm thành công!");
      $location.path("/admin/products");
    });
  }
};
