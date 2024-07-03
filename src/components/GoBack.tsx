import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBack: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <nav aria-label="Breadcrumb">
      <button className="go-back-button" onClick={handleGoBack}>
        Go Back
      </button>
    </nav>
  );
};

export default GoBack;
