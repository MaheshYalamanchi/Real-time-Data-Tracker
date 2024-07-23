// components/DataTable.tsx
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../page';
import { useEffect } from 'react';
import { fetchData } from '../dataSlice';

const DataTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.data.data);
  const symbol = useSelector((state: RootState) => state.data.symbol);

  useEffect(() => {
    dispatch(fetchData(symbol));
    const interval = setInterval(() => {
      dispatch(fetchData(symbol));
    }, 5000);
    return () => clearInterval(interval);
  }, [dispatch, symbol]);

  return (
    <table>
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <tr key={entry.timestamp}>
            <td>{new Date(entry.timestamp).toLocaleString()}</td>
            <td>{entry.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;