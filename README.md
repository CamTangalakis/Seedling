# Seedling
Welcome to Seedling, a Kickstarter clone for Twitch Apprenticeship application! Seedling is the place for entrepreneurs to gain visibility and funding for their future projects. 

This project is built with React, Express, and TypeScript. It leverages a MVC architectural pattern (model: react models with clear and simple api routes, view: express frontend with mui components to ease user interaction, controller: a custom reducer to communicate between the user interface and backend models). Stripe API is fully integrated to send money between donating users and the project owners (me). 

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
Users can login at 'POST /api/session/'
Users perpetuate their login at 'GET /api/session/'
Users can logout at 'DELETE /api/session/'
Users create new user information and sign up at 'POST /api/users/'

## Projects
Get all project in the database at 'GET /api/projects/'
Get a single project at 'GET /api/projects/:id'
Create a project at 'POST /api/projects/'
Edit a project at 'PUT /api/projects/:id'
Delete a project at 'DELETE /api/projects/:id'

## Fundings
Create a funding at 'POST /api/fundings/'
Integrated with Stripe API, create payment intent at ' POST /api/fundings/create-intent'
Integrated with Stripe API, pay at 'POST /api/fundings/pay'

# Frontend Routes

Splash page at '/'
All projects displayed in the feed at '/home'
Individual projects displayed at '/project/:id'
Create a new project at '/newProject'
User login and signup, creating funding, and project edit and delete are handled with modals
