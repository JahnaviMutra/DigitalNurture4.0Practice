import React from 'react';
import { useParams } from 'react-router-dom';
import TrainersData from './TrainersMock';

function TrainerDetail() {
  const { id } = useParams();
  const trainer = TrainersData.find(t => t.trainerId === parseInt(id));

  if (!trainer) {
    return <div>Trainer not found</div>;
  }

  return (
    <div>
      <h2>Trainer Details</h2>
      <p><strong>Name:</strong> {trainer.name}</p>
      <p><strong>Email:</strong> {trainer.email}</p>
      <p><strong>Phone:</strong> {trainer.phone}</p>
      <p><strong>Technology:</strong> {trainer.technology}</p>
      <p><strong>Skills:</strong> {trainer.skills.join(', ')}</p>
    </div>
  );
}

export default TrainerDetail;
