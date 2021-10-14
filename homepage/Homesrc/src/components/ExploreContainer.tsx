import './ExploreContainer.css';
import Home from '../pages/Home';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      
      <Home/>
      
    </div>
  );
};

export default ExploreContainer;
