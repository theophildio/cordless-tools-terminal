import React from 'react';

const AllOrderRow = ({order, index, refetch}) => {
  const {orderedBy, orderedEmail, shippingAddress, orderedPhone, orderedTool, orderedMinQty, orderedTotalPrice} = order;
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{orderedBy}</td>
        <td>{orderedEmail}</td>
        <td>{orderedTool}</td>
        <td>{orderedMinQty}</td>
        <td>{orderedTotalPrice}</td>
        <td>{shippingAddress}</td>
        <td>{orderedPhone}</td>
        <td><span className='bg-yellow-400 btn btn-xs'>Unpaid</span></td>
      </tr>
    </>
  );
};

export default AllOrderRow;