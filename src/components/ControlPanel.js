import React from 'react';

function ControlPanel({ setSelectedAlgo }) {
  const handleAlgoChange = (e) => {
    setSelectedAlgo(e.target.value);
  };

  return (
    <div className="w-full flex justify-center bg-opacity-50 bg-[#8895fa] shadow-md p-4 mb-5 rounded-lg border border-transparent border-[rgba(151,71,255,0.7)]">
      <div className="mx-2">
        <label className="block text-white mb-1">Algorithm</label>
        <select
          className="bg-[#6979f8] text-white rounded px-4 py-2 border border-[#9747ff] outline-none"
          onChange={handleAlgoChange}
        >
          <option>Bubble Sort</option>
          <option>Selection Sort</option>
          <option>Insertion Sort</option>
        </select>
      </div>
      <div className="mx-2">
        <label className="block text-white mb-1">Animation Speed</label>
        <select className="bg-[#6979f8] text-white rounded px-4 py-2 border border-[#9747ff] outline-none">
          <option>Very Slow</option>
          <option>Normal</option>
          <option>Fast</option>
          <option>Fastest</option>
        </select>
      </div>
      <div className="mx-2">
        <label className="block text-white mb-1">Number of Datasets</label>
        <select className="bg-[#6979f8] text-white rounded px-4 py-2 border border-[#9747ff] outline-none">
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>
    </div>
  );
}

export default ControlPanel;
