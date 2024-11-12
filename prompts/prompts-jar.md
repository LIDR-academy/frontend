# GitHub Copilot

## Prompt 1
@workspace You're an amazing Frontend developer in React and typescript.

In the file #file:Positions.tsx , when the user clicks on the button "Ver proceso", we want to see the detail view for each position, named position. 

Basically, the work is create a new page to see the detail of these positions.

This page will show the different candidates for a specific position. The page will have a Kandban style each column will be a step of this position, for example: phone call, technical interview, etc.

The user will have the ability to update the phase of a candidate by dragging the card from one column to another one.

The design team has some requirements:

The position title should be displayed at the top for context.
Add an arrow to the left of the title to return to the list of positions.
Columns should be displayed for each phase in the process.
Each candidate card should be placed in the corresponding phase and show their full name and average score.
If possible, it should be properly displayed on mobile (phases vertically occupying the full width).
Some observations that you can take into account:

Assume you can find the positions page.
Assume the global page structure includes common elements like the top menu and footer. What you are creating is the internal content of the page.

Please, use the best practices.

Now, I will provide the endpoints to use, are you ready?

## Prompt 2
Endpoints:

GET /position/:id/interviewFlow This endpoint returns information about the hiring process for a specific position:
query params:

positionName: Title of the position

interviewSteps: IDs and names of the different phases in the hiring process

GET /position/:id/candidates This endpoint returns all candidates in progress for a specific position, meaning all applications for a given positionID. It provides the following information

query params:

name: Full name of the candidate

current_interview_step: The phase of the process the candidate is currently in

score: The candidate's average score

PUT /candidate/:id This endpoint updates the stage of a moved candidate. It allows modifying the current interview phase of a specific candidate using the "new_interview_step" parameter and providing the corresponding interview_step_id for the column where the candidate is now located.

Request body: { "applicationId": "1", "currentInterviewStep": "3" }

Do you have any questions before start?

## Prompt 3
Ok, explain me how you will do the work

## Prompt 4
Ok, please when you start to give me the code, tell me in which place I need to place the files in the src folder inside frontend folder

## Prompt 5
I have this error: Could you help me? Could not find a declaration file for module 'react-beautiful-dnd'.

## Prompt 6
Now, I have this error: Module '"react-router-dom"' has no exported member 'useHistory'.ts(2305)

## Prompt 7
In the file #file:Positions.tsx I have this error: Cannot find name 'useNavigate'.ts(2304)

## Prompt 8
Now I have this error in #file:Positions.tsx Property 'id' does not exist on type 'Position'.ts(2339)

## Prompt 9
When I tried to build the application, I received this error: Line 19:18: React Hook "useNavigate" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function react-hooks/rules-of-hooks

## Prompt 10
When I tested the application and I go to the new position URL, I have a blank page

## Prompt 11
@workspace I checked and all are fine but the blank page still appears

## Prompt 12
Why you gave me the code like first time? Could you check why I have a blank page when I go to the url /position/2?

## Prompt 13
I have this error: Matched leaf route at location "/position/2" does not have an element or Component.

## Prompt 14
I keep have a blank page :(

## Prompt 15
The backend endpoints are running in http://localhost:3010. Could be the root cause?

## Prompt 16
I solved by myself the error, it was a mistake in the App.js did by you ;) Now I have this error: Cannot read properties of undefined (reading 'map')

## Prompt 17
The page is giving me this error: Cannot read properties of undefined (reading 'map')

## Prompt 18
No, I can't identify the error :(

## Prompt 19
The response of the endpoint get interviewflow is this: <json example of the last request>

