import React from 'react';
import DWChart from 'react-datawrapper-chart'

function Outcomechart({outcome}){
  if (outcome === 'SouthWales')
  return(
    <div>
      <div>
        <DWChart className='chart' title="Outcome of Stop and Searches by South Wales Police in the Past Month" aria-label="chart" id="datawrapper-chart-bs47N" src="https://datawrapper.dwcdn.net/bs47N/3/" scrolling="no" frameborder="0" ></DWChart>
      </div>
    </div>
  );
  if (outcome === 'DyfedPowys')
  return(
    <div>
      <div>
        <DWChart className='chart' title="Outcome of Stop and Searches by Dyfed Powys Police in the Past Month" aria-label="chart" id="datawrapper-chart-j9uYk" src="https://datawrapper.dwcdn.net/j9uYk/1/" scrolling="no" frameborder="0"></DWChart>
      </div>
    </div>
  );
  if (outcome === 'NorthWales')
  return(
    <div>
      <div>
        <DWChart className='chart' title="Outcome of Stop and Searches by North Wales Police in the Past Month" aria-label="chart" id="datawrapper-chart-NrmMy" src="https://datawrapper.dwcdn.net/NrmMy/1/" scrolling="no" frameborder="0"></DWChart>
      </div>
    </div>
  );
  if (outcome === 'Merseyside')
  return(
    <div>
      <div>
        <DWChart className='chart' title="Outcome of Stop and Searches by Merseyside Police in the Past Month" aria-label="chart" id="datawrapper-chart-QHfJj" src="https://datawrapper.dwcdn.net/QHfJj/1/" scrolling="no" frameborder="0"></DWChart>
      </div>
    </div>
  );
};


export default Outcomechart;
