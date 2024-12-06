'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import TextUi from './Text';
import GraphContainer from './GraphContainer';
import RowFlexUi from './RowFlex';
import AnimationUi from './Animation';


const MainChart = ({data , title, subtitle}) => {
  return (
    <GraphContainer
      title={title}
      subtitle={subtitle || ''}
      bottom={
        <div className='row'>
          {data.map((doc) => (
         doc.label.toString().toLowerCase() == "ndc" || doc.label.toString().toLowerCase() == 'npp' ?
         <div className="padding col width-200-max" key={doc.label}>
           <div
             className="card hover-up padding roundEdgeSmall"
             style={{ borderRight: `0.5rem solid ${doc.fill}` }}
           >
             <TextUi text={doc.y ? doc.y : doc.x ? doc.x : doc.y} bold heading="h3" />
             <TextUi text={doc.label} block size="minified" />
           </div>
       </div>: ""
          ))}
        </div>
      }
    >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <Tooltip />
          <Bar dataKey="y" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default MainChart;
