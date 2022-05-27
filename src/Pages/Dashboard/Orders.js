import { signOut } from 'firebase/auth';
import React, {  useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.config';
import OrderRow from './OrderRow';

const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if(user) {
      fetch(`http://localhost:5000/user-order?user=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/home");
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      });
    }
  }, [user, navigate]);

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
              />)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;