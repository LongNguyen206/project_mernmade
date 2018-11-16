# Documentation

1. Who is your client?
2. What is your client’s need (i.e. challenge) that you will be addressing in your project?
3. Describe the client’s current setup and data.
4. Describe the project will you be conducting and how your App will address the client’s needs.
5. Identify and describe the software (including databases) to be used in your App.
6. Identify and describe the network setup you will use in your development.
7. Identify and describe the infrastructure (i.e. hardware) that your App will run on.
8. Describe the architecture of your App.

## 9. Explain the different high-level components (abstractions) in your App.

### Admin

Our application will serve the **Admin** for users who provide **Admin** authorization credentials. this application will have <n> main react components:

- AppRouter(App Navigation)
- Admin page(to approve social media profiles/ Brand verfication)
- ManageSocialMediaProiflePage(to manage social media profiles)

### Registed Users

Our application will serve the **Registered User** for users who provide **Registed User** cerdentials. this application will have <n> main react components:

- AppRouter(App Navigation)
- DashboardPage(to view/ search social media profiles)
- ProfilePage(to view/ rate social media profiles/ leave reviews)
- SettingPage(to manage interest/ wishlist/ view ratings)

### Guest User

Our application will serve the **Guest Users** for users who provide **Guest User** cerdentials. this application will have <n> main react components:

- AppRouter(App Navigation)
- DashBoard(to view/ search social media profiles)
- ProfilePage(to view)

### Express Backend

Node.js server will receive, handle requests/ api requests, send/ recieve data from the database, serve static assests, and serve data in JSON format.
Our server will also handle vaildation, authentication and authorization of our app.
A mailer system for account comfirmation, password reset requests.

### MongoDB DataBase

MonogoDB will be our database for our app, it will store all user data, social media profiles, rating data, review data.

## 10. Detail any third party services that your App will use.

- Facebook API(used for account login verification and offical account verfication)
- Instagram API(used for account login verifacation and offical account verfication)
- Google API(used for account login verification)
- <Mail service API>(used to send new users account comfirmation emails and to send users password reset emails)

## 11. Identify the database to be used in your app and provide a justification for your choice:

We decided to use <a href="https://www.mongodb.com/" target="_blank">Monogo</a> as its an object-oriented, simple to use , dynamic, and scalable <a href="https://searchdatamanagement.techtarget.com/definition/NoSQL-Not-Only-SQL" target="_blank">NoSQL</a> database. It’s based on the NoSQL document store model. **MonogoDB** works with data as <a href="https://thenewstack.io/technology-pairings-json-documents-databases/" target="_blank">flexible JSON documents</a>, rather than as rigid rows and columns as in <a href="http://www.sqlcourse.com/intro.htmls" target="_blank">SQL</a> databases. We found find this document style more natural, flexible and in terms of application speed fast.
Why we chose **MongoDB**?:

- Because it’s a downloadable archive which could be unpacked and used right away. **MongoDB** required minimum configuration, all we had to do was run the MonogoDB server then we could start filling JSON documents with data. With **MonogoDB** schema-less data model it’ll allow us rapid development throughout our build, wether we need to introduce new properties or change existing ones as we go without a need to perform schema evolutions and data migration. Arguably, but **MongoDB’s** style of manipulating documents and running queries is much more developer-friendly. Moreover, it does not require any language to learn, like SQL which use complex object-relational mapping (<a href="https://searchwindevelopment.techtarget.com/definition/object-relational-mapping" target="_blank">ORM</a>).

- **MonogoDB** JSON documents represents its data the same way applications do. Developers find the JSON document format natural to work with. Unlike the table rows and columns of a relational database, data can be structured with arrays and subdocuments – in the same way applications represent data, as lists and members / instance variables respectively. With that said, we feel that <a href="https://docs.mongodb.com/manual/core/data-modeling-introduction/" target="_blank">MongoDB document structure</a> will be simpler and faster to model how data will be mapped and stored in the our database.

* We find JSON documents to be flexible. Each document can store data with different attributes from other documents. As an example, consider a product catalog where a document storing details for an item of mens’ clothing will store different attributes from a document storing details of a tv or other electronics. This is referred as“polymorphism”. As your deployments grow in terms of data volume MongoDB scales easily with no downtime, and without changing your application which is an important consideration for us and our client.

- **MonogoDB** offers <a href="https://docs.mongodb.com/manual/security/" target="_blank">security</a> features which include include authentication, authorisation and auditing. Its foundation is a role-based access control with flexible set of privileges. **MonogoDB** provides allows us to assign <a href="https://docs.mongodb.com/manual/core/authorization/" target="_blank">user-defined roles</a> by defining a set of build-in roles such as (admin, registered users). It also give us the ability to use <a href="https://docs.mongodb.com/manual/core/security-transport-encryption/" target="_blank">TLS/SSL</a>Transport Layer Security/Secure Sockets Layer) to encrypt all of **MonogoDB’s** network traffic to ensure that it is only readable by the intended client.

12. Discuss the database relations to be implemented.
13. Provide your database schema design.
14. Provide User stories for your App.
15. Provide Wireframes for your App.
16. Describe the way Tasks are being allocated and tracked in your project.
17. Discuss how Agile methodology is being implemented in your App.
18. Provide an overview and description of your Source control process.
19. Provide an overview and description of your Testing process.
20. Discuss and analyse requirements related to information system security.
21. Discuss methods you will use to protect information and data.
22. Research what your legal obligations are in relation to handling user data.
