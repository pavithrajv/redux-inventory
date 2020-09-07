const allProductsReducer = function listAllProducts(state = null, action) {
  var allproducts = [
    {
      "productCode": "REAL45",
      "productName": "Realme Mobile XT",
      "productImage": "https://img.mobygeek.com/crop/1200x628/2019/05/10/img-0223-f178.jpg",
      "vendor": "vision star",
      "category": "Mobile",
      "Manufacturer": "Manasa pvt ltd",
      "quantity": "25",
      "price": "10999",
      "color": "black",
      "id": 1
    },
    {
      "productCode": "CAN365",
      "productName": "Canon Waterproof Camera",
      "productImage": "https://images-na.ssl-images-amazon.com/images/I/41I39mJtjAL.jpg",
      "vendor": "Supercomet",
      "category": "Camera",
      "Manufacturer": "Sagar traders",
      "quantity": "20",
      "price": "500",
      "color": "black",
      "id": 2
    },
    {
      "productCode": "DELP65",
      "productName": "Dell Touchscreen Laptop",
      "productImage": "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/inspiron_notebooks/15_3582/pdp/notebook-inspiron-15-3582-in-pdp-gallery-504x350.jpg?fmt=jpg&wid=570&hei=400",
      "category": "Laptop",
      "vendor": "Kanha trading",
      "Manufacturer": "Akshay electronics",
      "quantity": "20",
      "price": "30000",
      "color": "black",
      "id": 3
    },
    {
      "productCode": "BOAT321",
      "productName": "Boat Basshead Headphones",
      "productImage": "https://www.reliancedigital.in/medias/Reconnect-RAWHB1001-Headphone-Headsets-491336259-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MDE3N3xpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDg5LzkwNDY5Mzg0NTE5OTguanBnfGJjNmIxODNkMmQ4Y2RlNDc1ZjllYTY1OWE5NTViMjhkNGRkMDVmZTVmN2I3Zjg5MzFjOWUyNWVlNjA0NzQ5OWE",
      "category": "Headphones",
      "vendor": "Supercomet",
      "Manufacturer": "Vimal Traders",
      "quantity": "43",
      "price": "500",
      "color": "black",
      "id": 4
    },
    {
      "productCode": "SAM456",
      "productName": "Samsung Galaxy M40",
      "productImage": "https://img.mobygeek.com/crop/1200x628/2019/05/10/img-0223-f178.jpg",
      "vendor": "pranay ltd",
      "category": "Mobile",
      "Manufacturer": "Manasa pvt ltd",
      "quantity": "20",
      "price": "14521",
      "color": "black",
      "id": 5
    },
    {
      "productCode": "MIWL45",
      "productName": "MI True Wireless Headphones",
      "productImage": "https://www.reliancedigital.in/medias/Reconnect-RAWHB1001-Headphone-Headsets-491336259-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MDE3N3xpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDg5LzkwNDY5Mzg0NTE5OTguanBnfGJjNmIxODNkMmQ4Y2RlNDc1ZjllYTY1OWE5NTViMjhkNGRkMDVmZTVmN2I3Zjg5MzFjOWUyNWVlNjA0NzQ5OWE",
      "vendor": "vision star",
      "category": "Headphones",
      "Manufacturer": "Akshay Traders",
      "quantity": "30",
      "price": "639",
      "color": "black",
      "id": 6
    },
    {
      "productCode": "LEN025",
      "productName": "HP Elitebook Folio Laptop",
      "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ56w-CSNpnFZocm1sFyZ8hgVVsWsDpiewSXmPGVkBPvrWQVmq-d6HbJrsDpjdIyuQLJy5E7v8&usqp=CAc",
      "vendor": "Sargam pvt ltd",
      "category": "Laptop",
      "Manufacturer": "Sagar traders",
      "quantity": "20",
      "price": "23199",
      "color": "black",
      "id": 7
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
        "productImage": action.payload.productImage,
        "productName": action.payload.productName,
        "vendor": action.payload.vendor,
        "category": action.payload.category,
        "Manufacturer": action.payload.Manufacturer,
        "price": action.payload.price,
        "quantity": action.payload.quantity,
        "color": action.payload.color
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
      let products = allproducts.filter((p) => {
        return (p.productName.toLowerCase().match(action.payload.toLowerCase().trim()) ||
         p.Manufacturer.toLowerCase().match(action.payload.toLowerCase().trim())||
         p.vendor.toLowerCase().match(action.payload.toLowerCase().trim()))
      })
      return products
    case "SEARCH_CATEGORY":
      
      let categories = allproducts.filter((p) => {
        return (p.category.toLowerCase().match(action.payload.toLowerCase().trim()))
      })
      return categories
   
    default:
      break;
  }

  return allproducts
}

export default allProductsReducer;



