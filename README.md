# E Commerce Backend API

## Description
- E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.
- Built the back end for an e-commerce site. You’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.
## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```
## Screenshots

### Install & Start Application
- Install Video: https://drive.google.com/file/d/1ms1imQz_5pFNTlrVNqKkcpLIg0XvNIJL/view
<br>
![Install & Start](./public/images/Install%20and%20Start%20App.gif)

### Category API
- Category API Video : https://drive.google.com/file/d/1i-dz9IheHjbd9H04azsQ39QK9cCMgBa7/view
<br>
![Category](./public/images/CategoryAPI.gif)

### Product API 
- Product API Video: https://drive.google.com/file/d/1678k4vKeFB138ySJxcwrZ0Itz1pjbNVx/view
<br>
![Product](./public/images/ProudctAPI.gif)

### Tag API
- Tag API Video: https://drive.google.com/file/d/1RA8B_sZ-6_M7Zagfin61DhKzxNjt-eFH/view
<br>
![Tag](./public/images/TagAPI.gif)


## Install Instruction & Steps:
<ol>
<li> npm i </li>
<li> mysql -u root -p </li>
<li> source db/schema.sql  </li>
<li> exit  </li>
<li> npm run seed  </li>
<li> npm start  </li>
<ol>