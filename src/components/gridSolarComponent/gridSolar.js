import React, { useState } from 'react';
import { Bar } from "react-chartjs-2";

function GridSolar(args) {
    

    const capitalizeWords = (str) => {
        return str.replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        });
    }


    const dataPoints = (points, selectedPoints) => {
        const filteredIndexes = [];
        for (let i = 0; i < selectedPoints.length; i++) {
            const index = parseInt(selectedPoints[i], 10) - 1;
            if (index >= 0 && index < points.length) { 
                filteredIndexes.push(points[index]);
            }
        }

        return filteredIndexes
    }

    const dataIndexes = (labels, selectedPoints) => {
        const filteredIndexes = [];
        for (let i = 0; i < selectedPoints.length; i++) {
            const index = parseInt(selectedPoints[i], 10) - 1; 
            if (index >= 0 && index < labels.length) {
                filteredIndexes.push(labels[index]);
            }
        }

        return filteredIndexes   
    }

    return (
        <>
            <div className='col-2'></div>
            <div className="dataCard leftDataCard col-7">
                <Bar
                    data={{
                        labels: dataIndexes(args.state.values.vals['Grid Electricity Consumption (KWh)'].labels.map(label => capitalizeWords(label)), args.selectedMonths),
                        datasets: [
                            {
                                label: args.state.values.vals['Grid Electricity Consumption (KWh)'].graphLabel,
                                data: dataPoints(args.state.values.vals['Grid Electricity Consumption (KWh)'].data, args.selectedMonths),
                                backgroundColor: "#692619",
                                fill: false,
                                borderRadius: 5,
                            },
                            {
                                label: args.state.values.vals['Solar KWh'].graphLabel,
                                data: dataPoints(args.state.values.vals['Solar KWh'].data, args.selectedMonths),
                                backgroundColor: "#196932",
                                fill: false,
                                borderRadius: 5,
                            },

                        ],
                    }}
                />
            </div>
            <div className='col-3'></div>
        </>

    );
}

export default GridSolar;