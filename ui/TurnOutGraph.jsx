'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { curveCardinal } from 'd3-shape';
import TextUi from './Text';
import GraphContainer from './GraphContainer';
import InputUi from './input';
import SectionUI from './section';

const data = [
  { region: '', turnout: 0, percent: 0 },
  { region: 'Greater Accra', turnout: 4000, percent: 60 },
  { region: 'Ashanti', turnout: 5000, percent: 60 },
  { region: 'Bono', turnout: 2000, percent: 60 },
  { region: 'Bono East', turnout: 3000, percent: 60 },
  { region: 'Ahafo', turnout: 1500, percent: 60 },
  { region: 'Central', turnout: 3500, percent: 60 },
  { region: 'Eastern', turnout: 4500, percent: 60 },
  { region: 'Northern', turnout: 4000, percent: 60 },
  { region: 'Savannah', turnout: 1000, percent: 60 },
  { region: 'North East', turnout: 1200, percent: 60 },
  { region: 'Upper East', turnout: 2200, percent: 60 },
  { region: 'Upper West', turnout: 1800, percent: 60 },
  { region: 'Volta', turnout: 2500, percent: 60 },
  { region: 'Oti', turnout: 1100, percent: 60 },
  { region: 'Western', turnout: 3700, percent: 60 },
  { region: 'Western North', turnout: 1300, percent: 60 },
  { region: '', turnout: 0, percent: 0 },
];

const cardinal = curveCardinal.tension(0.2);

const TurnOutGraph = ({right, rawData}) => {

    const data = [
        { name: '', turnout: 0},
        { name: 'voterTurnoutAt1', turnout: Number(rawData.voterTurnoutAt9) },
        { name: 'voterTurnoutAt3', turnout: Number(rawData.voterTurnoutAt11) },
        { name: 'voterTurnoutAt5', turnout: Number(rawData.voterTurnoutAt1) },
        { name: 'voterTurnoutAt9', turnout: Number(rawData.voterTurnoutAt3) },
        { name: 'voterTurnoutAt11', turnout: Number(rawData.voterTurnoutAt5) },
        { name: '', turnout: 0},
      ];

  return (
    <div>
      <GraphContainer
        bottom={
          <div>
            {/* <SectionUI gap={1} />
            <TextUi text="Updated At 15:45" size="bigger" color="dark400" /> */}
          </div>
        }
        right={
          <div>
       {right || ''}
          </div>
        }
        title={rawData.pollingStationName}
        subtitle="TurnOuts"
      >
        <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E2263C" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#E2263C" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" angle={10} />
          <Tooltip />
          <Area
            dot={{ r: 4 }}
            activeDot={{ r: 10 }}
            type="monotone"
            dataKey="turnout"
            stroke="#0C8D43"
            fillOpacity={1}
            fill="url(#colorUv)"
            strokeWidth={2}
          />
        </AreaChart>
          {/* <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0C8D43" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#C1EBD3" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="region" angle={45} />
            <Tooltip />
            <Area
              dot={{ r: 4 }}
              activeDot={{ r: 10 }}
              type="monotone"
              dataKey="turnout"
              stroke="#08612E"
              fillOpacity={1}
              fill="url(#colorUv)"
              strokeWidth={2}
            />
          </AreaChart> */}
        </ResponsiveContainer>
      </GraphContainer>
    </div>
  );
};

export default TurnOutGraph;
