# My-Hammer Challenge

Sorry, I had messed up git on my system. Had to reinitialize it all when I was done, so everything is in one big commit. Hope that is not too much of a problem.

## Technologies used
- Frontend - Angular v10 (latest is 11.2 but seems to have a bug with built in pipes so I chose this as it's more stable)
- Backend - NestJs, I am a big fan of Typescript, this uses TS out of the box and is build on top of ExpressJs
- Node: I have node version v12.16.1 running on my system, I do not think you will have problems running this on v14 LTS though.
- UI: Ng Zorro, an Angular UI component kit using Ant Design
- Databases: mongodb

## Install Dependencies

After cloning this project, run `npm i` in the root folder and then `npm run install:appdependencies` from the root folder to install dependencies for both the frontend and backend projects. You can also go into each folder and install dependencies of each project individually, this felt easier though. If this fails to work due to forces beyond the control of the computer gods, please install each app from their respective folders, thanks :-).

## Run Apps

Once you have the dependencies installed, run `npm run start` in the root folder.
The frontend app runs on `http://localhost:4200`, if you are curious about the backend, you can find it on `http://localhost:3000`

- Frontend
    - Homepage: `http://localhost:4200` or `http://localhost:4200/menu`
    - To Login: `http://localhost:3000/auth/login` (You need to create a user before you can log in)
    more details on for the backend for things like query params can be found on the swagger docs
    - To Register: `http://localhost:3000/auth/register`

_ Backend
- Menu List: `http://localhost:3000/menu` (It auto-populates the database with demo data first time its run, if database is empty )

## API documentation

If you ever get bored enough to try building another client to feed on the API I built, you can get information on it by visiting `http://localhost:3000/api`. This contains an API documentation using Swagger.

## Tests

I did not write any tests for this, could not find the time to do this

## Improvements/Hosting
- Hosting:
  I could think of a couple of ways these apps can be hosted depending on the company, size, and finances.

  For a newer company with limited finances, starting with hosts like Netlify (frontend) and Vercel (backend). CI/CD is very important and using hosts like this make it easy by integrating with your code repo and deploying build when you push code to the master/main branch and other branches based off configurations set.

  Another option could be using popular cloud services like Microsoft Azure, AWS etc. These could be more expensive, need more setup time etc. They give more control over environments and are very robust when it comes to hosting strategies.

- Improvements: Tests for one, more tests could be written, aside unit tests, e2e tests too. More checks could also be implemented to prevent the app from crashing.
    - Depending on the data supplied and how frequently it changes, decisions about caching on the FE, BE or both could be made to make the app more dependable. Currently, the app has no caching
    - PWA? I love progressive web apps, could be a good strategy for optimizing client-side user experience
    - Environment variables should be made use of more in both applications

- More testing: Automated visual testing could help give more confidence in the UI of the app.

## App structures

NestJs and Angular do share design paradigms, in fact, NestJs was built to mirror the patterns of angular.
I Have built both apps to follow a similar module approach where features are divided into small modules that handle bits of the total application. The frontend uses lazy loading to help with performance as well.
    


