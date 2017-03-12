# AngularOnlineShop
Angular online shop for the course Web Programming in The University of Reykjavík.

##Installed packages
You need to have installed Angular:

npm install angular


###In /server and /client you need to do:

cd client

npm install


cd server

npm install


##Run in client
cd client

ng serve


##Run in server
cd server

node index.js

##The following APIs are available

GET - /api/sellers

  Returns a list of sellers


POST - /api/sellers

  Adds a new seller to the service. Note: the "name" property is required, "category" and "imagePath" should be provided as well, but are optional.


GET - /api/sellers/:id

Returns a single seller by id. Returns 404 if no such seller is found.


GET  - /api/sellers/:id/products

Returns all products from a given seller. Returns 404 if the seller is not found.


POST - /api/sellers/:id/products

Adds a new product to the given seller. Returns 404 if no seller with the given id is found. Note that the name of the product is required.


PUT - /api/sellers/:id

Updates seller information.


PUT - /api/sellers/:id/products/:prodId

Updates product information
