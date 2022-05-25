import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseDetails from './PurchaseDetails';

const Purchase = () => {
  const {id} = useParams();
  const [purchase, setPurchase] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/purchase/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setPurchase(data));
  },[id]);

  return (
    <div className='px-4 lg:px-12 py-5 lg:py-12'>
      <h2 className='text-xl lg:text-3xl font-bold text-primary capitalize mb-5'>Purchase details :</h2>
      <PurchaseDetails purchase={purchase}/>
    </div>
  );
};

export default Purchase;