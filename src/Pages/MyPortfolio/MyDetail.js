import React from 'react';
import Theo from '../../assets/images/Theo.png';

const MyDetail = () => {
  return (
    <>
      <div className="lg:w-1/3 card bg-accent rounded-box p-6 lg:pt-12">
        <div className="flex flex-col">
          <div className="avatar justify-center lg:justify-start">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={Theo} alt={Theo} className="w-1/5 lg:w-2/5" />
            </div>
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-primary">Theophil Dio</h3>
          <h3 className="mt-1 text-md font-semibold text-secondary">Jr. Front-End Web Developer</h3>
          <p className="my-2"><span className='text-lg font-semibold'>Email:</span> dtheo.sangma@gmail.com</p>
        </div>
        <div>
          <p className="mb-2"><span className='text-lg font-semibold'>Address:</span> Ka-20/4, Nodda, Gulshan-2, Dhaka-1212</p>
          <p className="mb-2"><span className='text-lg font-semibold'>Phone:</span> +880 1731 941 873</p>
          <p className="mb-2"><span className='text-lg font-semibold'>GitHub:</span> <a className="link" href="https://github.com/theophildio" target="_blank" rel="noreferrer" >https://github.com/theophildio</a></p>
          <p className="mb-2"><span className='text-lg font-semibold'>Linkedin:</span> <a className="link" href="https://www.linkedin.com/in/theophil-dio-0788b616a" target="_blank" rel="noreferrer">https://www.linkedin.com/in/theophil-dio-0788b616a</a></p>
        </div>
      </div>
    </>
  );
};

export default MyDetail;