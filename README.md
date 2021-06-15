
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[License: MIT](https://opensource.org/licenses/MIT)

## Table of Contents
  
[Title](#Title)  
[Description](#Description)  
[Installation](#Installation)  
[Usage](#Usage)  
[Contribution](#Contribution)  
[Test](#Test)  
[Questions](#Questions)    
[License](#License)    
# Title
Tech Blog

# Description
CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

# Installation
"npm start" for running the application.

# Usage
After the CMS-style blog site is open for the first time, it is presented the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in. Clicking on the homepage option it is open the homepage. Clicking on any other links in the navigation it is prompted to either sign up or sign in. Choosing sign up it is prompted to create a username and password, clicking on the sign-up button
user credentials are saved allowing to logging into the site. Revisiting the site at a later time and choose to sign in
it is prompted to enter my username and password. Signing in to the site it is shown the navigation links for the homepage, the dashboard, and the option to log out, clicking on the homepage option in the navigation it is open the homepage and presented with existing blog posts that include the post title and the date created. Clicking on an existing blog post it is presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment. Entering a comment and click on the submit button while signed in,
the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created. Clicking on the dashboard option in the navigation it is open the dashboard and presented with any blog posts already created for a user and the option to add a new blog post. Clicking on the button to add a new blog post
it is prompted to enter both a title and contents for my blog post. Clicking on the button to create a new blog post
the title and contents of the post are saved and it is taken back to an updated dashboard with the new blog post. Clicking on one of the existing posts in the dashboard it is able to delete or update my post and taken back to an updated dashboard. Clicking on the logout option in the navigation it is signed out of the site. Idle on the site for more than a set time it is able to view comments but prompted to log in again before I can add, update, or delete comments.

# Contribution
It is necessary to know the basics of Model-View-Controller paradigm, express-handlebars, MySQL2, Sequelize, dotenv package, bcrypt package, express-session and connect-session-sequelize packages to add authentication. You can contribute reporting bugs, suggesting enhacements, pull requests. Best practices for class/id naming conventions, indentation, quality comments, etc.

# Test
For local testing use: "git clone git@github.com:jorgeatcabo/tech-blog.git" and “npm install”. For testing on a deployment URL use: https:///

# Questions
https://github.com/jorgeatcabo

san_lucas2005@yahoo.com

# License
MIT

----
![ScreenShot](.\public\images\tech-blog-screenshot.PNG)