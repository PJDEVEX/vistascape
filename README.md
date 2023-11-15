<h1 align="center">VistaScape</h1>

[View the live project here.](herekulink)

Vistascape is envisioned as a community-oriented platform where individuals can share their passion for photography and visual arts by showcasing their work and engaging with others.

<h2 align="center"><img src="add am I responsive"></h2>

## User Experience (UX)

-   ### User stories

|Epic|Epic #|as|I want to|so that I can|Mapping API Feature|UI Components|Iteration|Story points|
|:----|:----|:----|:----|:----|:----|:----|:----|:----|
|Navigation & Authentication|8|user|register for an account|have a personal profile with a picture|dj-rest-auth, Create profile (signals)|SignUpForm, ProfilePage, ProfileEditForm|1|8|
|Navigation & Authentication|8|user|register for an account|create, like and comment on posts|Create post, Create comment, Create like|Post, PostPage, Comment|1|8|
|Navigation & Authentication|8|user|register for an account|follow users|Create follower|Profile, ProfilePage|1|8|
|Navigation & Authentication|8|user|view a navbar|navigate easily between pages|root url enpoints|Navbar|1|8|
|Navigation & Authentication|8|user|navigate through the pages quickly|view content seamlessly| |single page application|1|3|
|Navigation & Authentication|8|user|sign in to the app|access the functionality of logged in user|login/ dj-rest auth/ access refresh tokens|login |1|3|
|Navigation & Authentication|8|user|tell if I am logged in or not|log in if needed|login/ dj-rest auth/ access refresh tokens|Navbar, log in, Avatar, Profile, status indicator|1|3|
|Navigation & Authentication|8|logged out user|sign in and sign out options|sign in/ up|sign up/login/ dj-rest auth/ access refresh tokens|Navbar, avatar, login, sign up|1|3|
|Posts page|10|visitor|view a list of posts|browse the most recent uploads|List/ Filter posts|PostsPage|1|5|
|Post page|11|visitor|view an individual post|see user feedback, i.e. likes and read comments|Retrieve post|Post, PostPage|1|5|
|Posts page|11|visitor|search a list of posts|find a post by a specific user or a title|List/ Filter posts|PostsPage|1|8|
|Posts page|11|visitor|scroll through a list of posts|browse the site more comfortably|List/ Filter posts|InfiniteScrollComponent|1|8|
|Post page|11|user|edit and delete my post|correct or hide any mistakes|Update property, Destroy property|PostEditForm, MoreDropdownMenu|1|5|
|Post page|11|user|create a post|share my moments with others|Create post|PostCreateForm|1|5|
|Adding and Liking Posts|9|user|view liked posts|go back often to my favorite posts|List/ Filter posts|PostsPage|1|3|
|Adding and Liking Posts|9|user|view followed users' posts|keep up with my favorite users' moments|List/ Filter posts|PostsPage|1|3|
|Adding and Liking Posts|9|user|like a post|express my interest in someone's shared moment|Create like|Post like icon|1|5|
|Adding and Liking Posts|9|user|unlike a post|express that my interest in someone's shared moment has faded away|Destroy like|Post (un) like icon|1|3|
|comments|25|user|create a comment|share my thoughts on other people's content|Create comment|PostPage, CommentCreateForm|1|5|
|comments|25|user|edit and delete my comment|correct or hide any mistakes|Update comment, Destroy comment|PostPage, Comment, MoreDropdownMenu|1|3|
|comments|25|user |how long ago a comment was made|know how old a comment is|humasnise comment time|comment_time|1|8|
|comments|25|user|read comments|what other users think about he posts|view comment|comment|1|3|
|Profile page|12|user|view a profile|see a user's recent posts + post, followers, following count data|Retrieve profile, List/ filter posts|ProfilePage, Post|1|3|
|Profile page|12|user|edit a profile|update my profile information|Update profile|ProfileEditForm|1|5|
|Profile page|12|user|list of most followed profiles|wich profile is popoular|count profile follow|Profile list|1|8|
|Profile page|12|user|view statistics about specific user|learn about them|profile, posts, follow|profile list|1|5|
|followers|24|user|follow a profile|express my interest in someone's content|Create follower|Profile follow button|1|5|
|followers|24|user|unfollow a profile|express that my interest in someone's content has faded away and remove their posts from my feed|Destroy follower|Profile (un) follow button|1|3|

-   ### Design
    -   #### Colour Scheme
        -   The two main colours used are Code Insititue red, and white.
    -   #### Typography
        -   The Montserrat font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. Montserrat is a clean font used frequently in programming, so it is both attractive and appropriate.
    -   #### Imagery
        -   Imagery is important. The large, background hero image is designed to be striking and catch the user's attention. It also has a modern, energetic aesthetic.

