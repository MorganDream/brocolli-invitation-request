This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
For me, the good thing is, it can prepare lots of things including test, packaging(using webpack).

## How To Run and Test
1. Git clone this Repo.
2. Run `npm install`
3. npm (run) start

Then it will automatically direct to localhost:3000 in your default browser.
This devserver is for development.

## Test Cases
#### Test Case 1: Invite Dialog can be invoked and dismissed
1. Click on "Request an Invite" Button

    Expectation: Invite Dialog shows

2. Click on area other than the dialog

    Expectation: Dialog hides and home page shows

#### Test Case 2: Invite Dialog Validate User Inputs

1. Click on "Request and Invite" button
2. In the dialog, input 
        a. user name less than 3 characters, 
        b. email without charactor @
        c. email confirmation not same as email
    
    Expectation: All 3 inputs will be invalid and send button is disabled

3. Input with valid content

    Expectation: All will be valid and send button can be clicked   

4. Change email confirmation to be different with email
    
    Expectation: email confirmation will be invalid and send button is disabled
5. Change email to match email confirmation
    
    Expectation: valid again
    
6. Hide the dialog and show it again, click on send button when nothing is inputted.

    Expectation: All 3 inputs will be invalid and button is disabled
 
#### Test Case 2: Request can be sent successfully
1. Click on the send button when all inputs are valid
    
   Expectation: button is diabled and button test changes to indicate it is sending request.
   After a few seconds, Success Dialog shows, tells that registering success.
   
2. Click on are other than dialog or click on OK button
    
   Expectation: Dialog hides and home page shows
   
#### Test Case 3: Request can be sent with failure
1. Same as step 1 in last test case but email should be `usedemail@airwallex.com`
   
   Expectation: After a few seconds, bad request message is shown on dialog
   
2. Click send button again
   
   Expectation: It can be re-requested.