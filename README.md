# Fortune Finder
## **Description Deliverable**

## Elevator Pitch
Fortune cookies can be quite a lot of fun, but sometimes, you don't need to buy food that you won't eat, simply to see the fun message inside. This website replicates the fun and excitement of opening a fortune cookie, without the wasteful nature of individual wrapping, easily lost slips of paper, and cheap cookies, that many don't actually eat. Plus, you can save a few of your favorite fortunes to keep the fun going!


## Design

<img width="1106" alt="Screenshot 2023-09-23 at 14 14 40" src="https://github.com/jarobinson-121/CS260-Startup/assets/91813271/8adb309a-2014-4097-b699-f4b487fd2b7f">

### Key Features
- Authentication
- Ability to request a new fortune
- Ability to save a limited number of favorite fortunes
- Ability to see saved fortunes

### Technology Usage

I will be using each of the technologies in the following ways. 

#### **HTML** 
  - Correct HTML structure
  - Four HTML Pages
    * Login
    * Fortune Generation
    * Landing Page
    * Saved Fortunes

#### **CSS**
  - Styling to add:
    * Whitespace
    * Colors
    * General Spacing

#### **Javascript**
  - Launch Fortune generator
  - Save Fortune(s)
  - Log in
  - Endpoint calls

#### **Service**
  - Backend service with the endpoints for:
      * Authentication
      * Pulling fortunes
      * Saving fortunes to user

#### **DB**
  - Store user information, including saved fortunes

#### **Login**
  - Register and login users
  - Secure storage of user info
  - Cannot save fortunes without authentication

#### **Websocket**
  - Display lucky numbers
  - Display most popular fortunes

#### **React**
  - Ported to using React framework


## **HTML Deliverable**
For this deliverable, I built out the application's structure using HTML. More detailed descriptions below. 

  * **HTML Pages:**  Five HTML pages to display Home page, login page, fortune generation landing page, open fortune page, and saved fortunes.
  * **Links:** Each page has a menu to link to the other major pages, as well as a sign in button on most pages to link you to the sign in screen. The My Favorites link goes to the sign in page to ensure that the user would be signed in. 
  * **Text:** The fortunes that are generated and displayed are text. The top 3 fortunes are also displayed as text. 
  * **Images:** I added images for three of the pages. They will need some CSS styling to place the fortune on top of the picture and the logo centered on top of the picture on the home page. 
  * **Login:** Sign in page with input fields for username and password to allow access to saved fortunes.
  * **Database:** The generated fortune will be pulled from the database.
  * **Websocket:** The top 3 fortunes represent the tallied votes with the most saves. 


## **CSS Deliverable**
For this deliverable, I properly styled the application for its launch appearance.

  * **Headers, Footers, and Body:**  Updated looks with indication as to which page you are currently viewing. 
  * **Navigations Elements:** The nav bar is now an actual bar with links to each page. The navigation buttons on each page are also correctly styled. 
  * **Responsive to Resizing:** Some windows are properly resizable. 
  * **Application elements:** There is good color contrast and spacing throughout the application.
  * **Text Content:** Fonts are included and consistent throughout the application.
  * **Images:** Images have been styled, including adding images as backgrounds and in the hero image. 
