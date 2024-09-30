import { useHistory } from 'react-router-dom';

const CardComponent = ({ id }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/resume/${id}`); // Navigate to the resume page with the ID
  };

  return (
    <div onClick={handleClick} className="card">
      {/* Card content here */}
    </div>
  );
};