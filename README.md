![logo](https://github.com/LongNguyen206/project_mernmade/blob/dev/doc_images/logo.png)

# #HashTagHound

## Gentech 2018 final project

## Group(CodeName-M.E.R.N.M.A.D.E): [Long](https://github.com/LongNguyen206), [Olie](https://github.com/oliverhardman), [Mariam](https://github.com/mariamantar), [Jesse](https://github.com/JesseMadison)

---

Table of content:

1. [Who is your client?](#who)
2. [What is your client’s need (i.e. challenge) that you will be addressing in your project?](#clientsNeeds)
3. [Describe the client’s current setup and data.](#setup)
4. [Describe the project will you be conducting and how your App will address the client’s needs.](#problemsAdressing)
5. [Identify and describe the software (including databases) to be used in your App.](#softwareUsed)
6. [Identify and describe the network setup you will use in your development.](#networkSetup)
7. [Identify and describe the infrastructure (i.e. hardware) that your App will run on.](#infrasturcture)
8. [Describe the architecture of your App.](#architechture)
9. [Explain the different high-level components (abstractions) in your App.](#components)
10. [Detail any third party services that your App will use.](#thirdParty)
11. [Identify the database to be used in your app and provide a justification for your choice.](#pickedDB)
12. [Discuss the database relations to be implemented.](#DBrelations)
13. [Provide your database schema design.](#DBschema)
14. [Provide User stories for your App.](#userStories)
15. [Provide Wireframes for your App.](#wireframes)
16. [Describe the way Tasks are being allocated and tracked in your project.](#taskAllocation)
17. [Discuss how Agile methodology is being implemented in your App.](#agile)
18. [Provide an overview and description of your Source control process.](#sourceControl)
19. [Provide an overview and description of your Testing process.](#test)
20. [Discuss and analyse requirements related to information system security.](#systemSecurity)
21. [Discuss methods you will use to protect information and data.](#protectedInformation)
22. [Research what your legal obligations are in relation to handling user data.](#legal)

<a name="who"></a>

## 1. Who is your client?

Our client, Mary, is a **visual content maker** and **social media marketer** based in New York, USA.

<a name="clientsNeeds"></a>

## 2. What is your client’s need (i.e. challenge) that you will be addressing in your project?

Part of our client's job is to work with small and medium-size businesses and provide them with social media marketing solutions. This means that if a business has a product that they want to promote, they would typically reach out to [social media influencers](https://influencermarketinghub.com/what-is-an-influencer/) who would feature these products in their social media posts. A good social media marketing campaign benefits from a wider audience reach compared to the traditional advertising, and can also save the business a significant amount of marketing costs. _(You can read more about influencers marketing [here](https://blog.scrunch.com/24-reasons-why-brands-should-be-working-with-influencers) and [here](https://www.searchenginepeople.com/blog/brands-rely-influencer-marketing-2018-beyond.html))_

One of the difficulties that Mary faces is to connect her clients with the most relevant influencers and/or platform to promote their product, given a large number of available options. Therefore, she believes that by granting her clients access to her constantly updating database will save time for all parties, and will allow companies to filter and identify the best option by themselves to launch their marketing campaign and target their preferred audience.

Therefore, the client set us a challenge to create a highly selective, transparent and easy to navigate B2B database of influencers and online communities that businesses (her clients) can have access to and through which they can form partnerships.

<a name="setup"></a>

## 3. Describe the client’s current setup and data:

Our client has a database of influencers and communities that she currently adds data to using [RStudio](https://www.rstudio.com/) and her team uses MS Excel. This database is currently for internal use only (by Mary herself). The process of inputting data is also very tedious as the data is in the form of rigid tables. She would then handpick the most relevant influencers to offer the businesses. Our client would very much welcome a better and safer solution.

<a name="problemsAdressing" ></a>

## 4. Describe the project you will be conducting and how your App will address the client’s needs:

With the current setup, Mary has to manually match the businesses she is working with and the influencers she has access to.

Our project would provide Mary with a web app, where she or her team can login as **admins** and consistently fill the database with verified influencer profiles.

Businesses and brands would, in turn, be able to sign up as **users**, navigate through this database and select the most relevant influencers they would want to work with based on specific criteria.

Businesses would also be able to shortlist potential candidates they would want to work with. Additionally, businesses would be able to leave feedback and reviews on influencers they had cooperated with in the past, which would give useful data insights both to our client and other users of the app.

To ensure legitimacy of reviews, **admins** would also be able to do a formal verification of registered users' authenticity.

<a name="softwareUsed"></a>

## 5. Identify and describe the software (including databases) to be used in your App:

### [NodeJS](https://nodejs.org/en/)

Apart from being an obvious front-liner for modern web development, **NodeJS** can be described as a free and open source Javascript cross-platform for server-side programming. Introduced in 2009 as Google Chrome's V8 Javascript engine, NodeJS elevated Javascript (which was only client-side prior to this) to a fullstack web programming language.

Unlike [Ruby](https://www.ruby-lang.org/en/) and its heavy and opinionated framework [Ruby on Rails](https://rubyonrails.org/), Javascript (and therefore NodeJS) benefits from a highly optimized engine which makes it much faster than Ruby, allowing for better performance, higher scalability with less number of servers.

Using **Node Package Manager**, or [npm](https://www.npmjs.com/), we can install libraries like Express to customize an existing Node installation to our needs. There are literally thousands of these open-source libraries and server frameworks available, created by NodeJS users.

### [ExpressJS](https://expressjs.com/)

We will use **ExpressJS** for our backend (C in MVC). This "fast, unopinionated, minimalist and flexible" NodeJS framework allows us to quickly and easily write a functional REST API server in the backend. This framework also benefits from rich documentation and constant support, making it easy for us to build complicated routes, request handlers and link them to the front-end output. Therefore, unlike other NodeJS frameworks like [**'koa'**](https://koajs.com/), [**'Hapi'**](https://hapijs.com/) or [**'Restify'**](http://restify.com/), Express keeps a rich functionality while staying simple enough for a small team like ours to use.

### [ReactJS](https://reactjs.org/)

We will use **ReactJS** for our frontend (V in MVC). React is fast, scalable and simple Javascript _library_. Unlike other JS frontend frameworks like Angular or Ember, React only deals with the Views instead of both the Model AND Views part. Even though it shines most in single-page applications, we believe that the ability change on-screen data without reloading adds to the app's better usability, better user experience and faster data processing. By allowing developers to create **reusable UI components**, React makes the coding easier and more compact. **The Virtual DOM**, which is a cached-in-browser DOM, allows for faster rendering and avoids web performance bottlenecks. **React Developer Tools**, a Chrome browser's extension, is great for inspecting React components and observing current 'props' and 'states', allowing for easier debugging and testing.

Introduced by Facebook itself in 2011, we think ReactJS is solid choice for the web app that is all about social media accounts.

### [MongoDB](https://www.mongodb.com/)

We decided to choose **MongoDB** for our database (M in MVC). MongoDB is an open-source, object-oriented, simple, dynamic, scalable, NoSQL and non-relational database developed by MongoDB, Inc. It is extremely simple to install and implement, and uses JSON or BSON(Binary JSON) documents to store data, instead of traditional tables. This provides us with high performance, high availability, and automatic scaling of our database.

As our client might decide to scale the application in the future to include more social media platforms, we need our schema to be dynamic and scalable, which is difficult to achieve with rigid tables of SQL databases. Most importantly, NoSQL database is very high-performing in queries, which is a crucial feature of our project (searching and filtering). MongoDB uses ['Mongoose'](https://mongoosejs.com/) library to interac with ExpressJS server.

### [DigitalOcean](https://www.digitalocean.com/products/droplets/)

We decided to use **DigitalOcean** as our deployment platform. DigitalOcean is an IaaS (Infrastructure-as-a-Service), which gives us raw servers to compose as we want to run our app. It offers fast, on-demand SSD cloud servers, straightforward pricing, a simple API, and an easy-to-use control panel/admin dashboard.

DigitalOcean's servers are called **Droplets**, and they vary in configuration based on the pricing. DigitalOcean also offers Network services like load balancers, firewalls, and DNS. All of these products can be managed through their UI, API, CLI, or client libraries.

### [JEST](https://jestjs.io/)

We use **JEST** to test both our front- and backend Javascript. It's the most comprehensive, fast, developer-ready testing tool and perfect for our case.

<a name="networkSetup"></a>

## 6. Identify and describe the network setup you will use in your development:

Our project will be deployed on a [cloud service](https://www.digitalocean.com/products/droplets/), DigitalOcean, therefore any computer device connected to the Internet would be able to access it via its domain name. The static files, other media and database will also be stored on DigitalOcean [**Spaces**](https://www.digitalocean.com/products/spaces/).

Therefore we have a basic cloud server setup, without backup, recovery plans or any load balancing:
![Server Setup](https://github.com/LongNguyen206/project_mernmade/blob/dev/doc_images/server-setup.png)

DigitalOcean provides us with fully independent virtual servers. These are also known as scalable computer services in that they provide you with add-on storage, security, and monitoring capabilities.

All that is needed from both the **admins** and **users** is to access the web app on their personal devices and no special equipment, except Internet connection and a modern web browser, would be needed.

<a name="infrasturcture"></a>

## 7. Identify and describe the infrastructure (i.e. hardware) that your App will run on:

All the hardware used to host the app will be owned by the DigitalOcean. Our [server plan](https://www.digitalocean.com/pricing/) gives us 1GB in Memory, 1 virtual CPU, 25GB of SSD and 1TB of monthly data transfer.

Our database will be stored on DigitalOcean Spaces, which is a "simple scalable S3-compatible object storage with a built-in content delivery network (CDN) to store, serve, backup, and archive any amount of web content, images, media, and static files for web applications". The Spaces plan will give us 250GB of storage and 1TB of outbound, CDN included data transfer.

<a name="architechture"></a>

## 8. Describe the architecture of your App:

Our app follows a typical MERN stack architecture:
![MERN Architecture](https://github.com/LongNguyen206/project_mernmade/blob/dev/doc_images/web-arch.png)

```
/server/
    /config/                                ## various configurations, including PassportJS and MongoDB URI
    /helper/
    /public/                                ## static files (most would be stored on cloud service)
    /models/                                ## MongoDB schemas (data is stored on cloud service)
    /routes/                                ## first stop point of url requests
    /tests/                                 ## testing files
        /unit/
        /integration/
        /route/
    server.js                               ## ExpressJS server, middleware is also stored here
/client/
    /public/                                ## frontend static files
    /src/
        /components/
            /adminComponents/
                /exampleComponent/          ## admin dashboard's-related components
                    exampleComponent.js
                    exampleComponent.scss
            /userComponents/
                /exampleComponent/          ## other shared components
                    exampleComponent.js
                    exampleComponent.scss
                /App.js                     ## React entry point
            /index.html                     ## main HTML file
            /index.js
            /styles.scss                    ## overall page styling
        /img/
        /tests/
```

A MERN stack app requires a simultaneous running of both backend (Express) and frontend (React) servers. In production, this is taken care of by our virtual server.

An example of interaction between our app's components:

1. In the browser, the admin clicks a button to add a new influencer profile (e.g. the url is `https://project.com/influencer/new`). The protocol and the domain will send the request to the DigitalOcean virtual server.
2. The button is a React component. It sends a React request to the proxy to be translated into an Express request.
3. Once the request was processed by the proxy, Express, which is constantly listening to requests, recognizes it as the HTTP request.
4. Express's `server/server.js` (our backend API) recognizes the domain. `server/server.js` will then send the request to `server/router/influencer.js` which is responsible for all requests containing 'influencer' routes. Express will also run all the necessary middleware at this point.
5. `server/router/influencer.js` determines the business logic of the request. In this case, it accesses our MongoDB database (on DigitalOcean cloud server) which we will configure in `server/config/database.js` and modifies the database accordingly.
6. While this all is happening, React automatically updates the frontend. React server reads the states and props of various components in the browser. Once we clicked a button to add a new influencer profile, the state changes, and React does not wait to fetch the data from the database, but rather renders a new profile independently by reading our input fields then updating the state once we clicked "Submit". This allows for faster data processing.
7. The changes to database are confirmed when we revisit or refresh the page next time, when React will actually send a request to fetch data from the database via Express server.

<a name="components"></a>

## 9. Explain the different high-level components (abstractions) in your App:

### Admin's frontend:

Our application will serve the **Admin** users with the "Admin's dashboard" (React component). Admins are users who provide **Admin** authorization credentials. This component will allow admins to add, edit and delete influencer profiles in the database, verify and change registered users' profiles, verify reviews, etc.

### Registered Users frontend:

The **Registered Users'** (React component) will have access to the search bar, filter options, they would be able to see extensive data on individual influencers. Registered users will also be able to edit their public profile, add influencers to private shortlists and leave reviews.

### Guest User

Guest users will not be able to use our app unless they register.

### Express Backend

Express will handle all route requests, database interactions including CRUD functions, middleware and app security (authentication/authorization).

### MongoDB DataBase

MonogoDB will be our database for our app, it will store all user data, influencer profiles, rating data, review data.

<a name="thirdParty"> </a>

## 10. Detail any third party services that your App will use:

- [DigitalOcean Api](https://developers.digitalocean.com/documentation/v2/) - allows us to manage Droplets and resources within the DigitalOcean cloud in a simple, programmatic way using conventional HTTP requests.
- [Facebook API](https://developers.facebook.com/docs/facebook-login/web/) - used for user authentication and official account verification.
- [Instagram API](https://www.instagram.com/developer/) - used for public data fetching.
- Some mail service API - used to send New User account confirmation emails and to password reset emails.
- [LinkedIn API](https://developer.linkedin.com/docs/oauth2) - used for user authentication and official account verification.
- Various Node, Express and React Libraries (JWT, Passport, Babel, etc)

<a name="pickedDB"> </a>

## 11. Identify the database to be used in your app and provide a justification for your choice:

We decided to use <a href="https://www.mongodb.com/" target="_blank">MongoDB</a> as it is an object-oriented, simple to use, dynamic, and scalable <a href="https://searchdatamanagement.techtarget.com/definition/NoSQL-Not-Only-SQL" target="_blank">NoSQL</a> database. It’s based on the NoSQL document store model. MonogoDB works with data as <a href="https://thenewstack.io/technology-pairings-json-documents-databases/" target="_blank">flexible JSON documents</a>, rather than as rigid rows and columns as in <a href="http://www.sqlcourse.com/intro.htmls" target="_blank">SQL</a> databases. We found this data document style more natural, flexible and, in terms of application speed, faster.

Why we chose **MongoDB**?:

- Because it’s a downloadable archive which could be unpacked and used right away. **MongoDB** required minimum configuration, all we had to do was run the `MongoDB server` then we could start filling JSON documents with data. With **MongoDB** schema-less data model it will allow us rapid development throughout our build, whether we need to introduce new properties or change existing ones as we go without a need to perform schema evolutions and data migration. Arguably, but **MongoDB’s** style of manipulating documents and running queries is much more developer-friendly. Moreover, it does not require any language to learn, like SQL which uses complex object-relational mapping (<a href="https://searchwindevelopment.techtarget.com/definition/object-relational-mapping" target="_blank">ORM</a>).

- **MongoDB** JSON documents represent its data the same way applications do. Developers find the JSON document format natural to work with. Unlike the table rows and columns of a relational database, data can be structured with arrays and subdocuments – in the same way applications represent data, as lists and members / instance variables respectively. With that said, we feel that <a href="https://docs.mongodb.com/manual/core/data-modeling-introduction/" target="_blank">MongoDB document structure</a> will be simpler and faster to model how data will be mapped and stored in the our database.

- We find JSON documents to be flexible. Each document can store data with different attributes from other documents. As an example, consider a product catalog where a document storing details for an item of mens’ clothing will store different attributes from a document storing details of a TV or other electronics. This is referred as “polymorphism”. As your deployments grow in terms of data volume, MongoDB scales easily with no downtime, and without changing your application which is an important consideration for us and our client.

- **MonogoDB** offers <a href="https://docs.mongodb.com/manual/security/" target="_blank">security</a> features which include authentication, authorization and auditing. Its foundation is a role-based access control with flexible set of privileges. **MongoDB** allows us to assign <a href="https://docs.mongodb.com/manual/core/authorization/" target="_blank">user-defined roles</a> by defining a set of build-in roles such as admins and registered users. It also gives us the ability to use <a href="https://docs.mongodb.com/manual/core/security-transport-encryption/" target="_blank">TLS/SSL</a> (Transport Layer Security/Secure Sockets Layer) to encrypt all of **MongoDB’s** network traffic to ensure that it is only readable by the intended client.

<a name="DBrelation"> </a>

## 12. Discuss the database relations to be implemented:

We will implement three relationships in our database:

Influencer profiles will be created by Admins in which they will be able to add all of the relevant data. Profiles' create, edit and delete can only be accessed by the Admin.

The review system consists of a reviewer (userId) and reviewee (influencerListingId). Reviewer refers to the company because they will be able to leave a review on the performance of influencers they choose to work with.

A reviewee (influencerListing), on the other hand, references the ID of the influencer being reviewed. This is because every review belongs to an influencer.

<a name="DBschema"> </a>

## 13. Provide your database schema design:

We have 4 MongoDB schema's in total including Admin, User, InfluencerListing and Review.

```
Admin

- id: String
- email: String
- password: String(hashed and salted value)
```

```
User

- id: String
- Name: String
- shortList: [Strings]
- email: String
- password: String
- image: String
- facebookID
- LinkedInID
```

```
InfluencerListing

- id: String
- image: String
- link: String
- category: String
- following: integer
- engagementRate: float
- description: text
```

```
Review:

- comment: text
- rating: binary
- reviewer: User_id
- reviewee: InfluencerListing_id
```

<a name="userStories"> </a>

## 14. Provide User stories for your App:

### Admin StoryBoard

**Admin** in our app will be allowed to add social media profiles, verify brands, browse through the influencer database (filtered or not filtered) and view social media profiles.

### Registered User StoryBoard

**Registered Users** will be able to sign up either through Facebook, LinkedIn or locally.
Once signed in, the **Registered User** will then go to the home page where they'll be able to view influencer profiles in a tile form.

The **Registered User** can filter accounts based on location, social-community size (based on average number of followers/subscribers), platform (e.g Instagram, Facebook, Twitter, Youtube), type-of-account(influencer, feature account, community account) and engagement rate (based on the average number of likes/views/comments).

The **Registered Users** can view influencer profiles. **Registered Users** can rate and also leave reviews on social media profiles. They can also shortlist influencers in private lists. **Registered Users** are able to delete their account.

<a name="wireframe"> </a>

## 15. Provide Wire-frames for your App:

The first wire-frame outlines the landing page Dashboard with the main search/filter features to be applied to the influencers.
![First Wire-frame](https://github.com/LongNguyen206/project_mernmade/blob/dev/doc_images/wireframe.png)
a ![First Wire-frame](https://github.com/LongNguyen206/project_mernmade/blob/dev/doc_images/wireframe2.png)
The last wire-frame is from the admin perspective, allowing the admin to individually add new influencers.
![First Wire-frame](https://github.com/LongNguyen206/project_mernmade/blob/dev/doc_images/wireframe3.png)

<a name="taskAllocation"> </a>

## 16. Describe the way Tasks are being allocated and tracked in your project:

[Trello](https://trello.com/) is a web-based project management application. On Trello we have broken the project into two main parts: the 'KANBAN' lists and the 'Support' lists. The Support lists feature lists like 'Phases', where we track different phases of the project, and 'Daily Journal' that is used to document, plan and track daily contributions of each team member. The 'Phases' card's main directive is to ensure that the team prioritizes certain sets of features in order to ensure proper time-frame delivery:

Each day, we have a class Stand-up meeting, when we report to our educators and other classmates about our progress so far and the plan for the day. This is the same plan that we have in our 'Daily Journal' list. We follow up with a team meeting after that where we discuss our tasks for the day and if there are any roadblocks in each team member's work:
![alt text](https://github.com/LongNguyen206/project_mernmade/blob/dev/doc_images/support_trello.png)

The team members are allocated to backlog features on Trello, from development to deployment, this way we can track who is responsible for which feature.

Once a team-member has picked a task from the 'Product Backlog' on Trello, they will use the physical board to reflect that. Like Trello, this helps the team to visualise the progress of the app so far and avoid the same work being completed by two members at the same time.

Trello is a web-based project management application. On Trello we have broken the project into two main boards 'Phases' and 'Backlog features'. The phases boards main directive is to ensures that the team priortises certain features/sets of features in order to ensure proper time-frame delivery. The second board; 'Backlog features' is to give an oversight for the developers as to what tasks are yet to be completed and the estimated complexity of such feature.

At the end of the day, we document the tasks completed on Trello's 'Daily Journal'. The contributions are also shown as Github commits.

<a name="agile"> </a>

## 17. Discuss how Agile methodology is being implemented in your App:

![alt text](https://github.com/LongNguyen206/project_mernmade/blob/dev/doc_images/agile_workflow_draft.jpeg)

'Kanban is a method for managing the creation of products with an emphasis on continual delivery while not overburdening the development team' - [Wikipedia](https://en.wikipedia.org/wiki/Kanban). This is the Agile methodology that we chose to follow for this project.

Our Trello Board is separated into 'Product Backlog', 'In Progress', 'In Testing', 'Pending Code Review', 'Deployed and Awaiting Client's Feedback', 'Approved':
![alt text](https://github.com/LongNguyen206/project_mernmade/blob/dev/doc_images/trello.png)

Every day we select maximum of 3 features to the 'In Process' list. Once the feature is developed, it goes to 'In Testing'. If testing is passed, the feature is reviewed by other team members and if approved, gets deployed for the client to test. After we receive the feedback from the client, the feature is either approved, in which case in stays deployed and a new feature is pulled from the backlog, or requires changes, in which case it goes back to 'Product Backlog'.

Due the conflict of time-zones between the team-members and client, we decided that the best solution would be to send queries/questions the night before, to be answered by the client by 10AM Sydney time the next day. Thus far we had two client meetings, each lasted for about 15 mins. By the end of the first meeting, 16 User Stories were conveyed to the team by the client. Following the KANBAN method of continuous integration, each team member will assign themselves a task for the maximum of 3 day sprint to be reviewed by the client provided the feature passes all the tests.

'Kanban is a method for managing the creation of products with an emphasis on continual delivery while not overburdening the development team' -Wikipedia. This is the agile methodology that we choose to follow for this project. Due the conflict of time-zones between the team-members and client. We decided that the best solution would be to send querys/questions the night before the be answered by the client 10am the next day. Thus far into the planning stages we have a two client meeting each lasting about 15 mins. By the end first meeting 16 user stories were conveyed to the team by the client. Following the Kanban method of continuous integration, each team member will assign themselves a task for the 3 day sprint to be reviewed by the client providing test passes.

<a name="sourceControl"> </a>

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

<a name="test"></a>

## 19. Provide an overview and description of your Testing process:

We will be integrating two tools together:

Jest - Jest is a unit testing framework made by Facebook to test JavaScript and react applications.
Enzyme - Enzyme is used to test for React applications only.

Using Jest & Enzyme will allow us to perform unit tests throughout our code on individual components and elements of behaviour including input fields, navbar

We will be using Unit tests and Integration tests.
<a href="http://softwaretestingfundamentals.com/unit-testing/" target="_blank">Unit Tests</a> will be used to test our functions and components indiviually.
<a href="http://softwaretestingfundamentals.com/integration-testing/" target="_blank">Integration Tests</a> will be used to ensure a code base operates flawlessly together.

Our strategy is to incoporate [JEST](https://jestjs.io/) in our Express folder, to preform our integration tests as a whole. [Enzyme](https://airbnb.io/enzyme/) will be used for our test cases and will be located in our 'Test' subfolder in at 'client' folder, it'll be testing our React components and their elements individually (Unit Test).

We plan to use <a href="http://agiledata.org/essays/tdd.html" target="_blank">TDD</a> to test more complex function chains, to ensure they function as their suppose to.

![alt text](http://www.agiledata.org/images/tddSteps.jpg)

<a name="systemSecurity"> </a>

## 20. Discuss and analyse requirements related to information system security:

| Percentage (%) | Security Threats         |
| :------------: | ------------------------ |
|       21       | Cross-site scripting     |
|       9        | SQL injection            |
|       11       | Denial-of-service attack |

The table above is an exert from the ["2012 Trends Report: Application Security Risks"](https://www.trustwave.com/downloads/Trustwave_WP_Global_Security_Report_2012.pdf) by the security vendor Cenzic. This table outlines as of 2012, trends in regards to the percentage of different methods exploited by black-hat hackers around the world. Cross-site Scripting (XXS) is the most commonly used web security exploit, accounting for 21% of malignant attacks around the world. Followed by SQL injections. XXS utilizes injecting malicious client-scripts into otherwise benign and trusted websites, that could be sent to an unsuspecting user. Resulting in possible access to a browsers tokens, cookies or other sensitive data. SQL injections on the other hand are based around inserting malicious SQL statements into input fields to be later executed by the underlying SQL database for the same or other reasons as listed above.

Escaping is a means ensuring data an application has received is secure before rendering it for the end user, essentially censoring data that could be interpreted in a malicious way (such as the characters < and > being rendered). Another method on containing the threat of XXS and SQL injections is to sanitize forms to ensure data received can do no harm to users as well as your database by scrubbing the data clean of potentially harmful markup. Input sanitizing, input validation and Escaping are all useful methods implemented to combat against XSS and SQl injections. Although as we have chosen a non-relational,noSQL database like MongoDB, is there is no threat of SQL injections.

"In computing, a denial-of-service attack (DoS attack) is a cyber-attack in which the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services of a host connected to the Internet". - Wikipedia thankfully our hosting service DigitalOcean has a cloud Firewall; "network-based, stateful firewall service for your DigitalOcean Droplets. They block all traffic that isn’t expressly permitted by a rule". This firewall helps to distinguish between good and bad actors, limiting the affect of a DDoS attack.

<a name="protectedInformation"> </a>

## 21. Discuss methods you will use to protect information and data:

**Authentication/Authorization Requirements** for users/admin; all passwords require a minimum of eight characters containing a minimum of one upper case letter, one number and one special character. Passwords are masked during user entry to prevent shoulder-surfing. Passwords are uniquely salted and hashed when stored in the password database, salting is very effective at preventing successful dictionary attacks, the reason is that is salt concatenated onto the original password then hashed, which helps to secure common passwords by making decoding them very computationally expensive.

**Validations** are performed both client- and server-side. An example of `client-side validations` is attempting to enter text into a "numbers only" field. These can, however, be bypassed, hence a deeper `server-side validation` is required to prevent malicious code being inserted into the database that could cause undesirable results.

**HTTPS**: "The principal motivation for HTTPS is authentication of the accessed website and protection of the privacy and integrity of the exchanged data while in transit" - [Wikipedia](https://en.wikipedia.org/wiki/HTTPS). `HashtagHound` thus utilizes HTTPS for the following reasons; the ability securely send 3rd party data sent over via API and to prevent malicious hackers from trying to steal a users cookie an imitate a users session.

<a name="legal"> </a>

## 22. Research what your legal obligations are in relation to handling user data:

HashtagHound has never collected private information from the account user unless previously provided with consent. We only collect publicly available social media data from official APIs (Twitter, Facebook, Instagram & YouTube). Data collected from our social platform partners complies with their standard [Platform Policies](https://www.instagram.com/about/legal/terms/api/) and [Terms and Services](https://help.instagram.com/581066165581870).
All data HashtagHound collects is stored electronically on the DigitalOcean infrastructure, <dataCentreLocation>. Our application servers and database servers run inside an DigitalOcean Private Cloud. This secure database containing our Users, Visitors and User data is only accessible on our application servers and by approved DigitalOcean Engineers. All data stored by HashtagHound is encrypted at rest.
