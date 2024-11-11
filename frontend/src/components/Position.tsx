import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

type Candidate = {
    id: number;
    fullName: string;
    averageScore: number;
    phase: string;
};

const Position: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [positionTitle, setPositionTitle] = useState<string>('');
    const [phases, setPhases] = useState<string[]>([]);
    const [phasesIds, setPhasesIds] = useState<number[]>([]);

    useEffect(() => {
        const fetchInterviewFlow = async () => {
            try {
                const response = await fetch(`http://localhost:3010/position/${id}/interviewFlow`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPositionTitle(data.positionName);

                if (data.interviewFlow && Array.isArray(data.interviewFlow.interviewFlow.interviewSteps)) {
                    setPhases(data.interviewFlow.interviewFlow.interviewSteps.map((step: any) => step.name));
                    setPhasesIds(data.interviewFlow.interviewFlow.interviewSteps.map((step: any) => step.interviewTypeId));
                } else {
                    console.error("interviewFlow or interviewSteps is undefined or not an array");
                }
            } catch (error) {
                console.error("Failed to fetch interview flow:", error);
            }
        };

        const fetchCandidates = async () => {
            try {
                const response = await fetch(`http://localhost:3010/position/${id}/candidates`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const candidatesWithPhases = data.map((candidate: any, index: number) => ({
                    id: index + 1,
                    fullName: candidate.fullName,
                    averageScore: candidate.averageScore,
                    phase: candidate.currentInterviewStep,
                }));
                setCandidates(candidatesWithPhases);
            } catch (error) {
                console.error("Failed to fetch candidates:", error);
            }
        };

        fetchInterviewFlow();
        fetchCandidates();
    }, [id]);

    const getScoreEmojis = (score: number) => {
        const maxEmojis = 5;
        const filledEmojis = Math.round((score / 100) * maxEmojis);
        return '🟢'.repeat(filledEmojis) + '⚪'.repeat(maxEmojis - filledEmojis);
    };

    const onDragEnd = async (result: any) => {
        const { destination, source } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const updatedCandidates = Array.from(candidates);
        const [movedCandidate] = updatedCandidates.splice(source.index, 1);

        movedCandidate.phase = destination.droppableId;

        updatedCandidates.splice(destination.index, 0, movedCandidate);
        setCandidates(updatedCandidates);

        try {
            const response = await fetch(`http://localhost:3010/candidates/${movedCandidate.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    applicationId: movedCandidate.id.toString(),
                    currentInterviewStep: destination.droppableId,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Candidate stage updated successfully:", data.message);
        } catch (error) {
            console.error("Failed to update candidate stage:", error);
        }
    };

    return (
        <Container className="mt-5">
            <div className="d-flex align-items-center mb-4">
                <Button variant="link" onClick={() => navigate(-1)}>
                    ←
                </Button>
                <h2 className="ml-2">{positionTitle}</h2>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Row>
                    {phases.map((phase, index) => (
                        <Droppable droppableId={phasesIds[index].toString()} key={phase}>
                            {(provided: any) => (
                                <Col md={3} className="mb-4" ref={provided.innerRef} {...provided.droppableProps}>
                                    <h4>{phase}</h4>
                                    <div className="d-flex flex-column">
                                        {candidates
                                            .filter(candidate => candidate.phase === phase)
                                            .map((candidate, index) => (
                                                <Draggable key={candidate.id} draggableId={String(candidate.id)} index={index}>
                                                    {(provided: any) => (
                                                        <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="mb-2">
                                                            <Card.Body>
                                                                <Card.Title>{candidate.fullName}</Card.Title>
                                                                <Card.Text>
                                                                    {getScoreEmojis(candidate.averageScore)}
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    )}
                                                </Draggable>
                                            ))}
                                    </div>
                                    {provided.placeholder}
                                </Col>
                            )}
                        </Droppable>
                    ))}
                </Row>
            </DragDropContext>
        </Container>
    );
};

export default Position; 