![wireframe-1](https://github.com/CS222-UIUC-SP24/group-project-team-66/assets/117466956/57597146-7209-40bc-8a78-b1f7e89802f0)

**UIUC RSOs LOGIN**
-
- Users can click on 'User Login' button or 'RSO Login' button
    - Both user login and RSO login will have email and password input boxes
- 'Login' button will be placed under password input box but above create an account button (not seen in wireframe-1)
    - On click, 'Login' button will start process that verifies the email and password with stored credentials in the database
    - Unsuccessful attempts will display an error message "Email or password is incorrect" above the 'User Login'/'RSO Login' buttons
    - Successful attempts will bring users to the "Organizations" page
- On click, 'Create an account' button will open a "Create an Account" page (not seen in wireframe-1)
    - "Create an Account" page will have 'Create User Account' button and 'Create RSO account' button
    - On click, 'Create User Account' will open a new page with
        - Input boxes: first name (required), last name (required), email (required), password (required), confirm password (required), profile picture, schedule
        - 'Create account' button
            - On click, the button will start a process that verifies all required information was inputted. If more information is needed, an error message "Complete all required information" will be displayed
            - If all required information was inputted, a process will start that verifies that the email is not already associated with another account stored in the database. If it exists, an error message "Email already taken" will be displayed. If it does not already exist, the account will be created/added to the database and the user will be taken to the "Organizations" page
    - On click, 'Create RSO Account' will open a new page with
        - Input boxes: RSO name (required), email (required), password (required), confirm password (required), RSO logo, about, schedule, contact information
        - Checklist of possible tags (ex: engineering, environmental, cultural, etc.)
        - 'Create account' button
            - On click, the button will start a process that verifies all required information was inputted. If more information is needed, an error message "Complete all required information" will be displayed
            - If all required information was inputted, a process will start that verifies that the email is not already associated with another account stored in the database. If it exists, an error message "Email already taken" will be displayed. If it does not already exist, the account will be created/added to the database and the user will be taken to the "Organizations'' page

**ORGANIZATIONS**
-
- Page will display a list of all active RSOs
- "Search" input box will allow users to input text
    - On click, search icon button will display list of RSOs that contain the same text as inputted in the "Search" box
- On click, "Category" button will open drop down menu of RSO tags (ex: engineering, environmental, cultural, etc.) in a checklist
    - Users can click on the checkboxes next to each tag in the checklist
    - On click, search icon button will display list of RSOs that contain at least one of the tags selected by the user
- On hover, RSO name in list will change color
    - On click, user will be taken to the RSO profile page


**RSO PROFILE**
- 
- Page will automatically be displaying the "About" page
- Page will display four buttons: 'About', 'Announcements', 'Events', 'Members' (not seen in wireframe-1), 'Contact'
    - On click, 'About' button will open the "About" page that displays the RSO description and schedule
    - On click, 'Announcements' button will open the "Announcements" page that displays all RSO announcements with most recent at the top
        - Announcements will be displayed in individual content boxes with each displaying the title in bold at the top and the description underneath
        - If the user is logged in as the RSO, there will be a "Add announcement" button in the bottom right corner
            - On click, a modal window opens with an input box for a title and an input box for description
    - On click, 'Events' button will open the "Events" page that displays all RSO events with most recent at the top
        - Events will be displayed in individual content boxes with each displaying the title in bold at the top, and the location, date, and description in order underneath
        - If the user is logged in as the RSO, there will be a "Add event" button in the bottom right corner
            - On click, a modal window opens with an input box for the following: title, description, date, location 
    - On click, 'Members' button will open the "Members" page that displays a list of all RSO members
        - On hover, the RSO member name will change color
            - On click, the RSO member name will open their user profile page
    - On click, 'Contact' button will open the "Contact" page that displays RSO email, RSO social media accounts, and all RSO officers with their position, name, email, and profile picture 
        - On click, RSO social media icon button will open the RSO social media account linked to the button in a new tab
        - On hover, the officer name will change color
            - On click, the officer name will open their user profile page
- If user is logged in as the RSO, there will be an edit button in the top right corner (not seen in wireframe-1)
    - On click, a new page will open that allows the user to edit the RSO name, logo, about, schedule, tags, and contacts
- If the user is not logged in as the RSO and is logged in as a student user, a join button will be in the top right corner
    - On click, the RSO will be added to the student user's "Joined RSOs" page on their profile and the student user will be added to the RSO's member list

**USER PROFILE**
- 
- If user is viewing their own user profile page, it will be open on the "Account" page
    - Page will display four buttons: 'Account', 'Joined RSOs', 'Find Related', 'Friends'
        - On click, 'Account' button will open the "Account" page that displays the user information and schedule
        - On click, 'Joined RSOs' button will open the "Joined RSOs" page that displays all the RSOs that the user has joined
            - On hover, the RSO name will change color
            - On click, the RSO name will open the RSO profile page
        - On click, 'Find Related' button will open the "Find Related" page that displays RSOs with the same tags as the RSOs that the user has already joined
            - On hover, the RSO name will change color
            - On click, the RSO name will open the RSO profile page
        - On click, 'Friends' button will open the "Friends" page that displays a list of the user's friends and a list of friend requests
            - On hover, the friend name will change color
                - On click, the friend name will open the RSO profile page
            - Friend requests will be displayed in a list with the user's name and a checkmark icon and x-mark icon buttons
                - On click, the checkmark icon button accepts friend request by adding friend to the user's friend list and friend's friend list. The request is then removed
                - On click, x-makr button remove the friend request from the list 
    - There will be an edit button in the top right corner (not seen in wireframe-1)
        - On click, a new page will open that allows the user to edit their name, schedule, joined RSOs, and friends list
- If user is viewing another user's profile page, the name and profile picture will be displayed at the top, and there will be two buttons underneath: 'Joined RSOs', 'Contact'
    - On click, 'Joined RSOs' button will open the "Joined RSOs" page that displays all the RSOs that the user has joined
        - On hover, the RSO name will change color
        - On click, the RSO name will open the RSO profile page
    - On click, 'Contact' button will open "Contact" page that displays the user's email and a "Add Friend" button
        - On click, "Add Friend" button will send friend request to user     

**GENERAL**
-
- On click, hamburger icon button will open menu of buttons: 'Account', 'Organizations', 'Log out'
    - On click, 'Account' button will a student user to the "User Profile" page and an RSO user to the "RSO Profile" page
    - On click, 'Organizations' button will user to the "Organizations" page
    - On click, 'Log out' button will log out user
