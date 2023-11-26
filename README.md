<h1 align="center">VistaScape</h1>

[View the live project here.](https://vistascape-81a5fa181ce9.herokuapp.com/)

Vistascape is envisioned as a community-oriented platform where individuals can share their passion for photography and visual arts by showcasing their work and engaging with others.

[<h2 align="center"><img src="https://res.cloudinary.com/pjdevex/image/upload/v1700934343/vistascape/amIresponseive/vistascape_sm4av8.png"></h2>](https://vistascape-81a5fa181ce9.herokuapp.com/)

<!-- TOC -->

- [**Planning Phase**](#planning-phase)
  - [**Strategy**](#strategy)
      - [User Goals](#user-goals)
      - [Owner Goals](#owner-goals)
    - [Opportunities:](#opportunities)
  - [**Scope**](#scope)
  - [**Scope Analysis**](#scope-analysis)
  - [**Structure**](#structure)
  - [User Experience (UX)](#user-experience-ux)
    - [User stories](#user-stories)
  - [**Skeleton**](#skeleton)
    - [Design](#design)
      - [Colour Scheme](#colour-scheme)
      - [Typography](#typography)
    - [Wireframes](#wireframes)
    - [**Database Schema**](#database-schema)
  - [Features](#features)
    - [**Site Navigation**](#site-navigation)
      - [**Navbar**](#navbar)
      - [***Signup:***](#signup)
      - [***Signin:***](#signin)
    - [Detailed page and component breakdown:](#detailed-page-and-component-breakdown)
    - [Models and CRUD breakdown](#models-and-crud-breakdown)
    - [Most reused components:](#most-reused-components)
  - [Deployment steps](#deployment-steps)
    - [Bugs](#bugs)
  - [Tests:](#tests)
    - [Backend Testings](#backend-testings)
    - [Frontend](#frontend)
      - [Automated Testing:](#automated-testing)
      - [Manual Testing:](#manual-testing)
  - [Libraries, contexts and hooks:](#libraries-contexts-and-hooks)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks, Libraries \& Programs Used](#frameworks-libraries--programs-used)
    - [Backend](#backend)
    - [Frontend](#frontend-1)
    - [Further Testing](#further-testing)
    - [Code Formatting with Prettier in ReactJS - ](#code-formatting-with-prettier-in-reactjs---)
      - [Installation](#installation)
      - [Formatting Scripts](#formatting-scripts)
      - [Usage](#usage)
      - [Editor Integration](#editor-integration)
    - [Known Bugs](#known-bugs)
    - [GitHub Pages](#github-pages)
    - [Forking the GitHub Repository](#forking-the-github-repository)
    - [Making a Local Clone](#making-a-local-clone)
  - [Credits](#credits)
    - [Code](#code)
    - [Content](#content)
    - [Media](#media)
    - [Reference](#reference)
    - [Acknowledgements](#acknowledgements)

<!-- /TOC -->

- [**Planning Phase**](#planning-phase)
  - [**Strategy**](#strategy)
      - [User Goals](#user-goals)
      - [Owner Goals](#owner-goals)
    - [Opportunities:](#opportunities)
  - [**Scope**](#scope)
  - [**Scope Analysis**](#scope-analysis)
  - [**Structure**](#structure)
  - [User Experience (UX)](#user-experience-ux)
    - [User stories](#user-stories)
  - [**Skeleton**](#skeleton)
    - [Design](#design)
      - [Colour Scheme](#colour-scheme)
      - [Typography](#typography)
    - [Wireframes](#wireframes)
    - [**Database Schema**](#database-schema)
  - [Features](#features)
    - [**Site Navigation**](#site-navigation)
      - [**Navbar**](#navbar)
      - [***Signup:***](#signup)
      - [***Signin:***](#signin)
    - [Detailed page and component breakdown:](#detailed-page-and-component-breakdown)
    - [Models and CRUD breakdown](#models-and-crud-breakdown)
    - [Most reused components:](#most-reused-components)
  - [Deployment steps](#deployment-steps)
    - [Bugs](#bugs)
  - [Tests:](#tests)
    - [Backend Testings](#backend-testings)
    - [Frontend](#frontend)
      - [Automated Testing:](#automated-testing)
      - [Manual Testing:](#manual-testing)
  - [Libraries, contexts and hooks:](#libraries-contexts-and-hooks)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks, Libraries \& Programs Used](#frameworks-libraries--programs-used)
    - [Backend](#backend)
    - [Frontend](#frontend-1)
    - [Further Testing](#further-testing)
    - [Code Formatting with Prettier in ReactJS - ](#code-formatting-with-prettier-in-reactjs---)
      - [Installation](#installation)
      - [Formatting Scripts](#formatting-scripts)
      - [Usage](#usage)
      - [Editor Integration](#editor-integration)
    - [Known Bugs](#known-bugs)
    - [GitHub Pages](#github-pages)
    - [Forking the GitHub Repository](#forking-the-github-repository)
    - [Making a Local Clone](#making-a-local-clone)
  - [Credits](#credits)
    - [Code](#code)
    - [Content](#content)
    - [Media](#media)
    - [Reference](#reference)
    - [Acknowledgements](#acknowledgements)

<!-- END toc -->

# **Planning Phase**
## **Strategy** 

**Vision:**
"Capture. Connect. Create."

**Buyer Persona:**
Name: Emma

Meet Emma, a photography enthusiast on Vistascape. She seeks diverse visual inspirations, values constructive feedback, and dreams of connecting with a vibrant creative community. Emma's goal: Showcase her portfolio, engage in themed challenges, and find inspiration to fuel her passion. #VistascapeVisionary


**Pain Points:** 
- Limited exposure to diverse visual inspirations; seeking broader perspectives.
- Feeling isolated; desires stronger connections with like-minded photographers.
- Craving constructive feedback for personal growth in photography skills.
- Struggling to find a platform to showcase and organize a photography portfolio.
- Yearning for more engaging and themed challenges to fuel creative inspiration.

**Brand Identity**
Vistascape: Capturing Connections, Creating Visions

**Brand Promise:** 
At Vistascape, we promise to be the vibrant hub where passion meets pixels. We are committed to providing a platform where every visual storyteller finds inspiration, connects with a like-minded community, and grows creatively through constructive feedback and engaging challenges.

**Brand Personality:** <br>
***Inclusive and Inspiring:*** Vistascape is a welcoming space that celebrates diversity in visual arts. We inspire and uplift, fostering a sense of belonging for all creators.

***Dynamic and Collaborative:*** We embrace change and innovation, constantly evolving to meet the dynamic needs of our creative community. Collaboration is at the heart of what we do.

***Encouraging and Supportive:*** Vistascape is more than a platform; it's a support system. We encourage every artist to explore, learn, and grow, providing the nurturing environment needed for creative expression.

**Tagline:**

***"Capture. Connect. Create."***


**Visual Identity:**
Logo: The logo should reflect the brand essence of Capture. Connect. Create. The logo could feature an abstract icon that represents the idea of "capture" and a modern, Italic font for the brand name.
![Vitascape](https://res.cloudinary.com/pjdevex/image/upload/v1700119289/vistascape/logo/logo_ms4lwm.png)

Color Palette:
Minimalist and chaming, Vistascape's palette blends earthy greens, inspiring blues, and muted grays, creating a visually appealing and inclusive atmosphere. 🌈 #VistascapeHues. Pls find the colors in [variables.css](https://github.com/PJDEVEX/vistascape/blob/main/frontend/src/styles/variables.css) file.

The below table provides a clear and concise overview of the color palette used in Vistascape, enhancing readability and allowing readers to expand details if needed.

| Variable                      | Color Code    | Color Sample   |
| ----------------------------- | ------------- | --------------- |
| `--brand-color`               | #05896d       | ![Color Sample](https://via.placeholder.com/20/05896d/05896d?text=+) |

<details>
<summary>Text Colors</summary>

| Variable                      | Color Code    | Color Sample   |
| ----------------------------- | ------------- | --------------- |
| `--text-color-dark`           | #f8f8f8       | ![Color Sample](https://via.placeholder.com/20/f8f8f8/f8f8f8?text=+) |
| `--text-color-light`          | #555          | ![Color Sample](https://via.placeholder.com/20/555/555?text=+) |
| `--text-secondary-color-light`| #000          | ![Color Sample](https://via.placeholder.com/20/000/000?text=+) |
| `--text-color-muted`          | #c1c1c5       | ![Color Sample](https://via.placeholder.com/20/c1c1c5/c1c1c5?text=+) |
</details>

<details>
<summary>Background Colors</summary>

| Variable                      | Color Code    | Color Sample   |
| ----------------------------- | ------------- | --------------- |
| `--background-dark`           | #18191a       | ![Color Sample](https://via.placeholder.com/20/18191a/18191a?text=+) |
| `--background-light`          | #f0f2f5       | ![Color Sample](https://via.placeholder.com/20/f0f2f5/f0f2f5?text=+) |
| `--background-secondary-dark` | #3a3b3c       | ![Color Sample](https://via.placeholder.com/20/3a3b3c/3a3b3c?text=+) |
| `--background-secondary-light`| #f8f8f8       | ![Color Sample](https://via.placeholder.com/20/f8f8f8/f8f8f8?text=+) |
</details>

<details>
<summary>Button and Icon Colors</summary>

| Variable                      | Color Code    | Color Sample   |
| ----------------------------- | ------------- | --------------- |
| `--button-text-color-1`       | #f8f8f8       | ![Color Sample](https://via.placeholder.com/20/f8f8f8/f8f8f8?text=+) |
| `--heart-color`               | #f85032       | ![Color Sample](https://via.placeholder.com/20/f85032/f85032?text=+) |
| `--icon-color`                | #cfced3       | ![Color Sample](https://via.placeholder.com/20/cfced3/cfced3?text=+) |
</details>

<details>
<summary>Shadows and Effects</summary>

| Variable                      | Color Code    | Color Sample   |
| ----------------------------- | ------------- | --------------- |
| `--box-shadow`                | #0000001a     | ![Color Sample](https://via.placeholder.com/20/0000001a/0000001a?text=+) |
</details>

<details>
<summary>Links</summary>

| Variable                      | Color Code    | Color Sample   |
| ----------------------------- | ------------- | --------------- |
| `--link-color-light`          | #555          | ![Color Sample](https://via.placeholder.com/20/555/555?text=+) |
| `--link-color-dark`           | #555          | ![Color Sample](https://via.placeholder.com/20/555/555?text=+) |
</details>

<details>
<summary>Borders</summary>

| Variable                      | Color Code    | Color Sample   |
| ----------------------------- | ------------- | --------------- |
| `--boarder-color`             | #f0f1f9       | ![Color Sample](https://via.placeholder.com/20/f0f1f9/f0f1f9?text=+) |
</details>

#### User Goals
- Discover diverse visual inspirations.
- Connect with like-minded photographers.
- Receive constructive feedback on work.
- Showcase personal photography portfolio.
- Participate in themed photo challenges.

#### Owner Goals
- Foster a vibrant creative community.
- Increase user engagement and retention.
- Enhance platform features based on feedback.
- Attract sponsorship and collaborations.
- Ensure a positive and inclusive atmosphere.

### Opportunities:
The was an extended range of features during the brainstorming session for platform. A feasibility table has been used to narrow it down and prioritize the scope of the intended strategy. 

| Opportunity                     | Importance | Viability/Feasibility |
|----------------------------------|------------|-----------------------|
| User Registration               | 5          | 5                     |
| User Profile                    | 5          | 5                     |
| Social Media Integration        | 4          | 3                     |
| Themed Photo Challenges         | 5          | 2                     |
| Feedback Mechanism              | 5          | 5                     |
| Explore Page                    | 4          | 4                     |
| Search Functionality            | 4          | 4                     |
| Edit/Delete Post Functionality  | 4          | 4                     |
| Like/Unlike Post                | 4          | 4                     |
| Comment on Posts                | 4          | 4                     |
| User Profile Editing            | 4          | 4                     |
| Follow/Unfollow Users           | 4          | 4                     |
| Zoom Effect on Post Image       | 3          | 4                     |
| Light/Dark Mode Toggle          | 3          | 4                     |
| Visually Appealing Navbar Hover | 3          | 4                     |
| Truncated Content Display       | 3          | 4                     |
| Share Post Functionality        | 4          | 4                     |
| Update Follow/Unfollow Styling  | 3          | 5                     |
| Enhanced Minimalist Interface    | 4          | 5                     |
| Mobile Responsive Design        | 3          | 4                     |
| Dashboard for User Analytics    | 4          | 3                     |
| Notification System             | 3          | 2                     |
| API for News Updates            | 2          | 2                     |
| Internal Messaging System       | 2          | 2                     |
| Email Integration               | 3          | 2                     |
| Team Management                 | 4          | 2                     |
| Themed Challenges Integration   | 3          | 2                     |
| Constructive Feedback System    | 4          | 2                     |
| Brand Personality Communication | 4          | 3                     |
| Integration with Creative Tools  | 3          | 2                     |
| **Total**                       | **103**    | **104**               |




Based on The above Viability/Feasibility scores, where features with higher scores are considered more viable and feasible to implement. 

## **Scope**

Given the uneven scores provided above, there will inevitably be some compromises and trade-offs to be made. However, We anticipate that additional trade-offs will be necessary in the future due to the project's time constraints.

We have further divided this table into three categories to help prioritize the order of importance and clarify the MVP required to launch as a basic proof of concept while meeting the above objective. 

## **Scope Analysis**

Given the diverse features and their respective scores, prioritization is crucial for efficient project management. We've categorized the features into three groups to guide the development process.

* **Must-Have (Critical for MVP):**
    * User Registration
    * User Profile
    * Explore Page
    * Feedback Mechanism
    * Edit/Delete Post Functionality
    * Like/Unlike Post
    * Comment on Posts
    * User Profile Editing
    * Follow/Unfollow Users
    * Share Post Functionality
    * Enhanced Minimalist Interface
    * Update Follow/Unfollow Styling
    * Visually Appealing Navbar Hover
    * Truncated Content Display

* **Should-Have (Important for Enhanced Experience):**
    * Social Media Integration
    * Search Functionality
    * Zoom Effect on Post Image
    * Light/Dark Mode Toggle
    * Mobile Responsive Design
    * Dashboard for User Analytics
    * Brand Personality Communication

* **Nice-to-Have (Consider for Future Iterations):**
    * Internal Messaging System
    * Notification System
    * API for News Updates
    * Themed Challenges Integration
    * Constructive Feedback System
    * Integration with Creative Tools
    * Themed Photo Challenges

Balancing the must-haves with the should-haves will ensure a strong MVP, while considering the nice-to-haves for future iterations aligns with an agile and adaptive development approach.
 
## **Structure**

- **Navigation & Authentication:** The system requires users to authenticate using a username and password to access restricted areas of the site.

- **Profile:**
  - *Create:* Users can create their profile, adding details and a profile picture.
  - *View:* Users can see their profile with a list of posts, followers, and following count.
  - *Edit Username:* Users can modify their displayed username.
  - *Edit Password:* Users have the option to update their login credentials.
  - *Edit Profile:* Users can edit additional information on their profile.

- **Posts:**
  - *Create:* Users can create new posts to share their photography.
  - *View:* Users can see a list of posts with options to like, comment, and view individual posts.
  - *Edit:* Users have the ability to edit the content of their posts.
  - *Delete:* Users can delete their posts.
  - *List View:* A structured view of posts is available for easy navigation.

- **Liked:**
  - *Like:* Users can express interest in posts by liking them.
  - *View:* Users can see a list of posts they have liked.
  - *Unlike:* Users can remove their like from a post.

- **Comments:**
  - *Create:* Users can add comments to posts.
  - *View:* Users can read comments on posts.
  - *Edit:* Users can edit the content of their comments.
  - *Delete:* Users can delete their comments.

- **Search:** Users have the ability to search for specific posts, users, or themes.

- **Logout:** When users decide to leave the site, they can log out to ensure secure access and protect sensitive information.


## User Experience (UX)

Based on 8 epics, the user storeis were created for the proejct. Pls visit the the [Kanban Board - Vistascape - Phase I](https://github.com/users/PJDEVEX/projects/8) for details.

### User stories

This project focuses on developing a vibrant photography platform, Vistascape, with key features spanning user navigation, authentication, profile management, post creation and interaction, follower relationships, and an enhanced user interface. The roadmap prioritizes a seamless user experience, engagement, and visual appeal, aligning with the platform's vision of "Capture. Connect. Create."

This user story breakdown serves as a comprehensive guide for the development journey. Prioritizing must-have features in the initial iterations ensures a robust Minimum Viable Product (MVP). Subsequent iterations will introduce enhancements and additional functionalities based on user feedback and evolving requirements.

<details>
  <summary><b>Epic: Navigation & Authentication</b></summary>

  |Epic #|as|I want to|so that I can|Mapping API Feature|UI Components|Iteration|Story points|
  |:----|:----|:----|:----|:----|:----|:----|:----|
  |8|user|register for an account|have a personal profile with a picture|dj-rest-auth, Create profile (signals)|SignUpForm, ProfilePage, ProfileEditForm|1|8|
  |8|user|register for an account|create, like and comment on posts|Create post, Create comment, Create like|Post, PostPage, Comment|1|8|
  |8|user|register for an account|follow users|Create follower|Profile, ProfilePage|1|8|
  |8|user|view a navbar|navigate easily between pages|root url enpoints|Navbar|1|8|
  |8|user|navigate through the pages quickly|view content seamlessly| |single page application|1|3|
  |8|user|sign in to the app|access the functionality of logged in user|login/ dj-rest auth/ access refresh tokens|login |1|3|
  |8|user|tell if I am logged in or not|log in if needed|login/ dj-rest auth/ access refresh tokens|Navbar, log in, Avatar, Profile, status indicator|1|3|
  |8|logged out user|sign in and sign out options|sign in/ up|sign up/login/ dj-rest auth/ access refresh tokens|Navbar, avatar, login, sign up|1|3|

</details>

<details>
  <summary><b>Epic: Profile Page</b></summary>

  |Epic #|as|I want to|so that I can|Mapping API Feature|UI Components|Iteration|Story points|
  |:----|:----|:----|:----|:----|:----|:----|:----|
  |12|user|view a profile|see a user's recent posts + post, followers, following count data|Retrieve profile, List/ filter posts|ProfilePage, Post|1|3|
  |12|user|edit a profile|update my profile information|Update profile|ProfileEditForm|1|5|
  |12|user|list of most followed profiles|wich profile is popoular|count profile follow|Profile list|1|8|
  |12|user|view statistics about specific user|learn about them|profile, posts, follow|profile list|1|5|

</details>

<details>
  <summary><b>Epic: Posts Page</b></summary>

  |Epic #|as|I want to|so that I can|Mapping API Feature|UI Components|Iteration|Story points|
  |:----|:----|:----|:----|:----|:----|:----|:----|
  |10|visitor|view a list of posts|browse the most recent uploads|List/ Filter posts|PostsPage|1|5|
  |11|visitor|search a list of posts|find a post by a specific user or a title|List/ Filter posts|PostsPage|1|8|
  |11|visitor|scroll through a list of posts|browse the site more comfortably|List/ Filter posts|InfiniteScrollComponent|1|8|

</details>

<details>
  <summary><b>Epic: Post Page</b></summary>

  |Epic #|as|I want to|so that I can|Mapping API Feature|UI Components|Iteration|Story points|
  |:----|:----|:----|:----|:----|:----|:----|:----|
  |10|visitor|view an individual post|see user feedback, i.e. likes and read comments|Retrieve post|Post, PostPage|1|5|
  |10|user|edit and delete my post|correct or hide any mistakes|Update property, Destroy property|PostEditForm, MoreDropdownMenu|1|5|
  |10|user|create a post|share my moments with others|Create post|PostCreateForm|1|5|
  |10|user|experience a zoom effect on the post image when I hover over it|the visual presentation of the post is more engaging and interactive| |PostPage|1|3|
  |10|user| see a truncated version of lengthy content,| quickly glance through posts without being overwhelmed by long text.| |PostPage|1|3|
  |10|logged-in user|share a post|I can spread interesting content with others.|Post |PostPage, whataApp and Email button|1|5|

</details>

<details>
  <summary><b>Epic: Followers</b></summary>

  |Epic #|as|I want to|so that I can|Mapping API Feature|UI Components|Iteration|Story points|
  |:----|:----|:----|:----|:----|:----|:----|:----|
  |24|user|follow a profile|express my interest in someone's content|Create follower|Profile follow button|1|5|
  |24|user|unfollow a profile|express that my interest in someone's content has faded away and remove their posts from my feed|Destroy follower|Profile (un) follow button|1|3|
  |24|user|Update Follow/Unfollow Button Styling|see and interact with a styled Follow/Unfollow button|backend logic for handling follow/unfollow|Follow button, Unfollow button|1|3|

</details>

<details>
  <summary><b>Epic: Comments</b></summary>

  |Epic #|as|I want to|so that I can|Mapping API Feature|UI Components|Iteration|Story points|
  |:----|:----|:----|:----|:----|:----|:----|:----|
  |25|user|create a comment|share my thoughts on other people's content|Create comment|PostPage, CommentCreateForm|1|5|
  |25|user|edit and delete my comment|correct or hide any mistakes|Update comment, Destroy comment|PostPage, Comment, MoreDropdownMenu|1|3|
  |25|user |how long ago a comment was made|know how old a comment is|humansize comment time|comment_time|1|8|
  |25|user|read comments|what other users think about he posts|view comment|comment|1|3|

</details>

<details>
  <summary><b>Epic: Adding and Liking Posts</b></summary>

  |Epic #|as|I want to|so that I can|Mapping API Feature|UI Components|Iteration|Story points|
  |:----|:----|:----|:----|:----|:----|:----|:----|
  |9|user|view liked posts|go back often to my favorite posts|List/ Filter posts|PostsPage|1|3|
  |9|user|view followed users' posts|keep up with my favorite users' moments|List/ Filter posts|PostsPage|1|3|
  |9|user|like a post|express my interest in someone's shared moment|Create like|Post like icon|1|5|
  |9|user|unlike a post|express that my interest in someone's shared moment has faded away|Destroy like|Post (un) like icon|1|3|

</details>

<details>
  <summary><b>Epic: UI-Improvements</b></summary>

  |Epic #|as|I want to|so that I can|Mapping API Feature|UI Components|Iteration|Story points|
  |:----|:----|:----|:----|:----|:----|:----|:----|
  |56|user|have an enhanced still minimalist interface|I can have a pleasing experience|-|Profle Page, Posts Page, PostPage|1|3|
  |56|user|toggle between light and dark mode|customize the appearance| | | | |
  |56|user|experience a visually appealing Navbar hover effect|the navigation is more engaging and responsive|-|NavLink|1|3|

</details>


## **Skeleton**
### Design
#### Colour Scheme
- As outlined in theColor Palette section above, the choice of nature green contributes to a minimalist and charming aesthetic for the platform, complemented by vibrant tones introduced through user posts.
  
#### Typography

- The primary font for the website is [DM Sans](https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&display=swap), with Sans Serif as the fallback. 
- DM Sans, chosen for its cleanliness and relevance in programming, ensures an attractive and suitable text display across the site.

### Wireframes

- Wireframes for authentication, profile, posts, and comments CRUD functionality are created as applicable using Balsamiq. 
- Both mobile and desktop views are covered. 
- [View Wireframe](https://drive.google.com/file/d/1oAoGdhv1BM5vj1wg42pZT5v44RwrMgG0/view?usp=sharing)

### **Database Schema**
We have designed an initial database schema for the project, which can be visualized through the Entity-Relationship Model (ERD) accessible [here](https://drive.google.com/file/d/14RThl9aGjUI9eH8q6jINqOfOXJTNCpt4/view?usp=sharing).


## Features

The key features of the platform includes,

<details>
<summary>Show/Hide Navigation & Authentication</summary>

| Feature                                     | Description                                                             |
|---------------------------------------------|-------------------------------------------------------------------------|
| Navigation & Authentication                 | - User registration for account creation and access to personal profile |
|                                             | - Ability to create, like, and comment on posts                         |
|                                             | - User follow functionality                                             |
|                                             | - Navbar for easy navigation between pages                              |
|                                             | - Single-page application for seamless content viewing                  |
|                                             | - User login with access and refresh tokens                              |
|                                             | - Visual indication of user login status                                |
|                                             | - Sign-in and sign-out options for logged-out users                     |
</details>

<details>
<summary>Show/Hide Profile & Posts</summary>

| Feature                                     | Description                                                             |
|---------------------------------------------|-------------------------------------------------------------------------|
| Profile Page                                | - View user profiles with recent posts, followers, and following count  |
|                                             | - Edit user profile information                                         |
|                                             | - List of most followed profiles                                        |
|                                             | - Statistics about specific user's activity                             |
| Posts Page                                  | - View a list of posts                                                  |
|                                             | - Search and filter posts by user or title                              |
|                                             | - Infinite scroll for comfortable browsing                               |
</details>

<details>
<summary>Show/Hide Post Details</summary>

| Feature                                     | Description                                                             |
|---------------------------------------------|-------------------------------------------------------------------------|
| Post Page                                   | - View individual posts with likes and comments                          |
|                                             | - Edit and delete user posts                                            |
|                                             | - Create new posts                                                      |
|                                             | - Hover effect on post image for visual engagement                       |
|                                             | - Truncated view for lengthy content to avoid overwhelming text         |
|                                             | - Share posts via WhatsApp and Email                                     |
</details>

<details>
<summary>Show/Hide Followers & Comments</summary>

| Feature                                     | Description                                                             |
|---------------------------------------------|-------------------------------------------------------------------------|
| Followers                                   | - Follow and unfollow user profiles                                     |
|                                             | - Stylish Follow/Unfollow button                                        |
| Comments                                    | - Create, edit, and delete comments on posts                             |
|                                             | - Display comment timestamp in a human-readable format                  |
|                                             | - Read comments to understand user opinions                              |
</details>

<details>
<summary>Show/Hide Adding & Liking Posts</summary>

| Feature                                     | Description                                                             |
|---------------------------------------------|-------------------------------------------------------------------------|
| Adding and Liking Posts                     | - View liked posts and posts from followed users                         |
|                                             | - Like and unlike posts to express interest                              |
</details>

<details>
<summary>Show/Hide UI Improvements</summary>

| Feature                                     | Description                                                             |
|---------------------------------------------|-------------------------------------------------------------------------|
| UI Improvements                             | - Enhanced yet minimalist interface for a pleasing user experience      |
|                                             | - Toggle between light and dark mode for customizable appearance        |
|                                             | - Visually appealing Navbar hover effect for engaging navigation        |
</details>


### **Site Navigation**
#### **Navbar**
The platform incorporates two types of navigation bars to enhance user experience and facilitate efficient navigation:

 - **Navbar:** This navigation bar is designed to provide easy access to different sections and features of the platform. It is typically located at the top of the screen and offers a comprehensive menu of options. The content displayed in the navbar is dynamic and varies based on the user's authorization level and permissions. Users with appropriate authorization can view and access relevant sections and functionalities through this sidebar.

<details>
<summary>Show/Hide Navbar Screenshots</summary>

![Navbar 1](https://res.cloudinary.com/pjdevex/image/upload/v1700964829/vistascape/features/Screenshot_2023-11-26_031156_itsqsq.png)

![Navbar 2](https://res.cloudinary.com/pjdevex/image/upload/v1700964829/vistascape/features/Screenshot_2023-11-26_031247_pea8md.png)

</details>

<br>

- **Toggle navbar for small screens:** To optimize the user experience on smaller screens, such as mobile devices or tablets, a toggle navbar is implemented. This navigation bar is specifically tailored to accommodate limited screen space and offers a condensed menu. Similar to the side navbar, the content displayed in the toggle navbar is also determined based on the user's authorization. It provides a simplified and accessible menu for users to navigate through the platform seamlessly.

<details>
<summary>Show/Hide Togglenav Screenshots</summary>

![Togglenav 1](https://res.cloudinary.com/pjdevex/image/upload/v1700964952/vistascape/features/Screenshot_2023-11-26_031513_jzv8bb.png)

![Togglenav 2](https://res.cloudinary.com/pjdevex/image/upload/v1700964950/vistascape/features/Screenshot_2023-11-26_031534_rnafu9.png)

</details>

<br>

The utilization of these two types of navbars ensures that users can easily explore and interact with the platform's functionalities while adhering to their specific authorization privileges.


- **Logo:**
The logo should reflect the brand essence of Capture. Connect. Create. The logo could feature an abstract icon that represents the idea of "capture" and a modern, Italic font for the brand name.


**Logo**
  
<details>
<summary>Show/Hide Site Logo</summary>

![Site Logo](https://res.cloudinary.com/pjdevex/image/upload/v1700119289/vistascape/logo/logo_ms4lwm.png)

</details>

<br>

**Logo favicon**
  
<details>
<summary>Show/Hide Site Logo Favicon</summary>

![Site Logo favicon](https://raw.githubusercontent.com/PJDEVEX/vistascape/main/frontend/public/favicon.ico)

</details>

<br>

  
#### ***Signup:***
Effortlessly engage users with a sleek signup form on VistScape. Tailored for both large and small screens, our intuitive design ensures a seamless registration experience.

<details>
<summary>Show/Hide Signup Screenshots</summary>

![Signup](https://res.cloudinary.com/pjdevex/image/upload/v1700966137/vistascape/features/Screenshot_2023-11-26_033456_gqeood.png)
![Signup](https://res.cloudinary.com/pjdevex/image/upload/v1700966493/vistascape/features/Screenshot_2023-11-26_034115_ggc3vr.png)

</details>

<br>

#### ***Signin:***
Create a sleek, user-friendly sign-in form for Visitscape. For responsive design, implement both large and small screen signup forms. Enhance user experience with a seamless authentication process.
    
<details>
<summary>Show/Hide Login Screenshots</summary>

![Login Screen 1](https://res.cloudinary.com/pjdevex/image/upload/v1700966692/vistascape/features/Screenshot_2023-11-26_034416_vypckt.png)

![Login Screen 2](https://res.cloudinary.com/pjdevex/image/upload/v1700966693/vistascape/features/Screenshot_2023-11-26_034438_inwsps.png)

</details>
<br>

Supercharge your Vistascape experience with DjangoREST and ReactJS. Explore advanced features showcased in this [Demo Video](https://console.cloudinary.com/console/c-13c5302eab8dd17fc322b5056dfb4b/media_library/folders/c5eb80bfc58916466da56bb0945ccc241b).


### Detailed page and component breakdown:

<details>
<summary>Show/Hide Detailed Page and Component Breakdown</summary>

![Detailed page and component breakdown](https://res.cloudinary.com/pjdevex/image/upload/v1701001442/vistascape/PageAndComponentBreakdown_wxqzjb.jpg)

</details>
<br>

### Models and CRUD breakdown
- The following table provides a comprehensive breakdown of the models used in the application, along with the corresponding CRUD (Create, Retrieve, Update, Delete) operations and endpoints.

- Additionally, a separate table outlines the authentication methods with their respective HTTP methods and endpoints, offering clarity on user registration, login, logout, user retrieval, token refresh, and password change functionalities.

<details>
<summary>Show/Hide Models and CRUD Breakdown</summary>

| model     | endpoints                    | create        | retrieve | update | delete | filter                   | text search |
| --------- | ---------------------------- | ------------- | -------- | ------ | ------ | ------------------------ | ----------- |
| users     | users/<br>users/:id/         | yes           | yes      | yes    | no     | no                       | no          |
| profiles  | profiles/<br>profiles/:id/   | yes (signals) | yes      | yes    | no     | following<br>followed    | name        |
| likes     | likes/<br>likes/:id/         | yes           | yes      | no     | yes    | no                       | no          |
| comments  | comments/<br>comments/:id/   | yes           | yes      | yes    | yes    | post                     | no          |
| followers | followers/<br>followers/:id/ | yes           | yes      | no     | yes    | no                       | no          |
| posts     | posts/<br>posts/:id/         | yes           | yes      | yes    | yes    | profile<br>liked<br>feed | title       |

</details>

<details>
<summary>Show/Hide Authentication Endpoints</summary>

| Authentication   | Method | Endpoint                             | Expected value             |
|:------------------|:-------|:-------------------------------------|:---------------------------|
| Registration     | POST   | “dj-rest-auth/registration/”          | username password1 password2 |
| Login            | POST   | “dj-rest-auth/login/”                 | username password          |
| Logout           | POST   | “dj-rest-auth/logout/”                |                            |
| User             | GET    | “dj-rest-auth/logout/”                |                            |
| Refresh token    | POST   | “dj-rest-auth/refresh/”               | refresh token              |
| Change password  | POST   | “dj-rest-auth/password/change/”       | new_password1 new_password2|

</details>


### Most reused components:
- Explore the core components that form the backbone of our application's user interface.
- Understand the key building blocks, such as PostsPage, Post, Profile, DropdownMenus, and InfiniteScrollComponent, contributing to a cohesive and efficient user experience.

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

- set the following [environment variables](https://res.cloudinary.com/pjdevex/image/upload/v1701028137/vistascape/deployment/envVar_w2phap.png):
    - CLIENT_ORIGIN
    - CLOUDINARY_URL
    - DATABASE_URL
    - DISABLE_COLLECTSTATIC
    - SECRET_KEY
- installed the following libraries to handle database connection:
    - psycopg2
	- dj-database-url
- configured dj-rest-auth library for JWTs
```python
# JWT authentication settings
REST_USE_JWT = True
JWT_AUTH_COOKIE = "my-app-auth"
JWT_AUTH_SECURE = True
JWT_AUTH_REFRESH_COOKIE = "my-refresh-token"
JWT_AUTH_SAMESITE = "None"
```
- set allowed hosts
```python
# Allowed hosts
ALLOWED_HOSTS = [
    "8000-pjdevex-vistascape-wchpq7ef3fd.ws-eu106.gitpod.io",
    "127.0.0.1",
    *os.environ.get("ALLOWED_HOSTS", "").split(
        ","
    ),  # Allow multiple hosts from environment variable
]
```
- configured CORS:
	- set allowed_origins
```python
# Configure CORS origins if 'CLIENT_ORIGIN' is present in environment variables
if "CLIENT_ORIGIN" in os.environ:
    CORS_ALLOWED_ORIGINS = [os.environ.get("CLIENT_ORIGIN")]
```

- set default renderer to JSON
```python
# Configure default renderer for non-development environments
if "DEV" not in os.environ:
    REST_FRAMEWORK["DEFAULT_RENDERER_CLASSES"] = [
        "rest_framework.renderers.JSONRenderer"
    ]
```
- added Procfile with release and web commands
```
release: python manage.py makemigrations && python manage.py migrate

web: gunicorn drf_api.wsgi

```

- gitignored the env&#46;py file
```
core.Microsoft*
core.mongo*
core.python*
env.py
__pycache__/
*.py[cod]
node_modules/
.github/
cloudinary_python.txt

```
- Setting up WhiteNoise for static files
```
pip3 install whitenoise==6.4.0
```
- generated requirements.txt
  - Update the file 
```
pip freeze --local > requirements.txt 
or
pip3 freeze > requirements.txt
```
  - To overwrite the existing requirements.txt
 
```
pip3 install -r requirements.txt*
```
  - Create a static file
```bash
mkdir staticfiles
```
  - rearrange Installed apps in settings.py file
    -  ensure that the `cloudinary_storage` app name is below `django.contrib.staticfiles`.
```python

    "django.contrib.messages",
    "django.contrib.staticfiles",
    # 3rd party apps
    "cloudinary_storage",
    "cloudinary",
``` 
  - List whitenoice
    - In the `MIDDLEWARE` list, add `WhiteNoise` below the `SecurityMiddleware` and above the `SessionMiddleware`.

```python
# Django middleware configuration
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
```
- Config Template
    - In the `TEMPLATES` list, add the following code to the `DIRS` key. This informs Django and WhiteNoise about the location of React's `index.html` file during deployment.

```python
# Django template settings
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, 'staticfiles', 'build')],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [

```
  - Static and whitenoise roots
```python
STATIC_ROOT = BASE_DIR / 'staticfiles'
 WHITENOISE_ROOT = BASE_DIR / 'staticfiles' / 'build'
```
Please ref below commit log for details for the above,
```bash
commit 2f9c6cc99c2a85314866a039c233cce75c2f2ecb
Author: Piyankara Jayadewa (PJ) <Piyankara.jayadewa@gmail.com>
Date:   Sun Nov 26 18:26:17 2023 +0000

    Chore: Add WhiteNoise and configure static paths
```

- Adding the route - [drf/urls.py](https://github.com/PJDEVEX/vistascape/blob/main/drf_api/urls.py)
  - **Serve React Frontend from Root URL**
    - Adjust URLs to avoid clashes with DRF
  - **Use TemplateView for Home Page**
    - Handle 404 errors in React application
  - **Prepend API URLs with "/api/"**
    - Update axiosDefaults.js for API requests

Please refer below git log for modifications,
```bash
commit db2919e2a7668374668a64c3a9b2953db799d915
Author: Piyankara Jayadewa (PJ) <Piyankara.jayadewa@gmail.com>
Date:   Sun Nov 26 18:40:54 2023 +0000

    Perf: Update API URLs and axios defaults for consistency
```
- Compiling the static files
  - Compile Django and React static files
  - Use `python3 manage.py collectstatic` for Django
  - Move React files to staticfiles with npm
  - Delete old build folder for subsequent changes

Please refer below git log for modifications,
```bash
gitpod /workspace/vistascape (main) $ git log
commit c466ec645cbb5fba34cfeae512a2d8252ecc0155 (HEAD -> main, origin/main, origin/HEAD)
Author: Piyankara Jayadewa (PJ) <Piyankara.jayadewa@gmail.com>
Date:   Sun Nov 26 18:45:55 2023 +0000

    Update static file
```
- Adding a [runtime.txt](https://github.com/PJDEVEX/vistascape/blob/main/runtime.txt) file.
  - To help Heroku to use correct `python` version. 
  - i.e.`python-3.9.16` 

- Testing the Build
  - Terminate all running servers using Ctrl+C.
  - Comment out DEBUG and DEV in env.py.
  - Run Django server with 'python3 manage.py runserver'.
  - Open preview on port 8000 to check.
  - Confirm React server is not running.
  - Commit changes; ready for Heroku deployment.
  
- deployed to Heroku
 Follow Deployment steps in Django REST Framework
  - Log in to Heroku and access dashboard
  - Open Settings, go to Config Vars
  - Set ALLOWED_HOST without https:// and trailing slash
  - Set CLIENT_ORIGIN with https:// and no trailing slash
  - Update CLIENT_ORIGIN if previously set
  - Deploy from Heroku dashboard's Deploy tab

- deploy to Heroku
  - [Config vars](https://res.cloudinary.com/pjdevex/image/upload/v1701029591/vistascape/deployment/herokuConfigVars_bcrvj2.png)
  - [Heroku Activit Log](https://res.cloudinary.com/pjdevex/image/upload/v1701029726/vistascape/deployment/herokuActivityLog_smbbkj.png)


### Bugs

This section provides details on bug fixes and improvements made to the application. Review the list below for a summary of recent bug-related commits, including their associated issue numbers. Each commit corresponds to a specific bug or issue that has been addressed in the development process.

Please refer to the table for a comprehensive overview of recent bug fixes and their respective issue numbers.

<details>
<summary>Show/Hide Bugs Fixed</summary>

| No. | Commit Message                                     | Issue # |
|-----|----------------------------------------------------|---------|
| 1   | Bug: Incorrect Code Snippet in PostCreateForm.js   | #64     |
| 2   | Bug: Missing Import for Infinite Scroll in ProfilePage.js | #63     |
| 3   | Bug: Error in Post.js due to br tag                | #62     |
| 4   | Bug: Replace Classic with Font Awesome in ColorModeToggle | #61     |
| 5   | Bug: Dropdown Menu Styling Issue                   | #60     |
| 6   | Bug: Dark Mode Not Applied to Spinner              | #59     |
| 7   | Bug: Error in Post Like functionality              | #52     |
| 8   | Bug: Image is Null in Post Details View after Upload | #46     |
| 9   | Bug: Image Validation Error in Post Creation      | #44     |
| 10  | Bug: ProfileDetail serializer_class not defined    | #39     |
| 11  | Bug: Incorrect import in drf_api/urls.py           | #38     |
| 12  | Bug: Incorrect Configuration of DEBUG and ALLOWED_HOSTS | #37     |

</details>

## Tests:

### Backend Testings

- **Summary:**
  - Extensive unit testing was conducted on the Django Rest API backend for the Vistascape project.
  - The testing coverage is limited to the `views.py` files of each app due to time constraints.
  - Each test case aimed to ensure the correctness and reliability of the API endpoints.

- **Tested Views:**
  - Profiles
  - Posts
  - Comments
  - Likes
  - Follows


<details>
<summary>Profiles Tests</summary>

| Test Case # | Test Description                                      |
|-------------|--------------------------------------------------------|
| 1           | Test the list view of profiles.                       |
| 2           | Test the detail view of a profile.                    |
| 3           | Test updating a profile's data via PUT request.       |
| 4           | Test unauthorized user's attempt to update a profile.|
| 5           | Test ordering of profiles.                            |
| 6           | Test filtering profiles based on a condition.         |
| 7           | Test ordering profiles based on the number of followers.|
| 8           | Test that the profile list response contains expected fields.|
| 9           | Test the API returns an empty list when no profiles exist.|
| 10          | Test behavior when a single profile is present in the database.|

</details>

<details>
<summary>Posts Tests</summary>

| Test Case # | Test Description                                   |
|-------------|-----------------------------------------------------|
| 1           | Test listing posts.                                |
| 2           | Test creating a post by a logged-in user.          |
| 3           | Test that an unauthenticated user cannot create a post. |
| 4           | Test the response format and fields for listing posts. |
| 5           | Test that an authenticated user can create a post.  |
| 6           | Test that a user can delete their own post.         |
| 7           | Test retrieving a post using a valid ID.           |
| 8           | Test retrieving a post with an invalid ID returns a 404. |
| 9           | Test that a user can update their own post.         |
| 10          | Test that a user cannot update another user's post. |
| 11          | Test that a user can delete their own post.         |
| 12          | Test that a user cannot delete another user's post. |
| 13          | Test updating a post with an invalid ID returns a 404. |

</details>

<details>
<summary>Comments Tests</summary>

| Test Case # | Test Description                                       |
|-------------|--------------------------------------------------------|
| 1           | `test_can_list_comments`                               |
| 2           | `test_unauthenticated_user_cannot_create_comment`     |
| 3           | `test_authenticated_user_can_create_comment`          |
| 4           | `test_can_retrieve_comment`                            |
| 5           | `test_unauthenticated_user_cannot_update_comment`     |
| 6           | `test_authenticated_user_can_update_own_comment`      |
| 7           | `test_authenticated_user_cannot_update_other_user_comment` |

</details>

<details>
<summary>Likes Tests</summary>

| Test Case # | Test                                              |
|-------------|---------------------------------------------------|
| 1           | Test create like view with a possible duplicate. |
| 2           | Test create like view successfully.               |
| 3           | Test create like view for the same post twice.    |
| 4           | Test delete own like.                             |
| 5           | Test retrieve own like details.                  |
| 6           | Test delete other user's like (forbidden).       |

</details>

<details>
<summary>Follows Tests</summary>

| Test Case # | Test Description                              |
|-------------|-----------------------------------------------|
| 1           | Test the follower list view.                  |
| 2           | Test the creation of a new follower.          |
| 3           | Test the creation of a duplicate follower.    |
| 4           | Test the follower detail view.                |
| 5           | Test the deletion of a follower.              |

</details>



### Frontend
- **Hybrid Testing Approach:**
  - Comprehensive testing was conducted through a hybrid approach, combining both automated and manual testing methodologies.
  - Manual testing was extensively executed, covering almost all aspects of the application, ensuring a thorough evaluation of its functionality.

#### Automated Testing:

  - Frontend automated testing in React involves systematically testing components to ensure they render without errors and behave as expected.
  - Testing focuses on various components such as Avatar, DarkModeToggle, NavBar, and SignInForm to validate their rendering, functionality, and responsiveness.
  - The React testing framework, along with tools like Jest and React Testing Library, empowers developers to automate tests for improved code reliability.
  - Below is a summary of each test case while [ReactTesting.md](https://github.com/PJDEVEX/vistascape/blob/main/ReactTesting.md) gives a detail of each test scenario.

<details>
<summary><strong>Avatar</strong></summary>

| Test Case # | Test Description                                       |
|-------------|--------------------------------------------------------|
| 1           | Test: renders Avatar without any errors               |
|-------------|--------------------------------------------------------|
| 2           | Test: renders Avatar with text                        |


</details>

<details>
<summary><strong>Darkmode Toggle</strong></summary>

| Test Case # | Test                                               |
|-------------|----------------------------------------------------|
| 1           | DarkModeToggle toggles the color mode on click     |

</details>

<details>
<summary><strong>NavBar</strong></summary>

| Test Case # | Test Description |
|-------------|-------------------|
| 1           | Renders NavBar    |
| 2           | Renders link to the user profile for a logged-in user |
| 3           | Renders 'Sign in' and 'Sign up' buttons again on log out |
| 4           | Renders 'Add post' link for a logged-in user |
| 5           | Clicking 'Add post' link navigates to the correct route |
| 6           | Toggling color mode changes the appearance of the NavBar |
| 7           | Toggles the navigation menu on click |
| 8           | Clicking 'Feed' link navigates to the correct route |

</details>

<details>
<summary><strong>SignInForm</strong></summary>

| Test Case # | Test Description                                                 |
|-------------|-------------------------------------------------------------------|
| 1           | Verifies that SignInForm component renders without errors.       |
| 2           | Verifies that form inputs for username and password are updated correctly. |
| 3           | Verifies that the SignInForm component displays error messages when the form is submitted with invalid data. |

</details>

#### Manual Testing:

- Conducted exhaustive manual testing, covering a comprehensive range of features to ensure a thorough evaluation of the application's functionality.
- Detailed testing report is available [here](https://drive.google.com/file/d/1Q6LsUpuu0J3yOe-jsaetnUKZbsGsBEu9/view?usp=sharing), providing insights into the testing process and outcomes.

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

[![Python](https://img.shields.io/badge/Python-3.9.17-blue.svg?logo=python&logoColor=white)](https://www.python.org/downloads/release/python-3917/)

- Backend development for Vistascape using Python 3.9.17 with Django REST Framework.
- Strict adherence to PEP 8 style guide for code consistency.
- Code formatting done using "black" with a line length of 70 characters.
  - Install black using: `pip install black`
  - Format code using: `python -m black -l 70 .`
- Continuous Integration (CI) Python Linter: [pep8ci](https://pep8ci.herokuapp.com/) for additional code validation.
- All code files include docstrings to enhance code readability.
  


[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/) [![JSX](https://img.shields.io/badge/JSX-%23F7DF1E.svg?style=flat-square&logo=javascript&logoColor=white)](https://jsx.example.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)

- Visitscape developed using ReactJS, a JavaScript frontend library by Facebook.
- Utilizes JSX (JavaScript XML), a combination of HTML and JavaScript, following language conventions and guidelines.
- Code formatting maintained using Prettier to ensure consistency and readability.
- Implemented a single command for formatting all .js and .css files in the src folder.
- Refer to [Code Formatting with Prettier in ReactJS](#code-formatting-with-prettier-in-reactjs---prettier-shield-badge) for detailed instructions.



![CSS3 Shield](https://img.shields.io/badge/CSS3-%231572B6?style=for-the-badge&logo=css3) 

- **Language:** CSS3
- **Approach:** Employed [CSS Modules](https://medium.com/@ralph1786/using-css-modules-in-react-app-c2079eadbb87) for organized and encapsulated styling within React components.
- **Files:** Comprising 16 customized CSS files, notably [/workspace/vistascape/frontend/src/App.module.css](https://github.com/PJDEVEX/vistascape/blob/main/frontend/src/App.module.css), and others located in [/workspace/vistascape/frontend/src/styles](https://github.com/PJDEVEX/vistascape/tree/main/frontend/src/styles).
- **Variables:** Managed colors through a dedicated [variables.css](https://github.com/PJDEVEX/vistascape/blob/main/frontend/src/styles/variables.css) file for maintainability, consistency, and reusability.
- **Formatting:** Maintained uniform styling using [Prettier](https://prettier.io/).
- **Validation:** Ensured code integrity with thorough testing via the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).



### Frameworks, Libraries & Programs Used

### Backend
- This table provides an overview of essential backend dependencies for our project.
- Each dependency plays a crucial role in enabling various functionalities within the system.
- The badges include version information and official colors for easy identification.
- Use these dependencies to enhance the functionality and efficiency of your Django web application.
- Be mindful of updates and version compatibility for a seamless development experience.

<details>
   <summary>Show/Hide Backend Dependencies</summary>

| No. | Dependency                                      | Description                                         |
|----|-------------------------------------------------|-----------------------------------------------------|
| 1  | ![asgiref](https://img.shields.io/badge/asgiref-3.7.2-%23032e38.svg?style=flat-square&logo=python&logoColor=white) | ASGI framework for Python web applications.           |
| 2  | ![black](https://img.shields.io/badge/black-23.11.0-%23000000.svg?style=flat-square&logo=python&logoColor=white) | Code formatter for Python.                          |
| 3  | ![click](https://img.shields.io/badge/click-8.1.7-%23217e95.svg?style=flat-square&logo=python&logoColor=white) | Command line toolkit for Python.                     |
| 4  | ![cloudinary](https://img.shields.io/badge/cloudinary-1.36.0-%23218DFF.svg?style=flat-square&logo=cloudinary&logoColor=white) | Cloud-based image and video management.             |
| 5  | ![dj-database-url](https://img.shields.io/badge/dj__database__url-0.5.0-%2361dafb.svg?style=flat-square&logo=django&logoColor=white) | Django utility to configure database connections.   |
| 6  | ![dj-rest-auth](https://img.shields.io/badge/dj__rest__auth-2.1.9-%23092E20.svg?style=flat-square&logo=django&logoColor=white) | Django REST framework for authentication.            |
| 7  | ![Django](https://img.shields.io/badge/Django-3.2.23-%23092E20.svg?style=flat-square&logo=django&logoColor=white) | High-level Python web framework.                    |
| 8  | ![django-allauth](https://img.shields.io/badge/django__allauth-0.44.0-%23092E20.svg?style=flat-square&logo=django&logoColor=white) | Authentication for Django projects.                 |
| 9  | ![django-cloudinary-storage](https://img.shields.io/badge/django__cloudinary__storage-0.3.0-%23092E20.svg?style=flat-square&logo=django&logoColor=white) | Django storage backend for Cloudinary.              |
| 10 | ![django-cors-headers](https://img.shields.io/badge/django__cors__headers-4.3.0-%23092E20.svg?style=flat-square&logo=django&logoColor=white) | Django app for handling CORS headers.               |
| 11 | ![django-filter](https://img.shields.io/badge/django__filter-23.3-%23092E20.svg?style=flat-square&logo=django&logoColor=white) | Django app for dynamic filtering.                   |
| 12 | ![djangorestframework](https://img.shields.io/badge/djangorestframework-3.14.0-%23092E20.svg?style=flat-square&logo=django&logoColor=white) | Django toolkit for building Web APIs.               |
| 13 | ![djangorestframework-simplejwt](https://img.shields.io/badge/djangorestframework__simplejwt-4.7.2-%23092E20.svg?style=flat-square&logo=django&logoColor=white) | JWT authentication for Django REST framework.       |
| 14 | ![gunicorn](https://img.shields.io/badge/gunicorn-21.2.0-%23616268.svg?style=flat-square&logo=gunicorn&logoColor=white) | WSGI HTTP server for Python web applications.      |
| 15 | ![oauthlib](https://img.shields.io/badge/oauthlib-3.2.2-%230069b4.svg?style=flat-square&logo=oauth&logoColor=white) | Generic and reusable Python OAuth library.         |
| 16 | ![pathspec](https://img.shields.io/badge/pathspec-0.11.2-%234B5E40.svg?style=flat-square&logo=python&logoColor=white) | Library for matching paths using the gitignore format.|
| 17 | ![Pillow](https://img.shields.io/badge/Pillow-8.2.0-%23eeeee.svg?style=flat-square&logo=python&logoColor=white) | Python Imaging Library (PIL) fork.                  |
| 18 | ![psycopg2](https://img.shields.io/badge/psycopg2-2.9.9-%2361dafb.svg?style=flat-square&logo=postgresql&logoColor=white) | PostgreSQL adapter for Python.                      |
| 19 | ![PyJWT](https://img.shields.io/badge/PyJWT-2.8.0-%23000000.svg?style=flat-square&logo=python&logoColor=white) | JSON Web Token implementation for Python.           |
| 20 | ![pylint-django](https://img.shields.io/badge/pylint__django-2.5.5-%23000000.svg?style=flat-square&logo=python&logoColor=white) | Pylint plugin for Django projects.                  |
| 21 | ![pylint-plugin-utils](https://img.shields.io/badge/pylint__plugin__utils-0.8.2-%23000000.svg?style=flat-square&logo=python&logoColor=white) | Utilities for writing Pylint plugins.               |
| 22 | ![python3-openid](https://img.shields.io/badge/python3__openid-3.2.0-%234B8BBE.svg?style=flat-square&logo=python&logoColor=white) | Python OpenID library.                              |
| 23 | ![pytz](https://img.shields.io/badge/pytz-2023.3.post1-%23000000.svg?style=flat-square&logo=python&logoColor=white) | World timezone definitions for Python.              |
| 24 | ![requests-oauthlib](https://img.shields.io/badge/requests__oauthlib-1.3.1-%232d96c8.svg?style=flat-square&logo=python&logoColor=white) | OAuthlib support for Python-Requests.               |
| 25 | ![sqlparse](https://img.shields.io/badge/sqlparse-0.4.4-%230092e3.svg?style=flat-square&logo=python&logoColor=white) | SQL parsing and formatting for Python.              |
| 26 | ![whitenoise](https://img.shields.io/badge/whitenoise-6.4.0-%234B8BBE.svg?style=flat-square&logo=python&logoColor=white) | Simplified static file serving for Django. 

</details>


### Frontend
- Essential libraries and tools for building the frontend of the project.

<details>
  <summary>Show/Hide Frontend Dependencies</summary>

  | No. | Dependency                                            | Description                                       |
  | --- | ----------------------------------------------------- | ------------------------------------------------- |
  | 1   | [![jest-dom](https://img.shields.io/badge/jest--dom-^5.17.0-%23C21325?style=flat-square&logo=jest)](https://github.com/testing-library/jest-dom) | Jest utility for better assertions |
  | 2   | [![react-testing-library](https://img.shields.io/badge/react--testing--library-^11.2.7-%231C7CDF?style=flat-square&logo=react)](https://github.com/testing-library/react) | Testing utilities for React components |
  | 3   | [![user-event](https://img.shields.io/badge/user--event-^12.8.3-%2387D2FF?style=flat-square&logo=testing-library)](https://github.com/testing-library/user-event) | Triggering events for testing |
  | 4   | [![axios](https://img.shields.io/badge/axios-^0.21.4-%2388D0C6?style=flat-square&logo=axios)](https://github.com/axios/axios) | HTTP client for the browser and Node.js |
  | 5   | [![bootstrap](https://img.shields.io/badge/bootstrap-^4.6.0-%237952B3?style=flat-square&logo=bootstrap)](https://getbootstrap.com/) | Front-end framework for web development |
  | 6   | [![jwt-decode](https://img.shields.io/badge/jwt--decode-^3.1.2-%232C3E50?style=flat-square&logo=json-web-tokens)](https://github.com/auth0/jwt-decode) | JWT token decoding library |
  | 7   | [![react](https://img.shields.io/badge/react-^17.0.2-%2361DAFB?style=flat-square&logo=react)](https://reactjs.org/) | A JavaScript library for building user interfaces |
  | 8   | [![react-bootstrap](https://img.shields.io/badge/react--bootstrap-^1.6.3-%2361DAFB?style=flat-square&logo=react)](https://react-bootstrap.github.io/) | Bootstrap components as React components |
  | 9   | [![react-dom](https://img.shields.io/badge/react--dom-^17.0.2-%2361DAFB?style=flat-square&logo=react)](https://reactjs.org/) | React package for working with the DOM |
  | 10  | [![react-infinite-scroll-component](https://img.shields.io/badge/react--infinite--scroll--component-^6.1.0-%2361DAFB?style=flat-square&logo=react)](https://github.com/ankeetmaini/react-infinite-scroll-component) | Infinite scroll component for React |
  | 11  | [![react-responsive](https://img.shields.io/badge/react--responsive-^9.0.2-%2361DAFB?style=flat-square&logo=react)](https://github.com/contra/react-responsive) | Media queries in react for responsive design |
  | 12  | [![react-router-dom](https://img.shields.io/badge/react--router--dom-^5.3.4-%2361DAFB?style=flat-square&logo=react-router)](https://reactrouter.com/) | Declarative routing for React.js |
  | 13  | [![react-scripts](https://img.shields.io/badge/react--scripts-^4.0.3-%2361DAFB?style=flat-square&logo=react)](https://create-react-app.dev/docs/available-scripts/) | Scripts and configuration used by Create React App |
  | 14  | [![react-share](https://img.shields.io/badge/react--share-^4.4.1-%2361DAFB?style=flat-square&logo=react)](https://github.com/nygardk/react-share) | Social media share buttons and share counts |
  | 15  | [![use-persisted-state](https://img.shields.io/badge/use--persisted--state-^0.3.3-%2361DAFB?style=flat-square&logo=react)](https://github.com/davidkpiano/use-persisted-state) | React hook for using persisted state |
  | 16  | [![web-vitals](https://img.shields.io/badge/web--vitals-^1.1.2-%2361DAFB?style=flat-square&logo=web)](https://web.dev/vitals/) | Essential metrics for a healthy web performance |

</details>

In addition to the above, below technologies and tools were used through out the project.

<details>
  <summary>Mics Techno</summary>

1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Titillium Web' font into the style.css file which is used on all pages throughout the project.
2. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
3. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.
4. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
5. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
6. [Canva:](https://www.canva.com/)
    - Canva was used to create the logo, resizing images and editing photos for the website.
7. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/) during the design process.

</details>

### Further Testing

-   The platform was tested on Google Chrome, Microsoft Edge and Safari browsers.
    -   [test1](https://res.cloudinary.com/pjdevex/image/upload/v1701038105/vistascape/test/ChromeLightHouseTest1_jvyo1r.png)
    -   [test2](https://res.cloudinary.com/pjdevex/image/upload/v1701038105/vistascape/test/ChromeLightHouseTest2_myuocv.png)
-   The platform was viewed on a variety of devices such as Desktop, Laptop, iPhone11,
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.
  

### Code Formatting with Prettier in ReactJS - [![Prettier Shield Badge](https://img.shields.io/badge/Prettier-%23F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)

Ensure consistent code style in your ReactJS project by using Prettier, a popular code formatter that supports JavaScript, CSS, and more.

#### Installation

Install Prettier as a development dependency:

```bash
npm install --save-dev prettier
# or
yarn add --dev prettier
```

#### Formatting Scripts

Update your package.json with formatting scripts:

```json
"scripts": {
  "format": "prettier --write 'src/**/*.js' 'src/**/*.css'",
  "format-check": "prettier --check 'src/**/*.js' 'src/**/*.css'"
}
```
- **format**: Formats JS and CSS files.
- **format-check**: Checks if files are formatted correctly.
  
#### Usage

Run formatting:

```
npm run format
# or
yarn format
```

Check formatting:

```
npm run format-check
# or
yarn format-check
```

#### Editor Integration
Install the "Prettier - Code formatter" extension in your code editor for automatic formatting on save.

Ensure your files have consistent formatting, enhancing code readability and maintainability.

### Known Bugs

-   On some mobile devices the Hero Image pushes the size of screen out more than any of the other content on the page.
    -   A white gap can be seen to the right of the footer and navigation bar as a result.
-   On Microsoft Edge and Internet Explorer Browsers, all links in Navbar are pushed upwards when hovering over them.

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/pJDEVEX/vistascape/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://vistascape-81a5fa181ce9.herokuapp.com/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/pJDEVEX/vistascape/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/pJDEVEX/vistascape/)
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

### Media

-   All Images were created by the developer.

### Reference

- [Using CSS Modules In React App](https://medium.com/@ralph1786/using-css-modules-in-react-app-c2079eadbb87)
- [Markdown Converter](https://markdown-convert.com/en/tool/table)
- [Colour Contrast Check](https://snook.ca/technical/colour_contrast/colour.html#fg=DDDDDD,bg=05896D)
- [Logo Desing](https://www.canva.com/)
- [Remove Background](https://www.remove.bg/upload)
- [Favicon converter](https://favicon.io/favicon-converter/)
- [React Testing - Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet/)
- [React Testing Library Cheat Sheet](https://flexiple.com/react/react-testing-library-cheat-sheet)
- [css Validator](https://jigsaw.w3.org/css-validator/)
- [Avatar Creator](https://www.cartoonize.net/avatar-maker/#google_vignette)
- [Django Rest framework](https://www.django-rest-framework.org/)
- [Django for APIs](https://djangoforapis.com/)
- [Markdown Tips & Tricks 2022 - Markdown Crash Course](https://www.youtube.com/watch?v=ftOBvusMHjQ)
- [Serializer fields](https://www.django-rest-framework.org/api-guide/fields/#serializer-fields)
- [Dark mode in React: An in-depth guide](https://blog.logrocket.com/dark-mode-react-in-depth-guide/#using-system-settings)

### Acknowledgements

-   My Mentors Daisy and Rohit for continuous helpful feedback.

-   Tutor support at Code Institute for their support.

-   Special gratitude to my better half and loving son for the support and encouragement

