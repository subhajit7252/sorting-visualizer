import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: '', value: 400 },
  { name: '', value: 600 },
  { name: '', value: 300 },
  { name: '', value: 500 },
  { name: '', value: 450 },
  { name: '', value: 700 },
  { name: '', value: 550 },
  { name: '', value: 650 },
  { name: '', value: 350 },
  { name: '', value: 750 },
];

function CustomBarChart() {
  return (
    <motion.div
      className="w-full h-[650px] bg-black rounded-lg p-5" style={{border: "1px solid #9747ff"}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3.5 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        
        <BarChart data={data} barSize={15}>
            {/* <CartesianGrid stroke="#929292" vertical={false} /> */}
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          {/* <Tooltip cursor={{ fill: '#2d3748' }} /> */}
          <Bar dataKey="value" fill="url(#gradient)" radius={[10, 10, 0, 0]} />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6979f8" />
              <stop offset="100%" stopColor="#9747ff" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default CustomBarChart;
