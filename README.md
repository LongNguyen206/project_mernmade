# Documentation
 header, team intro, table of content
## 1. Who is your client?

Our client, Mary, is a **visual content maker** and **social media marketer** based in New York, USA.

## 2. What is your client’s need (i.e. challenge) that you will be addressing in your project?

Part of our client's job is to work with small and medium-size businesses and provide them with social media marketing solutions. This means that if a business has a product that they want to promote, they would typically reach out to [social media influencers](https://influencermarketinghub.com/what-is-an-influencer/) who would feature these products in their social media content. A good social media marketing campaign usually benefits from a wider reach compared to the traditional advertising, and can also save the business a significant amount of marketing costs. *(You can read more about influencers marketing [here](https://blog.scrunch.com/24-reasons-why-brands-should-be-working-with-influencers) and [here](https://www.searchenginepeople.com/blog/brands-rely-influencer-marketing-2018-beyond.html))*

One of the difficulties that Mary faces is to meet the exact requirements of a business and provide them with the most relevant influencer to promote the product, given a large number of available options.

Therefore, the client set us a challenge to create a highly selective, transparent and easy to navigate B2B database of influencers and online communities that businesses (her clients) can have access to and through which they can form partnerships.

## 3. Describe the client’s current setup and data:

Our client has a database of influencers and communities that she currently adds data to using [RStudio](https://www.rstudio.com/) and her team uses MS Excel. She would then handpick the most relevant influencers to offer the businesses as social media marketing platforms. Our client would very much welcome a better solution.

## 4. Describe the project you will be conducting and how your App will address the client’s needs:

With the current setup, Mary has to manually match the businesses she is working with and the influencers she has access to.

Our project would provide Mary with a web app, where she or her team can login as **admins** and consistently fill the database with verified influencer profiles. Businesses and brands would, in turn, be able to sign up as **users**, navigate through this database and select the most relevant influencers they would want to work with based on specific criteria. Businesses would also be albe to short list potential influencers they would want to work with. Additionally, businesses would also be able to leave feedback and reviews on influencers they had worked with, which would benefit other business users of the web app.

To avoid fake and irrelevant business accounts, **admins** would also be able to do a formal verification of registered users, ensuring their authenticity.

## 5. Identify and describe the software (including databases) to be used in your App:

### [NodeJS](https://nodejs.org/en/)

Apart from being an obvious frontliner for modern web development, **NodeJS** can be described as a free and open source Javascript cross-platform for server-side programming. Introduced in 2009 as Google Chrome's Javascript engine, NodeJS elevated Javascript (which was only client-side prior to this) to a fullstack web programming language.

Unlike [Ruby](https://www.ruby-lang.org/en/) and its heavy and opinionated framework [Ruby on Rails](https://rubyonrails.org/), Javascript (and therefore NodeJS) benefits from a highly optimized engine which makes it much faster than Ruby, allowing for better performance, higher scalability with less number of servers.

Using **Node Package Manager**, or [npm](https://www.npmjs.com/), we can install libraries like Express to customize an existing Node installation to our needs. There are literally thousands of these open-source libraries and server frameworks available, created by NodeJS users.

### [ExpressJS](https://expressjs.com/)

We will use **ExpressJS** for our server (C in MVC). This "fast, unopinionated, minimalist and flexible" NodeJS framework allows us to quickly and easily write a functional REST API server in the backend. This framework also benefits from rich documentation and constant support, making it easy for us to build complicated routes, request handlers and link them to the front-end output. Therefore, unlike other NodeJS frameworks like **'koa'**, **'Hapi'** or **'Restify'**, Express keeps a rich functionality while staying simple enough for a small team like ours to use.

### [ReactJS](https://reactjs.org/)

We will use **ReactJS** for our frontend (V in MVC). React is fast, scalable and simple Javascript *library*. Unlike other JS frontend frameworks like Angular or Ember, React only deals with the Views instead of both the "Model and View" part. Although it shines most in single-page applications, we believe that the ability change on-screen data without reloading adds to the app's better usability, better user experience and faster data processing. By allowing developers to create **reusable UI components**, React makes the coding easier and more compact. **The Virtual DOM**, which is a cached-in-browser DOM, allows for faster rendering and avoids web performance bottlenecks. **React Developer Tools**, a Chrome browser's extension, is great for inspecting React components and observing current 'props' and 'states', allowing for easier debugging and testing.

Introduced by Facebook itself in 2011, we think ReactJS is solid choice for the frontend of the web app that is specialized around social media accounts.

### [MongoDB](https://www.mongodb.com/)

We chose **MongoDB** for our database (M in MVC). MongoDB is an open-source, object-oriented, simple, dynamic, scalable, NoSQL and non-relational database developed by MongoDB, Inc. It is extremely simple to install and implement and uses JSON or BSON(Binary JSON) documents to store data instead of traditional tables. This provides high performance, high availability, and automatic scaling.

As our client might decide to scale the application in the future to include more social media platforms, we need our schema to be dynamic and scalable, which is difficult to achieve with rigid tables of SQL databases. Most importantly, NoSQL database is very high-performing in queries, which is a crucial feature of our project (search and filtering). MongoDB uses ['Mongoose'](https://mongoosejs.com/) library for interaction with ExpressJS server.

### [DigitalOcean](https://www.digitalocean.com/products/droplets/)

We decided to use **DigitalOcean** as our deployment platform. DigitalOcean is an IaaS (Infrastructure-as-a-Service), which gives us raw servers to compose as we want to run your app. It offers fast, on-demand SSD cloud servers, straightforward pricing, a simple API, and an easy-to-use control panel.

DigitalOcean's servers are called Droplets, and they vary in configuration based on the pricing. DigitalOcean also offers Network services like load balancers, firewalls, and DNS. All of these products can be managed through their UI, API, CLI, or client libraries.

## 6. Identify and describe the network setup you will use in your development:

## 7. Identify and describe the infrastructure (i.e. hardware) that your App will run on:

## 8. Describe the architecture of your App:

## 9. Explain the different high-level components (abstractions) in your App:

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

## 10. Detail any third party services that your App will use:

- Facebook API (used for account login verification and official account verification)
- Instagram API (used for public data fetching)
- Google API (used for account login verification)
- <Mail service API>(used to send new users account comfirmation emails and to send users password reset emails)

## 11. Identify the database to be used in your app and provide a justification for your choice:

We decided to use <a href="https://www.mongodb.com/" target="_blank">Monogo</a> as its an object-oriented, simple to use , dynamic, and scalable <a href="https://searchdatamanagement.techtarget.com/definition/NoSQL-Not-Only-SQL" target="_blank">NoSQL</a> database. It’s based on the NoSQL document store model. **MonogoDB** works with data as <a href="https://thenewstack.io/technology-pairings-json-documents-databases/" target="_blank">flexible JSON documents</a>, rather than as rigid rows and columns as in <a href="http://www.sqlcourse.com/intro.htmls" target="_blank">SQL</a> databases. We found find this document style more natural, flexible and in terms of application speed fast.

Why we chose **MongoDB**?:

- Because it’s a downloadable archive which could be unpacked and used right away. **MongoDB** required minimum configuration, all we had to do was run the MonogoDB server then we could start filling JSON documents with data. With **MonogoDB** schema-less data model it’ll allow us rapid development throughout our build, wether we need to introduce new properties or change existing ones as we go without a need to perform schema evolutions and data migration. Arguably, but **MongoDB’s** style of manipulating documents and running queries is much more developer-friendly. Moreover, it does not require any language to learn, like SQL which use complex object-relational mapping (<a href="https://searchwindevelopment.techtarget.com/definition/object-relational-mapping" target="_blank">ORM</a>).

- **MonogoDB** JSON documents represents its data the same way applications do. Developers find the JSON document format natural to work with. Unlike the table rows and columns of a relational database, data can be structured with arrays and subdocuments – in the same way applications represent data, as lists and members / instance variables respectively. With that said, we feel that <a href="https://docs.mongodb.com/manual/core/data-modeling-introduction/" target="_blank">MongoDB document structure</a> will be simpler and faster to model how data will be mapped and stored in the our database.

* We find JSON documents to be flexible. Each document can store data with different attributes from other documents. As an example, consider a product catalog where a document storing details for an item of mens’ clothing will store different attributes from a document storing details of a tv or other electronics. This is referred as“polymorphism”. As your deployments grow in terms of data volume MongoDB scales easily with no downtime, and without changing your application which is an important consideration for us and our client.

- **MonogoDB** offers <a href="https://docs.mongodb.com/manual/security/" target="_blank">security</a> features which include include authentication, authorisation and auditing. Its foundation is a role-based access control with flexible set of privileges. **MonogoDB** provides allows us to assign <a href="https://docs.mongodb.com/manual/core/authorization/" target="_blank">user-defined roles</a> by defining a set of build-in roles such as (admin, registered users). It also give us the ability to use <a href="https://docs.mongodb.com/manual/core/security-transport-encryption/" target="_blank">TLS/SSL</a>Transport Layer Security/Secure Sockets Layer) to encrypt all of **MonogoDB’s** network traffic to ensure that it is only readable by the intended client.

## 12. Discuss the database relations to be implemented:

## 13. Provide your database schema design:

## 14. Provide User stories for your App:

## 15. Provide Wireframes for your App:

## 16. Describe the way Tasks are being allocated and tracked in your project:

## 17. Discuss how Agile methodology is being implemented in your App:

## 18.Provide an overview and description of your Source control process:

![alt text](https://github.com/LongNguyen206/project_mernmade/blob/dev/doc_images/git_workflow_chart.jpg)

### Initial work cycle:

1. We started with the **Git Admin** creating a `Central Remote Repo`:
   ```
   git init
   git add .
   git commit -m "Create Central Repo"
   git remote add origin <git_url>
   git push origin master
   ```
2. The **Git Admin** then creates a `Remote Dev Branch`, where each team member's code will be merged together and tested:
   ```
   (done in Github web app)
   ```
3. Each team member then clones the `Central Repo`:
   ```
   git clone <git_url>
   ```
4. Each team member then creates their `Local Dev Branch` and names it under their name:
   ```
   git checkout -b <team_member_dev>
   ```
5. Team members do the coding in the newly created `Local Dev Branch`
6. Work is added to the **staging phase**:
   ```
   git add .
   ```
7. Team members **commit** staged changes:
   ```
   git commit -m "<Commit message>"
   ```
8. When a significant amount of commits is accumulated, or when the individual work is requested for the `Central Repo`, the team member starts the process of **pushing their commits**. First step is to move from `Local Dev Branch` to `Local Master Branch`:
   ```
   git checkout master
   ```
9. The team member then **pulls** the `Remote Dev Branch` work into their `Local Master Branch` to have an up-to-date work of others:
   ```
   git pull origin dev
   ```
10. Their individual work is then merged from `Local Dev Branch` to `Local Master Branch`, so that they have their work added on top of the other team members' work:
    ```
    git merge <team_member_dev>
    ```
    In case of conflicts, team member will solve them manually. In this case, the team member has to **add** and **commit** again from their `Local Master Branch`:
    ```
    git add .
    git commit -m "<Commit the merge message>"
    ```
11. Now, as the `Local Master Branch` has the most up-to-date combined code, team members will **push** this code to the `Remote Repo`, on the branch with their name. The following command will push to `Remote Repo` and **create a new branch** if needed:
    ```
    git push origin master:<team_member_dev>
    ```
12. Team members then proceed to create a **Pull Request** on the Github web app (in browser). The request intends to merge their `Personal Remote Branch` into `Remote Dev Branch`:
    ```
    (done in Github web app)
    ```
13. Team member assigns **Reviewers** for their Pull Request:
    ```
    (done in Github web app)
    ```
14. Reviewers proceed to review the code. If the code is approved, the **Github Admin** will **approve the merge** into `Remote Dev Branch` and **delete the `individual Remote branch`**. If the code needs changes, the team member goes back to step 5.
15. Once the `Remote Dev Branch` has a stable version of code, the **Github Admin** will **merge `Remote Dev Branch` into `Remote Master Branch`** (i.e. **origin master**). **Github Admin** will do this in their `Local Dev Branch`:
    ```
    git pull origin dev
    git push origin master
    ```

### Start of the new work cycle:

1. After the successful **Pull Request**, the team member will start a new coding cycle. For this, first they need to make sure they are in the `Local Master Branch`:
   ```
   git checkout master
   ```
2. Before starting to code, the team member will **ensure they have the most up-to-date version** of the code to work upon:
   ```
   git pull origin dev
   ```
3. They will proceed with **deleting** the current `Local Dev Branch`:
   ```
   git branch -d <team_member_dev>
   ```
4. ...And **create it again** to have a fresh copy of `Local Master Branch`:
   ```
   git checkout -b <team_member_dev>
   ```
5. The team member commences coding. At this point, this step is equivalent to step 5 in "Initial work cycle".

## 19. Provide an overview and description of your Testing process:

## 20. Discuss and analyse requirements related to information system security:

| Percentage (%) | Security Threats         |
| :------------: | ------------------------ |
|       21       | Cross-site scripting     |
|       9        | SQL injection            |
|       11       | Denial-of-service attack |

The table above is an exert from the ["2012 Trends Report: Application Security Risks"](https://www.trustwave.com/downloads/Trustwave_WP_Global_Security_Report_2012.pdf) by the security vendor Cenzic. This table outlines as of 2012, trends in regards to the percentage of different methods exploited by black-hat hackers around the world. Cross-site Scripting (XXS) is the most commonly used web security exploit, accounting for 21% of malignant attacks around the world. Followed by SQL injections. XXS utilizes injecting malicious client-scripts into otherwise benign and trusted websites, that could be sent to an unsuspecting user. Resulting in possible access to a browsers tokens, cookies or other sensitive data. SQL injections on the other hand are based around inserting malicious SQL statements into input fields to be later executed by the underlying SQL database for the same or other reasons as listed above.

Escaping is a means ensuring data an application has received is secure before rendering it for the end user, essentially censoring data that could be interpreted in a malicious way (such as the characters < and > being rendered). Another method on containing the threat of XXS and SQL injections is to sanitize forms to ensure data received can do no harm to users as well as your database by scrubbing the data clean of potentially harmful markup. Input sanitizing, input validation and Escaping are all useful methods implemented to combat against XSS and SQl injections. Although as we have chosen a non-relational,noSQL database like MongoDB, is there is no threat of SQL injections.

"In computing, a denial-of-service attack (DoS attack) is a cyber-attack in which the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services of a host connected to the Internet". - Wikipedia thankfully our hosting service DigitalOcean has a cloud Firewall; "network-based, stateful firewall service for your DigitalOcean Droplets. They block all traffic that isn’t expressly permitted by a rule". This firewall helps to distinguish between good and bad actors, limiting the affect of a DDoS attack.

## 21. Discuss methods you will use to protect information and data:

**Authentication/Authorization Requirements** for users/admin; all passwords require a minimum of eight characters containing a minimum of one upper case letter, one number and one special character. Passwords are masked during user entry to prevent shoulder-surfing. Passwords are uniquely salted and hashed when stored in the password database, salting is very effective at preventing successful dictionary attacks, the reason is that is salt concatenated onto the original password then hashed, which helps to secure common passwords by making decoding them very computationally expensive.

**Validations** are performed both client- and server-side. An example of `client-side validations` is attempting to enter text into a "numbers only" field. These can, however, be bypassed, hence a deeper `server-side validation` is required to prevent malicious code being inserted into the database that could cause undesirable results.

**HTTPS**: "The principal motivation for HTTPS is authentication of the accessed website and protection of the privacy and integrity of the exchanged data while in transit" - [Wikipedia](https://en.wikipedia.org/wiki/HTTPS). `<companyName>` thus utilizes HTTPS for the following reasons; the ability securely send 3rd party data sent over via API and to prevent malicious hackers from trying to steal a users cookie an imitate a users session.

## 22. Research what your legal obligations are in relation to handling user data:

<companyName> has never collected private information from the account user unless previously provided with consent. We only collect publicly available social media data from official APIs (Twitter, Facebook, Instagram & YouTube). Data collected from our social platform partners complies with their standard [Platform Policies](https://www.instagram.com/about/legal/terms/api/) and [Terms and Services](https://help.instagram.com/581066165581870).
All data <companyName> collects is stored electronically on the DigitalOcean infrastructure, <dataCentreLocation>. Our application servers and database servers run inside an DigitalOcean Private Cloud. This secure database containing our Users, Visitors and User data is only accessible on our application servers and by approved DigitalOcean Engineers. All data stored by <companyName> is encrypted at rest.
