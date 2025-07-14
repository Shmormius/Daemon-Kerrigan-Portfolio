import { useParams } from 'react-router-dom';
import { ReactElement } from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

export default function ProjectDetail(): ReactElement {
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