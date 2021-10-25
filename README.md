# API Spec

## Create Product

Request :
- Method : POST
- Endpoint : `/api/v1/products`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "name" : "string",
    "type" : "string",
    "stock" : "integer"
}
```

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : {
         "uuid" : "string, unique",
         "name": "string",
         "type": "string"
         "stock" : "integer",
     }
}
```

## Get Product

Request :
- Method : GET
- Endpoint : `/api/products/{id_product}`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : { 
         "uuid" : "string, unique",
         "name": "string",
         "type": "string"
         "stock" : "integer",
    }
}
```

## Update Product

Request :
- Method : PUT
- Endpoint : `/api/products/{id_product}`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "name" : "string",
    "type" : "string",
    "stock" : "integer"
}
```

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : {
         "uuid" : "string, unique",
         "name" : "string",
         "type" : "string",
         "stock" : "integer"
     }
}
```

## List Product 

Request :
- Method : GET
- Endpoint : `/api/v1/products`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : [
        {
             "uuid" : "string, unique",
             "name": "string",
             "type": "string",
             "stock" : "integer"
        },
        {
             "uuid" : "string, unique",
             "name": "string",
             "type": "string",
             "stock" : "integer"
         }
    ]
}
```

## Delete Product

Request :
- Method : DELETE
- Endpoint : `/api/v1/products/{id_product}`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : {
        "message" : "string"
    }
}
```

## Create Product Transaction

Request :
- Method : POST
- Endpoint : `/api/v1/product-transactions`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "date" : "string",
    "productId" : "string",
    "amountSold" : "integer"
}
```

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : {
         "uuid" : "string, unique",
         "date" : "string",
         "amountSold" : "integer",
         "previousStockQuantity" : "integer",
     }
}
```

## Get Product Transaction

Request :
- Method : GET
- Endpoint : `/api/v1/product-transactions/{product-transaction-id}`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : {
         "uuid" : "string, unique",
         "date" : "string",
         "amountSold" : "integer",
         "previousStockQuantity" : "integer",
         "product" : {
                "uuid": "string, unique",
                "name": "string",
                "type": "string",
                "stock": "integer"
         }
     }
}
```

## Update Product Transaction

Request :
- Method : PUT
- Endpoint : `/api/v1/product-transactions/{product-transaction-id}`
- Header :
    - Content-Type: application/json
    - Accept: application/json

- Body :

```json 
{
    "date" : "string",
    "amountSold" : "integer",
    "productId": "string, unique"
    "previousStockQuantity" : "integer"
}
```

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : {
         "uuid" : "string, unique",
         "date" : "string",
         "amountSold" : "integer",
         "previousStockQuantity" : "integer",
     }
}
```

## Delete Product Transaction

Request :
- Method : DELETE
- Endpoint : `/api/v1/product-transactions/{product-transaction-id}`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : {
         "message" : "string"
     }
}
```

## List Product Transacaction

Request :
- Method : GET
- Endpoint : `/api/v1/product-transactions`
- Header :
    - Accept: application/json
    
Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : [
        {
             "uuid" : "string, unique",
             "date" : "string",
             "amountSold" : "integer",
             "previousStockQuantity" : "integer",
             "product" : {
                   "uuid": "string, unique",
                   "name": "string",
                   "type": "string",
                   "stock": "integer"
             }
        },
        {
             "uuid" : "string, unique",
             "date" : "string",
             "amountSold" : "integer",
             "previousStockQuantity" : "integer",
             "product" : {
                   "uuid": "string, unique",
                   "name": "string",
                   "type": "string",
                   "stock": "integer"
             }
         }
    ]
}
```

## List Product Transacaction with Date Range and Ordered

Request :
- Method : GET
- Endpoint : `/api/v1/product-transactions`
- Header :
    - Accept: application/json

- Query Param :
    - start : string,
    - end : string
    - sort : string
    
Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : [
        {
             "type": "string"
             "totalSold" : "integer",
        },
        {
             "type": "string"
             "totalSold" : "integer",
         }
    ]
}
```

