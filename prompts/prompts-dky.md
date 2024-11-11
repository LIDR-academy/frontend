
## IDE USED: CURSOR

### 1:
You are an excellent React frontend developer, with good Javascript knowledge also. You know how to apply best practices for frontend development, keep it simple code and well organized.

In @Positions.tsx , when I click "Ver Proceso" I want to see the detail view for each position, named "position." Your task is to create the "position" interface, a page where you can view and manage the different candidates for a specific position.

The interface is to be Kanban-style, displaying candidates as cards in different columns representing the phases of the hiring process, with the ability to update the phase of a candidate simply by dragging their card. 

Some design team requirements visible in the example are:

- The position title should be displayed at the top for context.
- Add an arrow to the left of the title to return to the list of positions.
- Columns should be displayed for each phase in the process.
- Each candidate card should be placed in the corresponding phase and show their full name and average score.
- If possible, it should be properly displayed on mobile (phases vertically occupying the full width).

Some observations:

- Assume you can find the positions page.
- Assume the global page structure includes common elements like the top menu and footer. What you are creating is the internal content of the page.


Create me the source code needed to implement the interface only, we will do the logic later.

### 2:

For the code present, we get this error:
```
Module '"react-router-dom"' has no exported member 'useHistory'.
```
How can I resolve this? If you propose a fix, please make it concise.

### 3:

Thanks, now make that when I click "Ver proceso" button in @Positions.tsx I get shown this new interface.

### 4:

Dont use /position/:title as its a bad practice, just send me to the UI with a generic URL and show me the interface.

### 5:

When I access /position I get an empty page, fix this

### 6:

You did not change any line of code, and its still not working, I get a white page.

### 7:

In @Position.tsx do the following changes:
- Instead of 'Applied' change to 'Phone call'
- Instead of 'Interviewing' change to 'Technical interview'
- Instead of 'Offer' change to 'Cultural interview'
- Instead of 'Hired' change to 'Manager interview'
- Instead of showing 'Average Score:', show the emoji 'green circle' that also depends on the average score value to a maximum of 5 emoji's depending on the score (maximum 100).

### 8:

Now, for each candidate's card in @Position.tsx , I want it to be droppable around the different phases.

### 9:

For the code present, we get this error:
```
Parameter 'provided' implicitly has an 'any' type.
```
How can I resolve this? If you propose a fix, please make it concise.

### 10:


For the code present, we get this error:
```
Cannot use namespace 'DroppableProvided' as a type.
```
How can I resolve this? If you propose a fix, please make it concise.

### 11:

Can you not use DroppableProvided? Find an alternative

### 12:

I get 'Module not found: Error: Can't resolve 'react-beautiful-dnd' in 'C:\Users\dimitar.kirilovyank\Desktop\curso\AI4Devs-frontend-main\frontend\src\components' when building.

### 13:

I get the following error when I try to drag and drop: Unable to find draggable with id: 1

### 14:

Disable Strict Mode in @index.tsx 

### 15:


@Position.tsx 
Now do the following changes.
- URL format should be /position/:id
- On page load, call the following API: GET /position/:id/interviewFlow 

Example service response:
{
      "positionName": "Senior backend engineer",
      "interviewFlow": {
              
              "id": 1,
              "description": "Standard development interview process",
              "interviewSteps": [
                  {
                      "id": 1,
                      "interviewFlowId": 1,
                      "interviewTypeId": 1,
                      "name": "Initial Screening",
                      "orderIndex": 1
                  },
                  {
                      "id": 2,
                      "interviewFlowId": 1,
                      "interviewTypeId": 2,
                      "name": "Technical Interview",
                      "orderIndex": 2
                  },
                  {
                      "id": 3,
                      "interviewFlowId": 1,
                      "interviewTypeId": 3,
                      "name": "Manager Interview",
                      "orderIndex": 2
                  }
              ]
          }
  }

Make positionTitle use the positionName field from the service.
Make phases use the data from the service, which is interviewSteps.


### 16:

i get error 'VM206:1 Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON' at line 23 in @Position.tsx 


### 17:

Now in @Position.tsx , to fill candidates use the service GET GET /position/:id/candidates , here is an example response:
[
      {
           "fullName": "Jane Smith",
           "currentInterviewStep": "Technical Interview",
           "averageScore": 4
       },
       {
           "fullName": "Carlos García",
           "currentInterviewStep": "Initial Screening",
           "averageScore": 0            
       },        
       {
           "fullName": "John Doe",
           "currentInterviewStep": "Manager Interview",
           "averageScore": 5            
      }    
 ]
 
### 18:
 
 Now, each time on drop action is done call the following API:
PUT /candidates/:id
Example request:
{
     "applicationId": "1",
     "currentInterviewStep": "3"
 }
Example response:
{    
    "message": "Candidate stage updated successfully",
     "data": {
         "id": 1,
         "positionId": 1,
         "candidateId": 1,
         "applicationDate": "2024-06-04T13:34:58.304Z",
         "currentInterviewStep": 3,
         "notes": null,
         "interviews": []    
     }
 }
 
 