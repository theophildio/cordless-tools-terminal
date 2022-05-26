import React from 'react';
import useTools from '../../../hooks/useTools';
import ToolCard from './ToolCard';

const ToolForHome = () => {
  const [tools] = useTools();
  const toolForHome = tools.slice(0, 4);
  return (
    <>
      <div className='py-8 lg:py-12'>
        <h2 className='text-2xl lg:text-4xl font-bold mb-8 text-primary text-center capitalize'>Cordless Tools</h2>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10'>
          {
            toolForHome.map(tool => <ToolCard 
              key={tool._id}
              tool={tool}
            ></ToolCard>)
          }
        </div>
      </div>
    </>
  );
};

export default ToolForHome;