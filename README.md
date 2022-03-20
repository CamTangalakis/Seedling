# Seedling
Welcome to Seedling, a Kickstarter clone for Twitch Apprenticeship application! Seedling is the place for entrepreneurs to gain visibility and funding for their future projects. 

Live site: https://seedling-starter.herokuapp.com/

This project is built with React, Express, and TypeScript. It leverages a MVC architectural pattern (model: express models with clear and simple api routes, view: react frontend with mui components to ease user interaction, controller: a custom reducer to communicate between the user interface and backend models). Stripe API is fully integrated to send money between donating users and the project owners. 

# To Run Locally

1. Clone the repo
2. CD into the the frontend and backend directories and 'npm install' dependencies
3. Create a .env file from the .env.example in the backend directory
4. Create a user with Postgres with username and password from your .env file
5. Generate the databse by running 'npx dotenv sequelize db:create' in the backend directory 
6. Migrate the database by running 'npx dotenv sequelize db:migrate' and seed the database with 'npx dotenv sequelize db:seed:all'
7. Start the front and backend servers with npm start and navigate to localhost:3000 

Happy coding!

# User Summary 

Users can sign up as a new user, login with existing credentials, or login as a Demo user. 

Entrepreneurs can post a new project with a cover photo and details, and get seed funding from other users! They can edit all details of their projects and delete them. Seedling keeps track of all funding information.

Visiting users can sort through projects by category, and fund projects that catch their eye.

# Frontend Routes

Splash page at '/' includes a reusable carousel component that displays all projects
![SplashPage](https://user-images.githubusercontent.com/85664060/159148497-dce25ac8-f665-4343-8be6-01fcbcf14cbe.png)
![SplashPage](https://user-images.githubusercontent.com/85664060/159148495-bc8d7dba-77fc-4c81-9144-7781d13396b7.png)

All projects displayed in the feed at '/home'
![AllProjects](https://user-images.githubusercontent.com/85664060/159148327-74d77fbf-7108-47bc-a37a-597294d8c990.png)

Projects can be filtered by category at '/category/:id'
![ArtProjects](https://user-images.githubusercontent.com/85664060/159148330-05ddbb2c-b21a-4bf8-ad73-f9ed4e7ea12e.png)
![LiteratureProjects](https://user-images.githubusercontent.com/85664060/159148332-28fbb979-a26c-4ae5-b6b1-1d4a61abdedf.png)

Individual projects displayed at '/project/:id'
![SingleProject](https://user-images.githubusercontent.com/85664060/159148320-1260fbca-54ea-4ef9-8871-8d528ed3c1a1.png)

Create a new project at '/newProject'
![CreateProject](https://user-images.githubusercontent.com/85664060/159148323-1ebeb11e-4b73-4556-91f8-64c9b877b077.png)

User login and signup, creating funding, and project edit and delete are handled with modals
![UserSignup](https://user-images.githubusercontent.com/85664060/159148336-c848ad1b-56b8-47eb-ae3e-7fccb5d70c6b.png)
![CreateFunding](https://user-images.githubusercontent.com/85664060/159148322-273aa1e1-d7ba-49f9-b523-b17859da8fe2.png)
![EditProject](https://user-images.githubusercontent.com/85664060/159148342-3903b3d6-86aa-4a61-9dd2-64289e5ec6b1.png)
![DeleteProject](https://user-images.githubusercontent.com/85664060/159148345-858fc02a-3b4e-43d5-9987-cd790e10f0b4.png)



# Database Schema

## Users
| Content       | Type          |
| ------------- | ------------- |
| Id            | int           |
| username      | string        |
| email         | string        |
| hashedPassword| binary string |
| createdAt     | date          |
| updatedAt     | date          |

Users can have many projects and fundings

## Category
| Content       | Type          |
| ------------- | ------------- |
| Id            | int           |
| category      | string        |

Categories can have many projects

## Projects
| Content       | Type          |
| ------------- | ------------- |
| Id            | int           |
| title         | string        |
| description   | string        |
| image         | string        |
| goalAmount    | integer       |
| categoryId    | integer       |
| userId        | integer       |

Projects belong to one category and user

## Fundings
| Content       | Type          |
| ------------- | ------------- |
| Id            | int           |
| funded        | integer       |
| userId        | integer       |
| projectId     | integer       |

Fundings belong to one user and project

# REST API

## Users
Users can login at 'POST /api/session/', returns user

Users perpetuate their login at 'GET /api/session/', returns user 

Users can logout at 'DELETE /api/session/', returns success message

Users create new user information and sign up at 'POST /api/users/', returns new user

## Projects
Get all project in the database at 'GET /api/projects/', returns all projects

Get a single project at 'GET /api/projects/:id', returns single project

Create a project at 'POST /api/projects/', returns new project

Edit a project at 'PUT /api/projects/:id', returns project

Delete a project at 'DELETE /api/projects/:id', returns success message

## Fundings
Create a funding at 'POST /api/fundings/', returns new funding

Integrated with Stripe API, create payment intent at ' POST /api/fundings/create-intent'

Integrated with Stripe API, pay at 'POST /api/fundings/pay'

