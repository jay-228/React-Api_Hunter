Project Video Link: https://drive.google.com/file/d/1nrR9R4m3svqAb6fIxg8ANQT6vLl3x40Z/view?usp=sharing

==================== Project Description ====================
![Screenshot 2024-07-05 105214](https://github.com/jay-228/React-Api_Hunter/assets/122542095/13f446ab-4d25-4bec-a02e-e41613761d8f)
![Screenshot 2024-07-05 105226](https://github.com/jay-228/React-Api_Hunter/assets/122542095/13bd332e-d142-4d5a-9ab8-1e43e7134bd8)
![Screenshot 2024-07-05 105238](https://github.com/jay-228/React-Api_Hunter/assets/122542095/bdd49b13-c76e-49e4-88d6-4ef88b4714ed)
![Screenshot 2024-07-05 105258](https://github.com/jay-228/React-Api_Hunter/assets/122542095/0ea41d27-2cc1-40ae-b453-40f72d15b6f0)



## **Description**

- You need to make an application which lists tech products from an api
- You need to be able to click on a brand name, and move to the single product page `/products/<id>`

## **Boilerplate**

- You are given a set of `Pages`
    - Home
        - you are given this already
        - it contains links to other routes
        - login, and dashboard routes
    - Login
        - user should be able to login from here
        - use reqres.in api for logging in
        - you need to maintain the user auth state in a context API
    - Dashboard
        - user should be able to see a list of all products fetched from API
        - it should be in tabular format
        - on clicking brand here you should be able to be redirected to the `/products/<id>` page
    - SingleProductPage
        - you need to use dynamic routing to fetch the id and fetch from details from API again
    - AllRoutes
        - all the routes are present here
- `Components`
    - ProductsTable
        - accept `data` property and has a list of ProductsCards
    - ProductCard
        - accept the following props:
        - `brand`
        - `category`
        - `price`
        - `id`
    - PrivateRoute
        - it should show the child component if user is authenticated
        - otherwise move the user to login page
    - AuthContext
        - manage auth context here
        - both user token, and login state
- You are given these dummy elements (anything with data-testid you should not remove or change the attribute values)

## **Installation**

```
npm install 

//for test
npm run test

```

## **Requirements**

### **`API details`**

- `GET` : products list
- `base-url`: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com`
- `url`: `/mockapi/get-tech-products`
- response
    - `data`: array of products
    - `totalPages`: number representing no of pages
- You cannot use JSON server
- use useEffect to display the data on the UI
- `GET` - get products by id
- `base-url`: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com`
- `url`: `/mockapi/get-tech-products/:id`
- response
    - `data`: product information
- example: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/5`

### **`Pages & Components`**

### **`AllRoutes.jsx`**

- It should contain all the routes for your application

```
/ - Home
/login - Login Page
/dashboard - Dashboard - Private
/products/<id> - Products Single Page - Private

```

### **`Home.jsx`**

- You dont need to update anything here
    
    https://camo.githubusercontent.com/e96c9ae2ea5745bb963bf5c2f6676a5ff07137a7444eaa817d827a8024c8a158/68747470733a2f2f692e696d6775722e636f6d2f5172756d4c6b612e706e67
    

### **`Login.jsx`**

- A user should be able to login from here
- There is a form already made for you
- You need to complete it with by using the following api
- `POST`
- https://reqres.in/api/login
- DOCS: https://reqres.in/
- You need to maintain the authentication state in context API
- `isAuth`, and `token`
- token - should be null by default
- isAuth - should be false by default
- once logged in, a user is redirected to `/dashboard` route

https://camo.githubusercontent.com/98993b5cff70b2a78a010aff83322533c20691da4949ba783054f295e7c4d41b/68747470733a2f2f692e696d6775722e636f6d2f4d6664504370652e706e67

### **`PrivateRoute.jsx`**

- PrivateRoute
    - it should show the child component if user is authenticated
    - otherwise move the user to `/login` page
    - use from AuthContext to decide if the user is authenticated or not

### **`Loader.jsx`**

- Loader
    - should render loader component when api call is made and yet to complete

### **`Dashboard.jsx`**

- Once logged in, a user sees the this page
- you should have a Logout button [data-testid="logout-btn"]
- once clicking on it, you should be logged out
- there is an element with [data-testid="user-token"]
- you need to display the users token here, which you got when logging in
- List all the products from the API page wise
- you need to display the results using the ProductsTable component, pass the data here from the API response
- loading indicators to be present here

### **`ProductsTable.jsx`**

- it should accept a data property, which will contain the array of products
- this is a table component
- from the data property, create a list of ProductCards components
- each of the ProductCard component will have a table row element, and each of the row will contain id ( this you should update in S No column ), brand,category and price of each product

!https://i.imgur.com/1zeeBRw.png

### **`ProductCard.jsx`**

- it should accept the following properties
    - id
    - brand
    - category
    - price
- The elements with the following attributes need to have corresponding values mapped to it
- data-testid="item" - the tr element is here
- the following are td elements
- data-testid="brand" - This should be a Link tag, and on clicking you need to redirect a user from dashboard to singleProduct page
- data-testid="category"
- data-testid="price"

### **`SingleProductPage.jsx`**

- on clicking brand of any product on dashboard SingleProductPage shouyld be rendered
- should maintain the loading status when api call happens
- make an api request to the tech products url with the respective id and display brand, image,details ,price and category as card.
- the follwoing testids should present in this page for brand,category,image,price and details respectively .
    - data-testid = product-brand
    - data-testid= product-category
    - data-testid= product-image (img should have alt as respective brand name)
    - data-testid = product-price
    - data-testid = product-details
        
        !https://i.imgur.com/kohy6vQ.png
        

### **`AuthContext.jsx`**

- The AuthContext and the Provider should be made here
- user should be able to pass the states for
- authentication isAuth - default value false
- token - default value null
- your value be passing down in the AuthContextProvider as value is { authState, ....otherFunctions }
    - authState should contain the isAuth and token
    - mandatory ^
- create the following functions as well and pass in value object
- loginUser - set auth to true and token to corresponding token
- logoutUser - set auth to false, and token back to null
