import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({deleteTool, setDeleteTool, refetch}) => {
  const {_id, toolName} = deleteTool;
  const handleDelete = () => {
    fetch(`http://localhost:5000/tool/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then(res => res.json())
    .then(data => {
      if (data.deletedCount) {
        toast.error('Deleted!');
        setDeleteTool(null);
        refetch();
      }
    });
  };


  return (
    <div>
      <input type="checkbox" id="delete-tool" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <h3 className="font-bold text-lg text-red-500">
						Do you want to delete {toolName}?
					</h3>
          <p className="py-4">
						Once you delete. It will be removed from your Database!!
					</p>
          <div className="modal-action">
            <button
                onClick={() => handleDelete()}
                className="btn btn-xs border-0 bg-red-500"
              >
                Delete
						</button>
            <label
                htmlFor="delete-tool"
                className="btn btn-xs bg-green-500 border-0"
              >
                Cancle
						</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;