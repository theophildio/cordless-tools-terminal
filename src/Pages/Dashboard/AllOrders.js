import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../SharedPages/Spinner';
import AllOrderRow from './AllOrderRow';

const AllOrders = () => {
  const {data: orders, isLoading, refetch} = useQuery("orders", () => fetch("http://localhost:5000/order", {
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json())
  );
  if(isLoading) {
    return <Spinner />
  } 

  return (
    <div className='px-4 mt-2'>
      <h2 className='text-2xl font-semibold mb-3'>Manage all orders</h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Tool Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Shipping Address</th>
              <th>User Phone</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order, index) => <AllOrderRow 
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
              />)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;