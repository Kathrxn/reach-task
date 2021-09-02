import React from 'react';
import DWChart from 'react-datawrapper-chart'

function Crimeschart({crimes}){
  if (crimes === 'Cathays')
  return(
    <div>
      <div>
        <DWChart title="The 5 Most Common Street Crimes in Cathays in the Past Month" aria-label="chart" id="datawrapper-chart-0wUbN" src="https://datawrapper.dwcdn.net/0wUbN/1/" scrolling="no" frameborder="0"></DWChart>
      </div>
    </div>
  )
  if (crimes === 'ChurchVillage')
  return(
    <div>
      <div>
        <DWChart title="The 5 Most Common Street Crimes in Church Village in the Past Month" aria-label="chart" id="datawrapper-chart-nTtej" src="https://datawrapper.dwcdn.net/nTtej/1/" scrolling="no" frameborder="0"></DWChart>
      </div>
    </div>
  )
  if (crimes === 'TaffsWell')
  return(
    <div>
      <div>
        <DWChart title="The 5 Most Common Street Crimes in Taffs Well in the Past Month" aria-label="chart" id="datawrapper-chart-qVUJQ" src="https://datawrapper.dwcdn.net/qVUJQ/1/" scrolling="no" frameborder="0"></DWChart>
      </div>
    </div>
  )
}

export default Crimeschart;