*   ### Wireframes

    -   Home Page Wireframe - [View](https://github.com/)

    -   Mobile Wireframe - [View](https://github.com/)

    -   Contact Us Page Wireframe - [View](https://github.com/)

## Features

-   Responsive on all device sizes

-   Interactive elements

## Entity Relationship Diagram
![ERD](https://res.cloudinary.com/pjdevex/image/upload/v1699310334/vistascape/vistascape-api-erd_j1y6pd.png)

## Detailed page and component breakdown:

![lucidchart](https://res.cloudinary.com/pjdevex/image/upload/v1699308106/vistascape/vistascape-component-map_wdx0mb.png)

## Models and CRUD breakdown
| model     | endpoints                    | create        | retrieve | update | delete | filter                   | text search |
| --------- | ---------------------------- | ------------- | -------- | ------ | ------ | ------------------------ | ----------- |
| users     | users/<br>users/:id/         | yes           | yes      | yes    | no     | no                       | no          |
| profiles  | profiles/<br>profiles/:id/   | yes (signals) | yes      | yes    | no     | following<br>followed    | name        |
| likes     | likes/<br>likes/:id/         | yes           | yes      | no     | yes    | no                       | no          |
| comments  | comments/<br>comments/:id/   | yes           | yes      | yes    | yes    | post                     | no          |
| followers | followers/<br>followers/:id/ | yes           | yes      | no     | yes    | no                       | no          |
| posts     | posts/<br>posts/:id/         | yes           | yes      | yes    | yes    | profile<br>liked<br>feed | title       |

|Authentication|Method|Endpoint|Expected value|
|:----|:----|:----|:----|
|Registration|POST|“dj-rest-auth/registration/”|username password1 password2|
|Login|POST|“dj-rest-auth/login/”|username password|
|Logout|POST|“dj-rest-auth/logout/”| |
|User|GET|“dj-rest-auth/logout/”| |
|Refresh token|POST|“dj-rest-auth/refresh/”|refresh token|
|Change password|POST|“dj-rest-auth/password/change/”|new_password1 new_password2|


## Most reused components:

- PostsPage:
  - Home, Feed, Liked
- Post:
  - PostsPage
- Profile:
  - PopularProfiles, PopularProfiles (mobile)
- DropdownMenus:
  - Post, ProfilePage, Comment
- InfiniteScrollComponent:
  - PostPage (loading Comment components)
  - PostsPage (loading all, feed or liked Post components)
  - ProfilePage (loading Post components that belong to the profile)

## Deployment steps
- set the following environment variables:
    - CLIENT_ORIGIN
    - CLOUDINARY_URL
    - DATABASE_URL
    - DISABLE_COLLECTSTATIC
    - SECRET_KEY
- installed the following libraries to handle database connection:
    - psycopg2
	- dj-database-url
- configured dj-rest-auth library for JWTs
- set allowed hosts
- configured CORS:
	- set allowed_origins
- set default renderer to JSON
- added Procfile with release and web commands
- gitignored the env&#46;py file
- generated requirements.txt
- deployed to Heroku


- add prebuild script
- add Procfile
- remove all console.logs
- use Bootstrap default imports to minimize the build
- deploy to Heroku

## Tests:

### Backend
- Posts app:
    - logged out users can list posts
    - logged in users can create a post
    - logged out users can't create a post
    - logged out users can retrieve a post with a valid id
    - logged out users can't retrieve a post with an invalid id
    - logged in users can update a post they own
    - logged in users can't update a post they don't own


### Frontend
#### Automated:

- used the msw library to mock user and logout endpoints
- tested the NavBar component:
  - renders without a problem
  - renders the link to a user profile for a logged in user
  - renders the sign in and sign up buttons again on logout

#### Manual:

- every other feature tested extensively

## Libraries, contexts and hooks:

- react-infinite-scroll-component
  - introduced to replace traditional pagination with lazy loading instead of pagination to make the application more performant and seem more snappy/ engaging
- react-bootstrap:
  - introduced
- contexts:
  - CurrentUserContext exposes the user state to the entire app. Relevant components can subscribe to its changes
  - ProfileDataContext exposes the profile state to the entire app. Enables the PopularProfiles component to be in sync with the ProfilePage contents
- custom hooks written to reduce repeatable state logic:
  - useClickOutsideToggle: enable toggle on the burger menu
  - useRedirect: enable redirect for users who are either logged in or logged out, depending on the use case

---


## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the Social Media icons in the footer to add the float transition while being hovered over.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Titillium Web' font into the style.css file which is used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
    - Photoshop was used to create the logo, resizing images and editing photos for the website.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/) during the design process.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/)

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the organisation.

        1. Upon entering the site, users are automatically greeted with a clean and easily readable navigation bar to go to the page of their choice. Underneath there is a Hero Image with Text and a "Learn More" Call to action button.
        2. The main points are made immediately with the hero image
        3. The user has two options, click the call to action buttons or scroll down, both of which will lead to the same place, to learn more about the organisation.

    2. As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to find content.

        1. The site has been designed to be fluid and never to entrap the user. At the top of each page there is a clean navigation bar, each link describes what the page they will end up at clearly.
        2. At the bottom of the first 3 pages there is a redirection call to action to ensure the user always has somewhere to go and doesn't feel trapped as they get to the bottom of the page.
        3. On the Contact Us Page, after a form response is submitted, the page refreshes and the user is brought to the top of the page where the navigation bar is.

    3. As a First Time Visitor, I want to look for testimonials to understand what their users think of them and see if they are trusted. I also want to locate their social media links to see their following on social media to determine how trusted and known they are.
        1. Once the new visitor has read the About Us and What We Do text, they will notice the Why We are Loved So Much section.
        2. The user can also scroll to the bottom of any page on the site to locate social media links in the footer.
        3. At the bottom of the Contact Us page, the user is told underneath the form, that alternatively they can contact the organisation on social media which highlights the links to them.

-   #### Returning Visitor Goals

    1. As a Returning Visitor, I want to find the new programming challenges or hackathons.

        1. These are clearly shown in the banner message.
        2. They will be directed to a page with another hero image and call to action.

    2. As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.

        1. The navigation bar clearly highlights the "Contact Us" Page.
        2. Here they can fill out the form on the page or are told that alternatively they can message the organisation on social media.
        3. The footer contains links to the organisations Facebook, Twitter and Instagram page as well as the organization's email.
        4. Whichever link they click, it will be open up in a new tab to ensure the user can easily get back to the website.
        5. The email button is set up to automatically open up your email app and autofill there email address in the "To" section.

    3. As a Returning Visitor, I want to find the Facebook Group link so that I can join and interact with others in the community.
        1. The Facebook Page can be found at the footer of every page and will open a new tab for the user and more information can be found on the Facebook page.
        2. Alternatively, the user can scroll to the bottom of the Home page to find the Facebook Group redirect card and can easily join by clicking the "Join Now!" button which like any external link, will open in a new tab to ensure they can get back to the website easily.
        3. If the user is on the "Our Favourites" page they will also be greeted with a call to action button to invite the user to the Facebook group. The user is incentivized as they are told there is a weekly favourite product posted in the group.

-   #### Frequent User Goals

    1. As a Frequent User, I want to check to see if there are any newly added challenges or hackathons.

        1. The user would already be comfortable with the website layout and can easily click the banner message.

    2. As a Frequent User, I want to check to see if there are any new blog posts.

        1. The user would already be comfortable with the website layout and can easily click the blog link

    3. As a Frequent User, I want to sign up to the Newsletter so that I am emailed any major updates and/or changes to the website or organisation.
        1. At the bottom of every page their is a footer which content is consistent throughout all pages.
        2. To the right hand side of the footer the user can see "Subscribe to our Newsletter" and are prompted to Enter their email address.
        3. There is a "Submit" button to the right hand side of the input field which is located close to the field and can easily be distinguished.

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Known Bugs

-   On some mobile devices the Hero Image pushes the size of screen out more than any of the other content on the page.
    -   A white gap can be seen to the right of the footer and navigation bar as a result.
-   On Microsoft Edge and Internet Explorer Browsers, all links in Navbar are pushed upwards when hovering over them.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

-   The full-screen hero image code came from this [StackOverflow post](https://stackoverflow.com)

-   [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.

-   [MDN Web Docs](https://developer.mozilla.org/) : For Pattern Validation code. Code was modified to better fit my needs and to match an Irish phone number layout to ensure correct validation. Tutorial Found [Here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel#Pattern_validation)

### Content

-   All content was written by the developer.

-   Psychological properties of colours text in the README.md was found [here](http://www.colour-affects.co.uk/psychological-properties-of-colours)

### Media

-   All Images were created by the developer.

### Reference

- [Markdown Converter](https://markdown-convert.com/en/tool/table)
- [Colour Contrast Check](https://snook.ca/technical/colour_contrast/colour.html#fg=DDDDDD,bg=05896D)
- [Logo Desing](https://www.canva.com/)
- [Remove Background](https://www.remove.bg/upload)
- [Favicon converter](https://favicon.io/favicon-converter/)

### Acknowledgements

-   My Mentor for continuous helpful feedback.

-   Tutor support at Code Institute for their support.