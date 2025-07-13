import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProjectDetail() {
  const { projectId } = useParams();
  // Fetch or look up project details using projectId
  return (
    <div>
      <Header subtitle={projectId} />
      {/* Render project details here */}
      <Footer />
    </div>
  );
}