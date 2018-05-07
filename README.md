

![Telerik Alpha JS - Final Project](https://vignette.wikia.nocookie.net/marveldatabase/images/8/8f/Stark_Industries_logo.png/revision/latest?cb=20150108032438)

------
This is a MariaDB, Express, Angular and Node.js single page application done as the final project for Telerik Academy Alpha JS course. The application is Stark Industries' company web page. 
The structure of the application is:
**Visible to all users:**
1. Home Page
2. Careers Page - listing all available jobs
3. Contacts Page - listing conatact information for the company

**Visible Only to Administrators:**
1. Users Page - listing all registered users
1. Job Ads Page - listing all job ads,  giving the admin the ability to  create/update/delete a job ad.
1. Job Ad's Applications page - listing all applications for a given job ad
1. Links Page - listing link buttons on the home page, they can be 2 types socail and link buttons,  giving the admin the ability to create/update/delete a link.
1. Conatcs - listing all contacts, giving the admin the ability to create/update/delete a contact.

# Table of Contents

1. [Getting Started](#gettingStarted)
2. [Prerequisites](#Prerequisites)
3. [Usage](#usage)
4. [Above and beyond](#AboveAndBeyond)
5. [Authors](#authors)
6. [License](#license)
7. [Acknowledgments](#Acknowledgments)

## Getting Started <a name="gettingStarted"></a>
To get a copy of the project running on your local machine for development and testing purposes you will need to clone the repository into a brand new folder on your machine and navigate to the backend folder and run:
```
npm install
```
Then navigate to frontend folder then navigate to the client folder and run:
```
npm install
```
After all the dependancies are downloaded ensure that you have MariaDB service up and running and create a database named starkindustriesdb. This can be changed in the config.json file inside the db folder. From the backend folder, you need to enter the db folder and run the following commands to init the database and add the migrations and the seeds:
```
cd db/   (to change to the db folder)
../node_modules/.bin/sequelize db:migrate
../node_modules/.bin/sequelize db:seed:all
cd ..  (to change back to the root folder)
```
Locally the app is set up to work on port 8000. to run the backend server from the folder backend use the command:
```
node server.js
```
Now it's time to run the frontend. Navigate to frontend folder and in the terminal use the command:
```
ng serve -o
```
This will open your default browser. The app will be running on port 4200.
Please esnure that both the backend server and the frontend are running.
Voalá!!
## Prerequisites <a name ="Prerequisites"></a>

The only mandatory requirement for installing the project is [Node Js](https://nodejs.org/dist/v8.11.1/node-v8.11.1-x64.msi). The rest of the dependancies are installed via the command:

```
npm install
```
in the respective folders frontend and backend.

## Usage <a name ="Usage"></a>
==NB: Normally codes such as environment variables, API Keys, database passwords etc would not be uploaded to github, however as this is a final project for a course and may need to be scored remotely, we have left the information visible to everyone==

To be able to experience the app's full capabilities, you will need to login with Tony Stark's credentials.
Navigate to the login page and use the following credentials:
```
Username: TonyStark
Password: 123456
```
When you are logged you can see job listings when you click on **Careers** button , there you can find your wanted job in **Stark Industries**. If you click on the job title you will see job description. There you have the option to **APPLY** for this job. When **apply** button is clicked you will have to add comment, upload CV and Cover Letter and **Admins** will be able to see/download your documents.

**Contacts** butoon will show you where Star Industries are placed and also you will be albe to find contact info - how to get in contact with Stark Industries.

If you are logged in like **Admin** you will be able to see all registered users on the admin panel.

 You will be albe also to see all listed (active/closed) jobs , to **CREATE/EDIT/DELETE** jobs , also you can click **VIEW** where you can see who applied for this job. 

You can see **Contacts** page where you can operate with the contacts and to **CREATE/EDIT/DELETE** new contact or to change older one. 

You have access to **Links** page where you can operate with the active link on the landing page. Again you have permission to **CREATE/EDIT/DELETE**.

## What we did about and beyond <a name ="AboveAndBeyond"></a>
- [x] Well structured BackEnd
- [x] Well structured and seeded Database
- [x] Smooth and eye pleasing routing animations
- [x] Smooth and eye pleasing login/register forms
- [x] Mindblowing home page
- [x] Stark Industries Twitter page
- [x] Admin's can email users with one click of the mouse
- [x] It is responsive on hologram phones ;)
- [x] The **create/edit contact page** has a live preview
- [x] All icons are generated automatically by putting the name of the icon in the input filed
- [x] Scripts for Linux for easier usage
- [x] Cool and detailed ReadMe file

## Authors<a name ="authors"></a>

George Vasilev  - [Vasilev07](#https://github.com/Vasilev07)
Vladimir Tumbev - [VladimirTumbev](#https://github.com/VladimirTumbev)

## License<a name ="license"></a>

This project is licensed under the MIT License

  

Copyright 2018

  

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Acknowledgments<a name ="Acknowledgments"></a>

**Hat tip to**: 
+ Teo and Yana from HoneyBee
+ Kalin and Marto Donevski from Tick42
+ Telerik Academy trainers
+ **MARTO VESHEV**
 