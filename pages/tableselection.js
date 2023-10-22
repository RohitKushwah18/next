import React, { useState } from 'react';
import Table1 from './table1';
import Table2 from './table2';
import { useUser } from '@/lib/firebase/useUser';

const TableSelection = () => {
  const [selectedTable, setSelectedTable] = useState('table1');
  const { user } = useUser();

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  return (
    <div className="table-selection-container">
      <label htmlFor="tableSelect" className="label">
        Select a table:
      </label>
      <select
        id="tableSelect"
        onChange={handleTableChange}
        value={selectedTable}
        disabled={!user}
        className="select-box"
      >
        <option value="table1">Forecast</option>
        <option value="table2">fundamental data</option>
      </select>

      {user && (
        <div className="table-display">
          {selectedTable === 'table1' && <Table1 />}
          {selectedTable === 'table2' && <Table2 />}
        </div>
      )}
    </div>
  );
};

export default TableSelection;
