# BOOK-MANAGEMENT-APP
This is a simple full stack web app developed using MERN Stack used to add, modify or delete books, using a client and server interface with RESTful Api's for routing.

## Technologies Used

- Frontend: React, Axios and related packages. (all latest versions)
- Backend: Node.js, Express, MongoDB-Atlas and related packages. (all latest versions)
- Deployment: Netlify(for front end) and Render(for back end).


## Design Decisions:
Created mainly using the MVC (Module-View-Controller) architecture, where server is the module, client is the view and RESTful API's are the controller.


## Steps to run the Project:

```bash 
git clone https://github.com/smsraj2001/BOOK-MANAGEMENT-APP.git
```

- From the root folder:

### CLIENT SIDE
```bash 
cd client
```
- To install all node packages :
```bash 
npm i
```
- NOTE: For  localhost, in this file : ```BOOK-MANAGEMENT-APP/client/.env```
  - Comment out the line 2 and uncomment the line 1
- To run the client side app :
```bash 
npm start
```
- The default location of local host application is ```localhost:3000```

### SERVER SIDE
```bash 
cd server
```
- To install all node packages :
```bash 
npm i
```
- To start the backend server : (default at port 5000, if local-hosted)
```bash 
node server.js
```
- The MongoDB is remote hosted in MongoDB-Atlas and the URI for the same is mentioned in BOOK-MANAGEMENT-APP/server/.env
  - Again for local host of mongoDB pls comment out the line 2 and uncomment the line 1


## Features:
- Can perform all operations as mentioned in the description such as CRUD operations and is tested on both the client and server interface for hassle free experience.
- Adding books, opens in a separate page by clicking the ```Add Books``` button at the navbar.
- We can add title, author, genre and image (A web URL of the image) of the book.
- The book details can be viewed in the home page.
- Each book has the option to be deleted or updated.
- Updating includes modification of any details of the book. (Remember to click the ```Cancel``` button after clicking on the ```Update Book``` button to close the edit menu).

## Deployment:
- The app is deployed for ubiquitous access.
- The server side is deployed on ```RENDER``` 
- The client side is deployed on ```NETLIFY``` [Click Here](https://65aa777a362a3a078981bab6--cheery-liger-ef1764.netlify.app/)










