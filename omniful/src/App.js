import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar } from './Components/Sidebar';
import { AllRoutes } from './Components/AllRoutes';

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <AllRoutes />
    </div>
  );
}

export default App;
