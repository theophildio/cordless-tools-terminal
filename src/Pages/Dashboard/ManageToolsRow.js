import React from 'react';
import {FiEdit} from 'react-icons/fi';
import {FiTrash2} from 'react-icons/fi';

const ManageToolsRow = ({tool, index, setDeleteTool, setUpdateTool, refetch}) => {
  const {toolName, img, description, quantity, price} = tool;

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
          <label onClick={() => setUpdateTool(tool)} htmlFor="update-modal" className="btn modal-button bg-transparent hover:bg-transparent border-0"><FiEdit className='text-2xl' /></label>
          </td>
        <td>
          <label onClick={() => setDeleteTool(tool)} htmlFor="delete-tool" className="btn modal-button bg-transparent hover:bg-transparent border-0">
            <FiTrash2 className='text-2xl text-error cursor-pointer'/>
          </label>
        </td>
        <td>{description}</td>
      </tr>
    </>
  );
};

export default ManageToolsRow;