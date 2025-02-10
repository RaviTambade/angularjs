//Writing like a class (Java/CSharp)

Transflower.Ecommerce.Product = function () {
   
    create = function (pid, title, description, unitprice, stock) {
        console.log('Product Created');      
    },

    readAll = function () {
        console.log('Reading Products');      
    },

    update = function (pid, title, description, unitprice, stock) {
        console.log('Updating Products');
    },

    remove = function (pid) {
        console.log('Removing Products');
    }

    sucess = function () {
        readAll();
    },

    error = function (sender, args) {
        alert(args.get.message());
    }
    //public interface

    return {
        createProduct: create,
        updateProduct: update,
        deleteProduct: remove,
        showAllProducts: readAll
    }
}();