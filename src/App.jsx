import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Chart from './components/Chart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chart />} />
      </Routes>
    </Router>
  );
}

export default App;