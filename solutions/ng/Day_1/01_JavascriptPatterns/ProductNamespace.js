//Writing like a class (Java/CSharp)


Transflower.Ecommerce.Product = function () {
    
    create = function (pid, title, description, unitprice, stock) {
        alert('Product Created');
        
    },

    readAll = function () {
        alert('Reading Products');
      
    },

    update = function (pid, title, description, unitprice, stock) {
        alert('Updating Products');
    },

    remove = function (pid) {
        alert('Removing Products');
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