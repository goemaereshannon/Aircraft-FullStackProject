Welcome to this project!

For this project we built an application where users can view flights, reserve tickets for those flights and give reviews.

We coded everything ourselves. The backend is written in **C#** and uses **Entity Framework Core** while the frontend is written in **Javascript** and **Typescript** with the **Angular Framework**.

This project is meant to practice and showcase our skills. This project still needs some work if it would be used in a real life scenario. Be sure to check out our to-do list and the rest of this README.md to get an idea of which functionalities are or aren't implemented.

The checklist that accompanies this project listing all requirements is processed in the explanation of the project.

Table of contents

---

1. [Backend](#backend)
    1. [Generally](#generally)
    2. [Gateway](#gateway)
    3. [Docker Compose](#docker-compose)
    4. [Flight Service](#flight-service)
    5. [Flight Service Unittests](#flight-service-unittests)
    6. [Identity Service](#identity-service)
    7. [Realtime Service](#realtime-service)
    8. [Review Service](#review-service)
2. [Frontend](#frontend)
    1. [Framework](#framework)
    2. [Typescript](#typescript)
    3. [Authentication and Authorisation](#authentication-and-authorisation)
    4. [Real Time with SignalR](#real-time-with-signalr)
    5. [Testing](#testing)
    6. [Design and Styling](#design-and-styling)
    7. [PWA](#pwa)
    8. [Webpack optimisation](#webpack-optimisation)
    9. [Self-learning](#self-learning)
3. [Project management](#project-management)
4. [Successes](#successes)
5. [Dificulties](#dificulties)
6. [Future](#future)

# Backend

## Generally

We used LTS **.NET 3.1** to build an API for our Flight Booking Project. This project's API is built with **Entity Framework Core**.
**CORS** is enabled throughout the entire project.

**Swagger** documentation is provided for CRUD functions. To exemplify this, at least one of each is accompanied by **XML comments** to provide extra documentation.

All services (**4 microservices** in total) implement a multilayer pattern and make use of **Inversion of Control**. The Flight Service and Identity Service are elaborated with a **generic repository** and customisation within a specific repo if necessary for the needed API functions.

This application uses the open source messaging system **RabbitMQ** for communication between services. RabbitMQ uses the **AMQP** protocol.

When running the services the databases are filled via **seeder**.
The Identity, Flight and Reservation service use a **MSSQL database** and the Review service is realised with **MongoDb**.

To prevent **overposting** we made DTO's for data which needs to be filled in by the user (and can therefor otherwise be missused by hackers).

## Gateway

The gateway provides a **single accespoint** for all the microservices in the application. The gateway is built with **Ocelot** and runs in a **Docker container**.

## Docker Compose

All services run in their own container. The application also has containers for **mongoDB**, **RabbitMQ** and the **Ocelot Gateway**. All containers have their own **specifically defined port** for two reasons:

-   with changing ports, there's the risk that different containers in the application would get the same port at some point.
-   the defined port offers a permant access point for the gateway.

To make sure all services can start up correctly, containers that are needed for other containers to work get a **healtcheck**. The dependend container checks if the container that they need is already running before running themselves.

## Flight Service

In the project's Flight Service you can find both Memory Caching and a patch as extra API features. Both specific controller actions provide extra API documentation.

-   The **Memory Caching** is done for a function which gets today's flights, the data is cached until the end of the day.
-   You can find a **patch** to change the flight's status from "on time" to "delayed" or "cancelled".

All error messages are centriliazed in a **ErrorController** which returns JSON error messages.

Some functions in this service are **developed test-driven**. (Returning all flights, returning one flight by (non-)existing id, creating an airplane and updating an airplane)

When a Flight is fully booked, the application sends a MessageObject to the realtime Hub in the Realtime Service using the **AMQP protocol** to warn the admin user.

## Flight Service Unittests

Unit tests are not built in the container as to not diminish the performance.
Unit tests are executed when the Flight Service container is built and have to be succesfull to go online.
Unit tests use the seeder in the Flight Service as test data.

## Identity Service

The Identity Service takes care of the **authentication and authorisation** of the application. All website visitors can view and search flights. Only logged in users can book flights and leave reviews. Only the admin can make a flight, airplane, departure, destination or seat. The admin can also see all reviews and delete them.

Both the IdentityUser<User> as the IdentityRole<Role> are customised.

The Identity Service uses the standard UserManager and RoleManager.

The Identity Service provides a **JWT token** when a user logs in.

The Identity Service logs hardcoded errors with **Serilog**.

## Realtime Service

The Realtime Service uses **SignalR** to send and receive messages in real time. The messages are encapsulated in **MessageObjects**.

All users get a realtime message when a flight's status is patched from "on time" to "delayed" or "cancelled".

The admin user gets a realtime message when a flight is fully booked.

## Review Service

After flying, users can leave a review about their flight. This application uses **MongoDB** to save the reviews in a **NoSQL database**. Admins can view all reviews, view reviews based on subject or flight or delete a review.

# Frontend

## Framework

Since our project is meant to work with huge databases full of flight information, we needed a frontend framework that could this.

We picked **Angular** because it is a well-known framework that is being used by a lot of big companies and has thus proven its claims about scalability and data-handling.

Furthermore, apart from some basic features, this framework was completely new to both of us. So before we started we dived into transforming our **Adobe XD design** into code, we followed some courses on Pluralsight.

We divided the frontend in services based on the microservices in the backend of the project. These services inject their data in smaller **components**.

## Typescript

Though the Angular Framework seldom sends an error when you don't type variables in the components, we tried to type variables as much as possible. We made **Interfaces** for the models that the backend returns so we could use the dataclasses from the backend in the frontend to keep the data as clear and cosistent as possible by using them as **Types**.

## Authentication and Authorisation

Since our application handles sensitive info, especially the ticket reservations, we wanted to make pay special attention to security.

By implemeting a **login system** with different **roles** for different users in the backend, we could now also implement authentication and authorisation in the frontend.

Everyone who visits the application can view today's flights and search for specific flights.

Only users who are logged in with a valid **JWT-token** can reserve a seat for a flight. Users who are logged in can also see which reservations they made and after their flight, they can leave a review.

Only logged in users with the **"Admin" role** can view all existing flights. An Admin also gets a pop-up notification when a an airplane is fully booked.

In this application we implemented **route guards** to prohibite users who are not logged in or do not have the right role from visiting pages that they should not have access to.

When users provide a unknown path the **Page Not Found component** is shown and leads the user back to the "Discover" page.

## Real Time with SignalR

We used SignalR to build a realtime service in the backend. In the frontend we implemented **SignalR** to listen to the real time messages from the backend. When an airplane is fully booked, the admin gets a pop-up to display that information.

## Testing

We wrote both **unit and intergration tests**. As unit test we checked the component PageNotFound, the tests check if the component is loaded and has certain elements inside the template.
As integration test we tested the routing for both filling in an empty path and when you click the button on PageNotFound, they both need to navigate back to discover.

## Design and Styling

Before we started coding in the frontend, we made a design in **Adobe XD**. We implemented this design in the frontend with the help of some tools.

Most of the styling is added with **tailwindcss**. CSS classes with specific, reused styling not included in tailwind are added in **scss**. Furthermore we used **bootstrap** to implement validation classes. We also used **material design for Angular** to create the design and functionality of the pop-up.

Some mentionworthy elements of the front:

-   The login and register page consists of **reactive forms** with dynamic validation.
-   When booking a reservation, the user can click on the seat in the airplane that they'd like. Seats that are already reserved are grey and unclickable. The airplane and the seats are self-drawn using **Illustrator**.
-   The user can give a review with a dynamic **star-rating component**.

## PWA

Starting the project as PWA is possible using command `npm run pwa-start` after `npm install`.

## Webpack optimisation

We used webpack to optimize the project's performance.
To start off with, the difference between running `npx webpack --mode development` and `npx webpack --mode production` is already significant. Runnig in production mode already reduces te size of the project, this mode enables **minification and uglification**.

The review module is **dynamicly imported** inside the app module causing the biggest difference. The review module is only loaded when needed (lazy loading). The components are also splitted in different code **chunks**.

## Self-learning

Aside learning Angular through Pluralsight we desided to add **reactive form** validation and take an Pluralsight course for it too. (Identity)

To prevent unauthenticated users form accessing certain routes, we added angular **route guards**. Only authenticated users can book a flight, only authenticated admin users can visit the admin page.

# Project management

From the beginning we desided we both wanted this project to be a **fullstack** experience. That's why we both worked in the back- and frontend part. We worked separately but often debugged together and explained our code after finishing big parts. We did a standup every Monday to update each other and scheduled our backlog in **Trello**.

-   We created the DB scheme together. With this scheme Shannon built all needed classes.
-   Alexandra started with the Identity services, gateway and docker compose in the backend and connected this with the frontend for the registration page.
-   Meanwhile Shannon designed the frontend in Adobe XD and wrote the Flight services and the unit tests for the Flight service.
-   Alexandra wrote the Reservation service, we decided to incorporate this in the Flight services to limit the dificulty of the project. She also wrote the real time service and the Review service.
-   Shannon worked through all flight and reservation pages in frontend, including a 404 Not Found page.
    We were facing the end of the project and decided to both work on the development side where we ended: Alexandra finished backend and Shannon worked on frontend.
-   Shannon added Webpack, testing and multi-language to the frontend.
-   Alexandra added AMQP to the backend, put all services into docker containers and connected all services with the Ocelot gateway.
-   Alexandra implemented the review pages in the frontend, connected these with the reservation pages and added some dynamic data.
-   Shannon worked on the necessary documentation for this project.

We registrated our working hours with **Toggl** and the current subtotal is 199h:48min. We estimated to have worked 167h till now. (7 Dec)

# Successes

-   All requirements included
-   General functionality of both backend and frontend and the user flow to make a reservation and leave a review.

# Dificulties

-   Post of flight
-   Testing
-   Documentation on web is often about older Angular versions.
-   Docker Compose
-   Ocelot Gateway

# Future

**Backend**

-   seperate Reservation service (24h)
-   changing CORS settings for production (1h)
-   chatbox (with responses on FAQ) (16h)
-   getRandomDestination accomponied by 'Surprise me' button in frontend (4h)
-   delayedFlight (1h)
-   deleteFlight (status = cancelled) (1h)
-   getFlightsBasedOnCarrier (6h)
-   implement different classes in one plane (e.g. business, economy) and different prices for each class
-   ask more information about the user when they register and keep this in the database to automatically fill in reservation forms (e.g. birthdate,address). (8h)
-   let user upload a profilepicture and save this in the database (4u)

**Frontend**

-   custom select (1h)
-   modules (8h)
-   states inputs and buttons (2h)
-   custom validation classes instead of bootstrap (5h)
-   custom design and functionality of pop-up (5h)
-   error handling (4h)
-   possibility to book a return flight: extra step in reservation to choose return flight (2h)
-   storing previous search (1h)
-   guard on reservation form: closing reservation means data is not getting saved (2h)
-   Admin can change status of flights (2h)
-   Admin can edit flights (4h)
-   making reservation form dynamic when a user wants to reserve for more than one person (3h)
