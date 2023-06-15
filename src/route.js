var myApp = angular.module("myApp", ["ngRoute", "ngCookies"]);

myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/home", {
      templateUrl: "pages/customer/home.html",
      controller: ProductController,
    })
    .when("/gioi-thieu", {
      templateUrl: "pages/customer/about.html",
    })
    .when("/cart", {
      templateUrl: "pages/customer/shopping-cart.html",
      controller: cartProduct,
    })

    .when("/products", {
      templateUrl: "pages/customer/product.html",
      controller: ProductController,
    })
    .when("/lien-he", {
      templateUrl: "pages/customer/lien-he.html",
    })
    .when("/products/details/:id", {
      templateUrl: "pages/customer/product-detail.html",
      controller: ProductDetailsController,
    })
    .when("/admin/products", {
      templateUrl: "pages/admin/product.html",
      controller: ProductController,
    })
    .when("/admin/products/add", {
      templateUrl: "pages/admin/form-product.html",
      controller: ProductAddController,
    })
    .when("/admin/products/delete/:id", {
      template: "",
      controller: ProductDeleteController,
    })
    .when("/admin/products/update/:id", {
      templateUrl: "pages/admin/form-product.html",
      controller: ProductUpdateController,
    })
    .when("/admin/products/details/:id", {
      templateUrl: "pages/admin/product-detail.html",
      controller: ProductDetailsController,
    })
    .when("/admin/categories", {
      templateUrl: "pages/admin/category.html",
      controller: CategoryController,
    })
    .when("/admin/categories/add", {
      templateUrl: "pages/admin/form-category.html",
      controller: CategoryAddController,
    })
    .when("/admin/categories/delete/:id", {
      template: "",
      controller: CategoryDeleteController,
    })
    .when("/admin/categories/update/:id", {
      templateUrl: "pages/admin/form-category.html",
      controller: CategoryUpdateController,
    })
    .when("/login", {
      templateUrl: "pages/user/login.html",
      controller: VerifyUserController,
    })
    .when("/logout", {
      template: "",
      controller: LogoutController,
    })
    .when("/sign-up", {
      templateUrl: "pages/user/sign-up.html",
      controller: SignUpController,
    })
    .when("/change-password/:id", {
      templateUrl: "pages/customer/change-password.html",
      controller: ChangePasswordController,
    })
    .when("/admin/change-password/:id", {
      templateUrl: "pages/admin/change-password.html",
      controller: ChangePasswordController,
    })
    .when("/products-da-mua", {
      templateUrl: "pages/customer/productsDaMua.html",
    })
    .when("/fogot-passWord", {
      templateUrl: "pages/user/forgot _password.html",
    })
    .when("/cart/:id", {
      templateUrl: "pages/customer/shopping-cart.html",
      controller: cartProduct,
    })
    .otherwise({
      redirectTo: "/home",
    });
});
