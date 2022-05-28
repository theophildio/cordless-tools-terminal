import React from 'react';
import {FiEdit} from 'react-icons/fi';

const ManageToolsRow = ({tool, index, refetch}) => {
  const {_id, toolName, img, description, quantity, price} = tool;

  const handleUpdateTool = id => {
    return <label id={id} htmlFor="update-modal" className="btn modal-button">Update</label>;
  }

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <th>
          <div className="avatar">
            <div className="w-16 border rounded-xl">
              <img src={img} alt={img}/>
            </div>
          </div>
        </th>
        <td>{toolName}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>
          <label onClick={() => handleUpdateTool(_id)} htmlFor="update-modal" className="btn modal-button bg-transparent hover:bg-transparent border-0"><FiEdit className='text-2xl' /></label>
          </td>
        <td>{description}</td>
      </tr>
    </>
  );
};

export default ManageToolsRow;