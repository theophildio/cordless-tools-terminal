import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../SharedPages/Spinner';
import ManageToolsRow from './ManageToolsRow';
import UpdateToolModal from './UpdateToolModal';

const ManageTools = () => {
  const {data: tools, isLoading, refetch} = useQuery("tools", () => 
    fetch('https://cordless-tools-terminal.herokuapp.com/tool', {
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
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              tools.map((tool, index) => <ManageToolsRow 
                key={tool._id}
                index={index}
                tool={tool}
                refetch={refetch}
              />)
            }
          </tbody>
        </table>
      </div>
      <UpdateToolModal />
    </div>
  );
};

export default ManageTools;