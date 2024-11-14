## Figma -> Builder.io

## Copilot

# Prompt 1

Act as a Senior Frontend developer. I want to create an action link that when the user press over the button "Ver proceso" the page will navigate to a new URL positions/{positionID} where we need to show #file:InterviewStage.tsx page

# Prompt 2

/fix Module '"react-router-dom"' has no exported member 'useHistory'.

# Prompt 3

complete the InterviewProcessProp types with the following object

```
{ "positionName": "Senior Full-Stack Engineer", "interviewFlow": { "id": 1, "description": "Standard development interview process", "interviewSteps": [ { "id": 1, "interviewFlowId": 1, "interviewTypeId": 1, "name": "Initial Screening", "orderIndex": 1 }, { "id": 2, "interviewFlowId": 1, "interviewTypeId": 2, "name": "Technical Interview", "orderIndex": 2 }, { "id": 3, "interviewFlowId": 1, "interviewTypeId": 3, "name": "Manager Interview", "orderIndex": 2 } ] } }
```

and for Candidates with

```
{ "fullName": "John Doe", "currentInterviewStep": "Technical Interview", "averageScore": 5 }
```

# Prompt 4

I want to pass as a prop the candidates that correspond to each interviewStep, since each candidate as a prop where is located in the process

# Prompt 5

Each candidate card should be placed in the corresponding phase and show their full name and average score.

And should be dragable to another interviewStep

# Prompt 6

after each drop I want to do a PUT /candidate/:id where the candidate should change the interview process. and after the put do a GET again to have a refresh window with all the changes

# Prompt 7

and I need to send the applicationId

# Prompt 8

the currentInterviewStep for the PUT needs to be the ID of the newStep

# Prompt 9

Add an arrow to the left of the title to return to the list of positions.

# Prompt 10

improve components to be mobile #file:InterviewProcess.tsx #file:InterviewStage.tsx #file:Candidate.tsx

# Prompt 11

I want to use icons from fas fa-arrow-left

# Several prompts with /fix from copilot.
