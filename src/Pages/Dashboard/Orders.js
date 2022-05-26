import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.config';

const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() =>{
    if(user) {
      fetch(`http://localhost:5000/order/?user=${user.email}`, {
        method: "GET",
				headers: {
					authorization: `Bearer ${localStorage.getItem("accessToken")}`
				}
      })
      .then(res => {
        if(res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
					navigate("/home");
        }
        return res.json();
      })
      .then (data => {
        setOrders(data);
      })
    }
  }, [user]);

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
              orders.map((order, index) => 
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.tool}</td>
                <td>{order.minQty}</td>
                <td>{order.price}</td>
                <td>
                  <button className='btn border-0 rounded-none btn-xs bg-yellow-500 text-base-100 mr-2'>Unpaid</button>
                  <button disabled className='btn border-0 rounded-none btn-xs bg-green-500 text-base-100 mr-2'>Paid</button>
                  <button className='btn border-0 rounded-none btn-xs bg-primary text-base-100'>Pay</button>
                  </td>
                <td>
                  <button className='btn border-0 rounded-none btn-xs bg-purple-500 text-base-100 mr-2'>Pending</button>
                  <button disabled className='btn border-0 rounded-none btn-xs bg-green-500 text-base-100 mr-2'>Successful</button>
                  <button className='btn border-0 rounded-none btn-xs bg-red-500 text-base-100'>Cancle</button>
                </td>
              </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;