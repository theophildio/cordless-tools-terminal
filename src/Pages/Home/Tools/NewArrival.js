import React from 'react';
import useTools from '../../../hooks/useTools';
import ToolCard from './ToolCard';

const NewArrival = () => {
  const [tools] = useTools();
  return (
    <div>
      <div>
        <h2 className='text-2xl lg:text-4xl font-bold mb-8 text-primary text-center capitalize'>Cordless Tools</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10'>
          {
            tools.map(tool => <ToolCard 
              key={tool._id}
              tool={tool}
            ></ToolCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default NewArrival;