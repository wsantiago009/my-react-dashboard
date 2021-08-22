import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard';
import ComplianceDocuments from './components/ComplianceDocuments';
import CreateContract from './components/CreateContract';
import Invoices from './components/Invoices';

// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (

  <BrowserRouter>
    <div className='container dflex'>
      <Sidebar />

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/create-contract' element={<CreateContract />} />
        <Route path='/compliance-documents' element={<ComplianceDocuments />} />
        <Route path='/invoices' element={<Invoices />} />
      </Routes>
      
      <GlobalStyle />
    </div>
  </BrowserRouter>
)

export default App;
