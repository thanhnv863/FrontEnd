window.CategoryDeleteController = function (
  $scope,
  $http,
  $routeParams,
  $location
) {
  let id = $routeParams.id;
  if (id != undefined) {
    $http.delete(categoryAPI + "/" + id).then(function () {
      $scope.listCategories.forEach((element, index) => {
        if (element.id == id) {
          $scope.listCategories.splice(index, 1);
          alert("Xóa category thành công");
        }
      });
      $location.path("/admin/categories");
    });
  }
};
