// SPDX-License-Identifier: UNLICENSED


pragma solidity 0.8.9;
// pragma experimental ABIEncoderV2;

contract TraizeContract {

    event addProduct(address recipient, uint productId);

    struct Product {
        string name;
        string location;
        uint id;
        DateData date;
        address owner;
    }

    struct DateData {
        uint day;
        uint month;
        uint year;
        uint hr;
        uint min;
    }

    Product[] private products;

    mapping(uint => address) productToOwner;
    mapping(uint => Product) idToProduct;

    function addUserProduct(string memory name, string memory location, uint id, uint day, uint month, uint year, uint hr, uint min) external {
        DateData memory data = DateData(day, month, year, hr, min);
        address owner = msg.sender;
        Product memory myProductIs = Product(name, location, id, data, owner);
        productToOwner[id] = msg.sender;
        idToProduct[id] = myProductIs;
        products.push(myProductIs);
        emit addProduct(msg.sender, id);
    }

    function getSingleProductDetail(uint id) external view returns(Product memory) {
        return idToProduct[id];
    }

    function getProductOwnerAddress(uint id) external view returns(address) {
        return productToOwner[id];
    }
}



// test data
// oreo, india, 232321, 12, 7, 2001, 3, 45