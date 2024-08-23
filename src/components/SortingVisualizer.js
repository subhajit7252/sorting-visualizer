import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BarChart from './BarChart.js';
import ControlPanel from './ControlPanel';
import { TypeAnimation } from 'react-type-animation';


function SortingVisualizer() {
    const [selectedAlgo, setSelectedAlgo] = useState('Bubble Sort');
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-5">
    <h1 className="text-4xl font-bold mb-8">
        <TypeAnimation
          sequence={[
            `${selectedAlgo} Visualizer`, // Types the text
            1000, // Waits 1 second
            '', // Clears the text
            500, // Waits half a second before starting again
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ display: 'inline-block' }}
        />
      </h1>
    <ControlPanel setSelectedAlgo={setSelectedAlgo} />
    <div className="w-full md:w-8/12 lg:w-7/12">
      <BarChart />
    </div>
  </div>
  );
}

export default SortingVisualizer;