 // components/ChangeSymbolModal.tsx
import { useDispatch } from 'react-redux';
import { setSymbol } from '../dataSlice';
import { useState } from 'react';

const ChangeSymbolModal = () => {
  const dispatch = useDispatch();
  const [newSymbol, setNewSymbol] = useState('');

  const handleSubmit = () => {
    dispatch(setSymbol(newSymbol));
  };

  return (
    <div className="modal">
      <h2>Change Symbol</h2>
      <input
        type="text"
        value={newSymbol}
        onChange={(e) => setNewSymbol(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ChangeSymbolModal;
