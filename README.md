# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Production Server
- Backend Server: https://vara-new-api.eba-8td7muy2.us-west-2.elasticbeanstalk.com/
- Frontend Server: https://main.d271r6z8tdry4i.amplifyapp.com/

## Repository Links
- Backend Repository: https://github.com/shreyas2499/vara-api
- Frontend Repository: https://github.com/shreyas2499/vara-ui


### `Note` 
  Since, I was not able to buy a domain name for this project, the browser throws a SSL certificate issue. I have added a manually signed certificate, but browsers do not completely accept it. So in order to get the production application running, please follow the steps below:
  1) Go to the Backend Server link. You should be able to see a page like below: ![Screenshot 2024-04-29 at 00 13 15](https://github.com/shreyas2499/vara-ui/assets/59840906/8f678190-91e5-4ce4-89b2-2accd2340770)
  2) Please click on the `Advanced` button to proceed. Once you click on that, you should be able to see this screen: ![Screenshot 2024-04-29 at 00 13 22](https://github.com/shreyas2499/vara-ui/assets/59840906/6e97700a-2e61-485c-a12b-b0f7ef49fc95)
  3) Click on `Proceed to vara-new-api.eba-8td7muy2.us-west-2.elasticbeanstalk.com (unsafe)` option. Once you have done this, you are all set to use the application!

## Tech Stack
1) Backend: Django
2) Database: Sqlite3
3) Frontend: React
4) Backend Deployment Server: AWS ElasticBeanstalk
5) Frontend Deployment Server: AWS Amplify

## Key Features
- Product Deployed on AWS
  1) Frontend Deployed using AWS Amplify
  2) Backend Deployed using AWS ElasticBeanstalk
     
- Before Logging In
  1) Hoverable Graphs: Hovering on Data Points will give you the values.
  2) Interactive Graphs: The user can select and deselect the Legends `on` a Graph.
 
- User Registration
  1) User can create an account and ensure that their `preferences` are stored.

- User Login
  1) User can login and make use of the additional features such as filtering.
  2) User can select the filter the graphs based on the graph type and the months.
  3) The selected changes will be stored as User Preferences, ensuring that when the user logs in again, the `same selections` would be visible.

- A demo account is created with the credentials for the purpose of testing. Please find the credentials here:
  - email: admin@gmail.com
  - password: admin

# Local Setup
- `Git clone` the repository
- Move into the project's root folder by using `cd`
- Run `npm install`
- Run `npm start`
- You should be able to the see the local url in the terminal. Click on the link in your terminal to get started!
   
