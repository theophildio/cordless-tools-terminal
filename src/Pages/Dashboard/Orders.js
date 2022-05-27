import React, {  useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.config';
import Spinner from '../SharedPages/Spinner';
import CancleModal from './CancleModal';
import OrderRow from './OrderRow';

const Orders = () => {
  const [user] = useAuthState(auth);
  const [cancleOrder, setCancleOrder] = useState(null);

  const {data: orders, isLoading, refetch} = useQuery("orders", () => fetch("http://localhost:5000/order", {
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
    }).then(res => res.json())
  );
  if(isLoading) {
    return <Spinner />;
  }
  
  return (
    <div className='p-5'>
      <h2 className='text-2xl font-bold py-5 text-primary capitalize'>All orders of <span className='text-secondary'>{user?.displayName}</span></h2>
      <div className="overflow-x-auto">
        <table className="table w-full text-center">
          <thead>
            <tr>
              <th></th>
              <th>Tool Name</th>
              <th>Ordered Quantity</th>
              <th>Total Price</th>
              <th>Payment Status</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order, index) => <OrderRow 
                key={order._id}
                order={order}
                index={index}
                setCancleOrder={setCancleOrder}
                refetch={refetch}
              />)
            }
          </tbody>
        </table>
      </div>
      {
        cancleOrder && <CancleModal 
          cancleOrder={cancleOrder}
          setCancleOrder={setCancleOrder}
          refetch={refetch}
        />
      }
    </div>
  );
};

export default Orders;