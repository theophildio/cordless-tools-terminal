import React from 'react';

const OrderRow = ({order, index, setCancleOrder}) => {
  const {orderedTool, orderedMinQty, orderedTotalPrice} = order;
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{orderedTool}</td>
        <td>{orderedMinQty}</td>
        <td>{orderedTotalPrice}</td>
        <td>
          <button className='btn border-0 rounded-none btn-xs bg-yellow-500 text-base-100 mr-2'>Unpaid</button>
          <button disabled className='btn border-0 rounded-none btn-xs bg-green-500 text-base-100 mr-2'>Paid</button>
          <button className='btn border-0 rounded-none btn-xs bg-primary text-base-100'>Pay</button>
          </td>
        <td>
          <button className='btn border-0 rounded-none btn-xs bg-purple-500 text-base-100 mr-2'>Pending</button>
          <button disabled className='btn border-0 rounded-none btn-xs bg-green-500 text-base-100 mr-2'>Shipped</button>
          <label onClick={() => setCancleOrder(order)} htmlFor="cancle-modal" className="btn modal-button btn-xs border-0 rounded-none bg-red-500 text-base-100">
						Delete
					</label>
        </td>
      </tr>
    </>
  );
};

export default OrderRow;