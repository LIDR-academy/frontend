// src/components/PositionDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';

type InterviewStep = {
    id: string;
    name: string;
};

type Candidate = {
    fullName: string;
    currentInterviewStep: string;
    averageScore: number;
};

const PositionDetail: React.FC = () => {
    console.log("HOLA");
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [positionName, setPositionName] = useState('');
    const [interviewSteps, setInterviewSteps] = useState<InterviewStep[]>([]);
    const [candidates, setCandidates] = useState<Candidate[]>([]);

    useEffect(() => {
        console.log("Fetching interview flow for position ID:", id);
        // Fetch interview flow
        axios.get(`http://localhost:3010/position/${id}/interviewFlow`).then(response => {
            console.log("Interview flow response:", response.data);
            const { positionName, interviewFlow } = response.data.interviewFlow;
            setPositionName(positionName);
            setInterviewSteps(interviewFlow.interviewSteps);
        }).catch(error => {
            console.error("Error fetching interview flow:", error);
        });

        console.log("Fetching candidates for position ID:", id);
        // Fetch candidates
        axios.get(`http://localhost:3010/position/${id}/candidates`).then(response => {
            console.log("Candidates response:", response.data);
            setCandidates(response.data);
        }).catch(error => {
            console.error("Error fetching candidates:", error);
        });
    }, [id]);

    const handleDragEnd = (result: any) => {
        if (!result.destination) return;

        const updatedCandidates = Array.from(candidates);
        const [movedCandidate] = updatedCandidates.splice(result.source.index, 1);
        movedCandidate.currentInterviewStep = result.destination.droppableId;
        updatedCandidates.splice(result.destination.index, 0, movedCandidate);

        setCandidates(updatedCandidates);

        // Update candidate's interview step
        /*axios.put(`http://localhost:3010/candidate/${movedCandidate.id}`, {
            applicationId: positionName.id,
            currentInterviewStep: result.destination.droppableId
        }).catch(error => {
            console.error("Error updating candidate's interview step:", error);
        });*/
    };

    console.log("HOL222A");
    console.log(interviewSteps);

    return (
        <Container className="mt-5">
            <Button variant="link" onClick={() => navigate('/positions')}>
                ← Back to Positions
            </Button>
            <h2 className="text-center mb-4">{positionName}</h2>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Row>
                    {interviewSteps.map(step => (
                        <Col key={step.id} md={4}>
                            <h4>{step.name}</h4>
                            <Droppable droppableId={step.id}>
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.droppableProps} className="kanban-column">
                                        {candidates.filter(candidate => candidate.currentInterviewStep === step.id).map((candidate, index) => (
                                            <Draggable key={candidate.fullName} draggableId={candidate.fullName} index={index}>
                                                {(provided) => (
                                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="candidate-card">
                                                        <p>{candidate.fullName}</p>
                                                        <p>Score: {candidate.averageScore}</p>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </Col>
                    ))}
                </Row>
            </DragDropContext>
        </Container>
    );
};

export default PositionDetail;