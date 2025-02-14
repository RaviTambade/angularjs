

function log(s) {
  $("#hello").append(s + "<br/>");
}

var a = new Object();            // "object"
var b = new Array();             // "object"

var data = { 
  name: "hello",
  "some value": 1
};

log(data["some value"]);

var more = { 
  "moniker": "more data",
  height: 6.0,
  subData: {
    option: true,
    flavor: "vanilla"
  }
};

var array = [ "hello", "goodbye" ];




var products = [
            { ProductId: 1, Title: 'Apple iPhone 6(Gold, 16 GB)', Brand: 'Apple', Description: 'Apple iPhone 4S smartphone with 3.50-inch 640x960 display powered by 800MHz processor alongside 512MB RAM and 8-megapixel rear camera.', ImageUrl: '~/ProductImages/1.jpeg', UnitPrice: 4429.00, CategoryId: 1, Balance: 100 },
            { ProductId: 2, Title: 'Apple iPhone 4S(Black, 8 GB)', Brand: 'Apple', Description: 'Apple iPhone 4S smartphone with 3.50-inch 640x960 display powered by 800MHz processor', ImageUrl:'/Images/4.jpeg', UnitPrice: 1499.00, CategoryId: 1, Balance: 100 },
            { ProductId: 3, Title: 'Apple iPhone 6 Plus(Space Grey, 64 GB)', Brand: 'Apple', Description: 'Apple iPhone 6 Plus smartphone with 5.50-inch 1080x1920 display', ImageUrl:'/Images/3.jpeg', UnitPrice: 6880.00, CategoryId: 1, Balance: 100 },
            { ProductId: 4, Title: 'Apple iPhone 5C(Pink, 8 GB)', Brand: 'Apple', Description: 'Apple iPhone 5c smartphone with 4.00-inch 640x1136 display powered by 1.3GHz procesor', ImageUrl:'/Images/4.jpeg', UnitPrice: 2500.0, CategoryId: 1, Balance: 100 },
            { ProductId: 5, Title: 'Moto E (2nd Gen) 4G(Black, 8 GB)', Brand: 'Motorola', Description: 'Choose to have more with the new Moto E A fast quad-core processor with 3G or 4G LTE', ImageUrl:'/Images/5.jpeg', UnitPrice: 6999.0, CategoryId: 1, Balance: 100 },
            { ProductId: 6, Title: 'Moto G (3rd Generation)(Black, 16 GB)', Brand: 'Motorola', Description: 'Motorola Moto G (Gen 3) smartphone with 5.00-inch 720x1280 display powered by 1.4GHz processor', ImageUrl:'/Images/6.jpeg', UnitPrice: 1299.0, CategoryId: 1, Balance: 100 },
            { ProductId: 7, Title: 'Moto X Play(White, 32 GB)', Brand: 'Motorola', Description: 'Motorola Moto X Play smartphone with 5.50-inch 1080x1920 display powered by 1.7GHz processor', ImageUrl:'/Images/7.jpeg', UnitPrice: 1999.0, CategoryId: 1, Balance: 100 },
            { ProductId: 8, Title: 'Microsoft Lumia 640 XL LTE(Cyan, 8 GB)', Brand: 'Microsoft', Description: 'With a 5.7 inch HD display and a 13 MP camera', ImageUrl:'/Images/8.jpeg', UnitPrice: 1779.0, CategoryId: 1, Balance: 100 }
        ];




log(products.length);

var c = [];

var c1 = c.length;          // Um, yeah

log(c1);


var obj ={a:1000};
c.push(obj);                 // add to end
//var obj = c.pop();          // remove from end
//c.shift();                  // remove from beginning
c.unshift(obj);              // add to beginning
c.push({a:2});

log(c.length);
log(c[1].a)


log(obj.a);


var where = c.indexOf(obj); // positional access
log(where);

where = c.lastIndexOf(obj); 
log(where);

// etc. slice, splice, concat



var f = function (arg1, arg2) {
};
f(1,2);

var o = {
  name: "Shawn",
  sing: function (song) {
    log(song);
  }
};
o.sing("happy birthday");
