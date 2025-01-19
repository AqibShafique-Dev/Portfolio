import { Route, Routes } from 'react-router-dom';

import App from 'App';
import Projects from './components/Projects';

function LandingPage() {
    return (
      <>
        <Routes>
          {/* <Route exact path="/" element={<App />} /> */}
          <Route path="/project" element={<Projects />} />
          {/* <Route exact path="/project/:id" element={<ProjectDetailPage />} /> */}
        </Routes>
      </>
    );
  }
  
  export default LandingPage;