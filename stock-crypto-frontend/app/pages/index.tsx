// pages/index.tsx
import DataTable from '../components/DataTable';
import ChangeSymbolModal from '../components/ChangeSymbolModal';
import { useState } from 'react';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>Real-time Stock/Crypto Prices</h1>
      <DataTable />
      <button onClick={() => setShowModal(true)}>Change Symbol</button>
      {showModal && (
        <ChangeSymbolModal />
      )}
    </div>
  );
};

export default HomePage;
