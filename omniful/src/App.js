import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar } from './Components/Sidebar';
import { AllRoutes } from './Components/AllRoutes';
import { Topbar } from './Components/Topbar';

function App() {
  return (
    <>
      <Topbar />
      <div className="d-flex">
        <Sidebar />
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
