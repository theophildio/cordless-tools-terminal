import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../SharedPages/Spinner';
import DeleteModal from './DeleteModal';
import ManageToolsRow from './ManageToolsRow';
import UpdateToolModal from './UpdateToolModal';

const ManageTools = () => {
  const [updateTool, setUpdateTool] = useState([]);
  const [deleteTool, setDeleteTool] = useState(null);
  const {data: tools, isLoading, refetch} = useQuery("tools", () => 
    fetch('http://localhost:5000/tool', {
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json())
  )
  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className='px-4'>
      <h2 className='text-2xl font-semibold my-4 capitalize'>Update tools</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Tool Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Update Tool</th>
              <th>Delete Tool</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              tools.map((tool, index) => <ManageToolsRow 
                key={tool._id}
                index={index}
                tool={tool}
                setDeleteTool={setDeleteTool}
                setUpdateTool={setUpdateTool} 
                refetch={refetch}
              />)
            }
          </tbody>
        </table>
      </div>
      {
        updateTool && <UpdateToolModal
        updateTool={updateTool}
        setUpdateTool={setUpdateTool}
        refetch={refetch}
      ></UpdateToolModal>
      }
      {
        deleteTool && <DeleteModal
        deleteTool={deleteTool}
        setDeleteTool={setDeleteTool} 
        refetch={refetch}
      ></DeleteModal>
      }
        
    </div>
  );
};

export default ManageTools;