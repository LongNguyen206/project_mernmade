# Documentation

1. Who is your client?
2. What is your client’s need (i.e. challenge) that you will be addressing in your project?
3. Describe the client’s current setup and data.
4. Describe the project will you be conducting and how your App will address the client’s needs.
5. Identify and describe the software (including databases) to be used in your App.
6. Identify and describe the network setup you will use in your development.
7. Identify and describe the infrastructure (i.e. hardware) that your App will run on.
8. Describe the architecture of your App.
9. Explain the different high-level components (abstractions) in your App.
10. Detail any third party services that your App will use.

## 11. Identify the database to be used in your app and provide a justification for your choice:

> [this is my link](www.google.com)

We decided to use [MongoDB](https://www.mongodb.com/) as its an object-oriented, simple to use , dynamic, and scalable [NoSQL](https://searchdatamanagement.techtarget.com/definition/NoSQL-Not-Only-SQL)database. It’s based on the NoSQL document store model. **MonogoDB** works with data as [flexible JSON documents](https://thenewstack.io/technology-pairings-json-documents-databases/), rather than as rigid rows and columns as in [SQL](http://www.sqlcourse.com/intro.html) databases. We found find this document style more natural, flexible and in terms of application speed fast.
Why we chose **MongoDB**?:

- Because it’s a downloadable archive which could be unpacked and used right away. **MongoDB** required minimum configuration, all we had to do was run the MonogoDB server then we could start filling JSON documents with data. With **MonogoDB** schema-less data model it’ll allow us rapid development throughout our build, wether we need to introduce new properties or change existing ones as we go without a need to perform schema evolutions and data migration. Arguably, but **MongoDB’s** style of manipulating documents and running queries is much more developer-friendly. Moreover, it does not require any language to learn, like SQL which use complex object-relational mapping ([ORM](https://searchwindevelopment.techtarget.com/definition/object-relational-mapping)).

- **MonogoDB** JSON documents represents its data the same way applications do. Developers find the JSON document format natural to work with. Unlike the table rows and columns of a relational database, data can be structured with arrays and subdocuments – in the same way applications represent data, as lists and members / instance variables respectively. With that said, we feel that [MongoDB document structure](https://docs.mongodb.com/manual/core/data-modeling-introduction/) will be simpler and faster to model how data will be mapped and stored in the our database.

* We find JSON documents to be flexible. Each document can store data with different attributes from other documents. As an example, consider a product catalog where a document storing details for an item of mens’ clothing will store different attributes from a document storing details of a tv or other electronics. This is referred as“polymorphism”. As your deployments grow in terms of data volume MongoDB scales easily with no downtime, and without changing your application which is an important consideration for us and our client.

- **MonogoDB** offers [security](https://docs.mongodb.com/manual/security/) features which include include authentication, authorisation and auditing. Its foundation is a role-based access control with flexible set of privileges. **MonogoDB** provides allows us to assign [user-defined roles](https://docs.mongodb.com/manual/core/authorization/) by defining a set of build-in roles such as (admin, registered users). It also give us the ability to use [TLS/SSL](https://docs.mongodb.com/manual/core/security-transport-encryption/) (Transport Layer Security/Secure Sockets Layer) to encrypt all of **MonogoDB’s** network traffic to ensure that it is only readable by the intended client.

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
