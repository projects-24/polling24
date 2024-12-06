'use client';

import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import GraphContainer from './GraphContainer';
import RowFlexUi from './RowFlex';
import TextUi from './Text';


const ChartPie = ({data , title}) => {
  return (
    <div className='white padding-20 round-edge '>
        <TextUi text={title || ''}  bold color='dark400' block/>
          <ResponsiveContainer width={180} height={180}>
        <PieChart>
        <Pie
            data={data}
            dataKey="y"
            nameKey="label"
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="80%"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(1)}%`
            }
            labelLine={false}
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          {/* <Tooltip formatter={(value) => `${value} votes`} />

          <Tooltip formatter={(value) => `${value} votes`} />
             */}
        </PieChart>
      </ResponsiveContainer>
      {
        data.map(doc => (
            <div key={doc.label}>
                <RowFlexUi gap={0.5}>
                    <div style={{backgroundColor:doc.fill}} className="width-10 height-10"></div>
                    <TextUi size='small' bold text={doc.label}/>
                </RowFlexUi>
            </div>
        ))
      }
    </div>
  );
};

export default ChartPie;
