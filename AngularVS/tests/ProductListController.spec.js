describe('Controller: ProductListController', function() {

    var ProductListController, $httpBackend, $controller;

    beforeEach(module('productManagement'));

    beforeEach(inject(function(_$controller_, _$httpBackend_) {
        ProductListController = $controller('ProductListController', {});
        $httpBackend = _$httpBackend_;
        $controller = _$controller_;
    }));



    /* 
        This method will test what is returned in the real controller
        .query call to our backend

        For this method to work uncomment the line in productResourceMock.js
        for $httpBackend.expectGET(.....)
    */
    it ('products should really be defined', function() {
        $httpBackend.flush();
        console.log(ProductListController.products);
        expect(ProductListController.products[0].productId).toBe(1);
    });




    /*
        This method simulates our backend and mocks data for our
        controller to recieve

        For this method to work comment out the line in productResourceMock.js
        for $httpBackend.expectGET(......)
    */
    it ('products ', function() {
        $httpBackend.expect('GET', '/api/products').respond([{'productId': 13}]);
        $httpBackend.flush();
        console.log('data = ' + JSON.stringify(vm.products));
        expect(vm.products[0].productId).toBe(13);
    });
});
