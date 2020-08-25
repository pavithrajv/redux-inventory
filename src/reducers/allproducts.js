import { act } from "@testing-library/react";

const allProductsReducer = function listAllProducts(state = null, action) {
  var allproducts = [
    {
      "productCode": "REAL45",
      "productName": "Realme Mobile XT",
      "productImage":"https://img.mobygeek.com/crop/1200x628/2019/05/10/img-0223-f178.jpg",
      "vendor": "Vision star",
      "category": "Mobile",
      "Manufacturer": "REALME",
      "quantity": "25",
      "price": "10999",
      "color":"black",
      "id": 1
    },
    {
      "productCode": "CAN365",
      "productName": "Canon Waterproof Camera",
      "productImage":"https://images-na.ssl-images-amazon.com/images/I/41I39mJtjAL.jpg",
      "vendor": "Supercomet",
      "category": "Camera",
      "Manufacturer": "CANON",
      "quantity": "20",
      "price": "500",
      "color":"black",
      "id": 2
    },
    {
      "productCode": "DELP65",
      "productName": "Dell Touchscreen Laptop",
      "productImage":"https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/inspiron_notebooks/15_3582/pdp/notebook-inspiron-15-3582-in-pdp-gallery-504x350.jpg?fmt=jpg&wid=570&hei=400",
      "category": "Laptop",
      "vendor": "Kanha Trading",
      "Manufacturer": "DELL",
      "quantity": "20",
      "price": "30000",
      "color":"black",
      "id": 3
    },
    {
      "productCode": "BOAT321",
      "productName": "Boat Basshead Headphones",
      "productImage":"https://www.reliancedigital.in/medias/Reconnect-RAWHB1001-Headphone-Headsets-491336259-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MDE3N3xpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDg5LzkwNDY5Mzg0NTE5OTguanBnfGJjNmIxODNkMmQ4Y2RlNDc1ZjllYTY1OWE5NTViMjhkNGRkMDVmZTVmN2I3Zjg5MzFjOWUyNWVlNjA0NzQ5OWE",
      "category": "Headphones",
      "vendor": "vision star",
      "Manufacturer": "BOAT",
      "quantity": "43",
      "price": "500",
      "color":"black",
      "id": 4
    },
    {
      "productCode": "JBL534",
      "productName": "JBL Bluetooth Speaker",
      "productImage":"data:image/jpeg;base64,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",
      "vendor": "Corseca",
      "category": "Speaker",
      "Manufacturer": "JBL",
      "quantity": "28",
      "price": "2159",
      "color":"black",
      "id": 5
    },
    {
      "productCode": "APP841",
      "productName": "Apple Digital Watch",
      "productImage":"data:image/jpeg;base64,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",
      "vendor": "Sargam  pvt Ltd",
      "category": "Accesories",
      "Manufacturer": "APPLE",
      "quantity": "24",
      "price": "1549",
      "color":"black",
      "id": 6
    },
    {
      "productCode": "SAM456",
      "productName": "Samsung Galaxy M40",
      "productImage":"https://img.mobygeek.com/crop/1200x628/2019/05/10/img-0223-f178.jpg",
      "vendor": "vision star",
      "category": "Mobile",
      "Manufacturer": "SAMSUNG",
      "quantity": "20",
      "price": "14521",
      "color":"black",
      "id": 7
    },
    {
      "productCode": "MIWL45",
      "productName": "MI True Wireless Headphones",
      "productImage":"https://www.reliancedigital.in/medias/Reconnect-RAWHB1001-Headphone-Headsets-491336259-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MDE3N3xpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDg5LzkwNDY5Mzg0NTE5OTguanBnfGJjNmIxODNkMmQ4Y2RlNDc1ZjllYTY1OWE5NTViMjhkNGRkMDVmZTVmN2I3Zjg5MzFjOWUyNWVlNjA0NzQ5OWE",
      "vendor": "vision star",
      "category": "Headphones",
      "Manufacturer": "MI",
      "quantity": "30",
      "price": "639",
      "color":"black",
      "id": 8
    },
    {
      "productCode": "LEN025",
      "productName": "HP Elitebook Folio Laptop",
      "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ56w-CSNpnFZocm1sFyZ8hgVVsWsDpiewSXmPGVkBPvrWQVmq-d6HbJrsDpjdIyuQLJy5E7v8&usqp=CAc",
      "vendor": "Sargam pvt ltd",
      "category": "Laptop",
      "Manufacturer": "HP",
      "quantity": "20",
      "price": "23199",
      "color":"black",
      "id": 9
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
        "productCode": action.payload.productCode,
        "productImage":action.payload.productImage,
        "productName": action.payload.productName,
        "vendor": action.payload.vendor,
        "category": action.payload.category,
        "Manufacturer": action.payload.Manufacturer,
        "price": action.payload.price,
        "quantity": action.payload.quantity,
        "color":action.payload.color
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
    case "SEARCH_PRODUCT":
      // if(action.payload.length!==0){
      // return action.payload
      // }
    let  products = allproducts.filter((p) => {
        return (p.productName.toLowerCase().match(action.payload.toLowerCase().trim()) ||
        p.vendor.toLowerCase().match(action.payload.toLowerCase().trim ||
          p.category.toLowerCase().match(action.payload.toLowerCase().trim()) || 
          p.Manufacturer.toLowerCase().match(action.payload.toLowerCase().trim)))
      })
      
      return products
    default:
      break;
  }

  return allproducts
}

export default allProductsReducer;