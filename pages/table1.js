import React, { useEffect, useState } from 'react';
import DataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import { ref, get } from 'firebase/database';
import { realDB } from '@/lib/firebase/initFirebase';
const RealtimeData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = ref(realDB, '11ok3SAsg6MF5vWGbDyk_bpI54tyqLMZp-23P4l79N2E/forecast');
        const dataSnapshot = await get(dataRef);

        if (dataSnapshot.exists()) {
          const dataFromFirebase = dataSnapshot.val();
         
          const dataArray = Object.keys(dataFromFirebase).map((key) => ({
            id: key,
            ...Object.values(dataFromFirebase[key])
          }));
         
          setData(dataArray.slice(1,dataArray.length));
          if (dataArray.length > 0) {
            const dynamicColumns = Object.keys(dataArray[0])
              .filter((key) => key !== 'id')
              .map((key) => ({
                name: key,
                header: dataArray[0][key]["value"],
                defaultFlex: 1,
                render: ({ data }) => {
                  const cellData = data[key];
                  if (cellData) {
                    const { color, value, bold  } = cellData;
                    const cellStyle = {
                      backgroundColor: color,
                      padding: '5px',
                      textAlign: 'center',
                      width: '100%',
                      height: '100%',
                      borderRadius: '4px',
                      fontWeight: bold ? 'bold' : 'normal',
                    };
                    return <div style={cellStyle}>{value}</div>;
                  }
                  return null;
                },
              }));

            setColumns(dynamicColumns);
      
          } else {
            setError('No data available');
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {data.length > 0 && (
        <DataGrid
          idProperty="id"
          dataSource={data}
          columns={columns}
          style={{ minHeight: '500px' }}
          columnDefaultWidth={100}
        />
      )}
    </div>
  );
};

export default RealtimeData;
