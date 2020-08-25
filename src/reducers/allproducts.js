import { act } from "@testing-library/react";

const allProductsReducer = function listAllProducts(state = null, action) {
    var allproducts = [
        {
            "productCode": "REAL45",
            "productName": "Realme Mobile XT",
            "vendor": "Vision star",
            "category": "Mobile",
            "Manufacturer": "REALME",
            "quantity": "25",
            "price": "10999",
            "id": 2
          },
          {
            "productCode": "CAN365",
            "productName": "Canon Waterproof Camera",
            "vendor": "Supercomet",
            "category": "Camera",
            "Manufacturer": "CANON",
            "quantity": "20",
            "price": "500",
            "id": 3
          },
          {
            "productCode": "DELP65",
            "productName": "Dell Touchscreen Laptop",
            "category": "Laptop",
            "vendor": "Kanha Trading",
            "Manufacturer": "DELL",
            "quantity": "20",
            "price": "30000",
            "id": 4
          },
          {
            "productCode": "BOAT321",
            "productName": "Boat Basshead Headphones",
            "category": "Headphones",
            "vendor": "vision star",
            "Manufacturer": "BOAT",
            "quantity": "43",
            "price": "500",
            "id": 5
          },
          {
            "productCode": "JBL534",
            "productName": "JBL Bluetooth Speaker",
            "vendor": "Corseca",
            "category": "Speaker",
            "Manufacturer": "JBL",
            "quantity": "28",
            "price": "2159",
            "id": 6
          },
          {
            "productCode": "APP841",
            "productName": "Apple Digital Watch",
            "vendor": "Sargam  pvt Ltd",
            "category": "Accesories",
            "Manufacturer": "APPLE",
            "quantity": "24",
            "price": "1549",
            "id": 7
          },
          {
            "productCode": "SAM456",
            "productName": "Samsung Galaxy M40",
            "vendor": "vision star",
            "category": "Mobile",
            "Manufacturer": "SAMSUNG",
            "quantity": "20",
            "price": "14521",
            "id": 8
          },
          {
            "productCode": "MIWL45",
            "productName": "MI True Wireless Earphones",
            "vendor": "vision star",
            "category": "Headphones",
            "Manufacturer": "MI",
            "quantity": "30",
            "price": "639",
            "id": 9
          },
          {
            "productCode": "LEN025",
            "productName": "HP Elitebook Folio Laptop",
            "vendor": "Sargam pvt ltd",
            "category": "Laptop",
            "Manufacturer": "HP",
            "quantity": "20",
            "price": "23199",
            "id": 10
          }
    ]

    switch (action.type) {
        case "ADD_PRODUCT":
            console.log('add name, category and other details for new product....')
            console.log(state);
            console.log(action)
            console.log(action.payload);
            let length = state.length
            let newProduct = [{
                "id": length + 1,
                "productCode":action.payload.productCode,
                "productName": action.payload.productName,
                "vendor":action.payload.vendor,
                "category": action.payload.category,
                "Manufacturer":action.payload.Manufacturer,
                "price": action.payload.price,
                "quantity": action.payload.quantity
               // inStock: action.payload.inStock
            }, ...state]
            return newProduct

        case "DELETE_PRODUCT":
            console.log(action)
            console.log(action.payload);
            console.log(state)
            let delproducts = state.filter(p => p.id != action.payload);
            allproducts = delproducts;
            console.log(allproducts);
            return allproducts;

        case "EDIT_PRODUCT":
            console.log(action.payload);
            console.log(state)
            let editproducts = state.map(p => {
                if (p.id == action.payload.id) {
                    console.log(p.id)
                    p = action.payload
                }

                return p;
            });

            //console.log("edit prod "+editProd)
            allproducts = editproducts;
            console.log(allproducts);
            return editproducts;
        default:
            break;
    }

    return allproducts
}

export default allProductsReducer;