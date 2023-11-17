# 💫`Get-Youtube-Subscribers`
This is a almabetter's backend capstone project on Get-Youtube-Subscribers using ExpressJs, MongoDb, and NodeJs.
This project involves developing a backend system for managing YouTube subscribers. We've designed a backend API that delivers responses in JSON format. To maintain a structured codebase, We've adopted a modular approach, where distinct components are stored in separate files. For instance, We've placed the code responsible for connecting to the API in one file, while the code handling database operations is housed in another.

This is our Api page to handled the youtube subscribers details:

![Screenshot1](https://github.com/Prachi-Rajput/get-youtube-subscribers/assets/113363553/37cd7664-49c7-41cc-a05e-9cfb761c3953)



## ✅ `Characteristics`

- Users can get all the subscribers.
- Users can get all subscribers with only name and subscribed channel.
- Users can get the subscriber details by id.


## 🍁`About The App`

The project is an Express.js application that interacts with a MongoDB database. Its purpose is to retrieve information about YouTube subscribers from the MongoDB database. The subscribers' data consists of fields such as id, name, subscribed channel, and subscribed date.


The project includes three GET routes, each serving a specific purpose:

1) **GET /subscribers:** This route retrieves all subscriber's information from the MongoDB collection. 

![Screenshot2](https://github.com/Prachi-Rajput/get-youtube-subscribers/assets/113363553/0f01e413-771b-44ba-a4ec-f3ebe777d814)



2) **GET /subscribers/:_id:** This route retrieves a specific subscriber's information based on the provided _id parameter. The _id corresponds to the unique identifier of a subscriber in the MongoDB collection. 

![Screenshot4](https://github.com/Prachi-Rajput/get-youtube-subscribers/assets/113363553/cc3fdecb-a3b5-486b-b68e-c7f79f8d9cff)


3) **GET /subscribers/name:** This route retrieves subscribers' information based on name and subscribed channel.

![Screenshot3](https://github.com/Prachi-Rajput/get-youtube-subscribers/assets/113363553/9c408b3b-2d79-49fe-9be0-3bfe43d27c33)



##  🌿 `Project Folder Structure`
1. [src/app.js]  is used to handle requests and responses.
2. [src/createDatabase.js]  for database creation on MongoDB.
3. [src/data.js]  for data that have to be connected to a database.
4. [src/index.js]  is used to connect and start the server.
5. [src/models/subscriber.js]  for the schema.


## 🌐 `Languages and Tools used`
 <div>
<img src="https://skills.thijs.gg/icons?i=mongodb" title="MongoDB" alt="MongoDB"/>&nbsp;
  <img src="https://avatars.githubusercontent.com/u/10251060?s=200&v=4" title="Postman" alt="Postman" width="50" height="50"/>&nbsp;
  <img src="https://skills.thijs.gg/icons?i=nodejs" title="NodeJS" alt="NodeJS" />&nbsp;
  <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" title="ExpressJS" alt="ExpressJS" width="50" height="50"/>&nbsp;  
</div>


## 🔧 `Project Clonning and Running`

- To run this project locally, use the following command in your CLI:

1. Clone this repository:

```bash
  https://github.com/Prachi-Rajput/get-youtube-subscribers.git
```

2. Install dependencies:

```bash
 npm i
```

3. Create a .env file and add monogodb uri

4. Create a database:

```bash
cd src
node createDatabase.js
```

5. Start the application:

```bash
 npm run start
```
- Go to any Browser and search localhost:3000

## ✨`Deployment`
Link to visit Youtube Subscriber video:


**Web Deployed Link**: https://get-youtube-subscribers-sjg7.onrender.com/

**API Schema Documentation** : https://documenter.getpostman.com/view/22294077/2s9YXpVyoR

## 🎋 `COLLABORATORS`
This project is created within a team of two members.

- [@Prachi Rajput](https://github.com/Prachi-Rajput)
- [@MD Shahnawaz](https://github.com/Shahnawaz1967)


##  📚`Feedback`

If you have any feedback, please reach out to us at prachirajput210497@gmail.com /
ashahnawaz010@gmail.com 
