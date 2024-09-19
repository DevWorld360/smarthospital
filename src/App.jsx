import './App.css'
import { Icon } from "@iconify/react";
import Navbar from './shared/navbar';
import Sidebar from './shared/sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import OutPatient from './pages/out_patient';
import InPatient from './pages/in_patient';
import Pharmacy from './pages/pharmacy';

function App() {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
        <main className="mt-[4.5rem] px-4 w-[85%]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="out-patient" element={<OutPatient />} />
            <Route path="in-patient" element={<InPatient />} />
            <Route path="pharmacy" element={<Pharmacy />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App
