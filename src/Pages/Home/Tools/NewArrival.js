import React from 'react';
import ToolCard from './ToolCard';

const NewArrival = () => {
  const tools = [
    {
      id: 1,
      toolName: '20V Lithium Battery Power Tool Electric Power Drill Cordless Drill',
      img: 'https://i.ibb.co/WkfnLSh/tool-1.webp',
      description: 'Two-speed adjustment, push forward-high speed, push backward-slow speed and easily cope with various working conditions.',
      quantity: 700,
      price: 14
    },
    {
      id: 2,
      toolName: '20V Lithium Battery Power Tool Electric Power Drill Cordless Drill',
      img: 'https://i.ibb.co/WkfnLSh/tool-1.webp',
      description: 'Two-speed adjustment, push forward-high speed, push backward-slow speed and easily cope with various working conditions.',
      quantity: 700,
      price: 14
    },
    {
      id: 3,
      toolName: '20V Lithium Battery Power Tool Electric Power Drill Cordless Drill',
      img: 'https://i.ibb.co/WkfnLSh/tool-1.webp',
      description: 'Two-speed adjustment, push forward-high speed, push backward-slow speed and easily cope with various working conditions.',
      quantity: 700,
      price: 14
    },
    {
      id: 4,
      toolName: '20V Lithium Battery Power Tool Electric Power Drill Cordless Drill',
      img: 'https://i.ibb.co/WkfnLSh/tool-1.webp',
      description: 'Two-speed adjustment, push forward-high speed, push backward-slow speed and easily cope with various working conditions.',
      quantity: 700,
      price: 14
    },
    {
      id: 5,
      toolName: '20V Lithium Battery Power Tool Electric Power Drill Cordless Drill',
      img: 'https://i.ibb.co/WkfnLSh/tool-1.webp',
      description: 'Two-speed adjustment, push forward-high speed, push backward-slow speed and easily cope with various working conditions.',
      quantity: 700,
      price: 14
    },
    {
      id: 6,
      toolName: '20V Lithium Battery Power Tool Electric Power Drill Cordless Drill',
      img: 'https://i.ibb.co/WkfnLSh/tool-1.webp',
      description: 'Two-speed adjustment, push forward-high speed, push backward-slow speed and easily cope with various working conditions.',
      quantity: 700,
      price: 14
    },
  ]
  return (
    <div>
      <div>
        <h2 className='text-4xl font-bold mb-8 text-primary text-center capitalize'>Cordless Tools</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          {
            tools.map(tool => <ToolCard 
              key={tool.id}
              tool={tool}
            ></ToolCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default NewArrival;