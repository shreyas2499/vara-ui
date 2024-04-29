import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
import { Line } from "react-chartjs-2";

function Gas(args) {
    

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
        <div className="dataCard leftDataCard col-5">
            <Line
                data={{
                  labels: dataIndexes(args.state.values.vals['Natural gas consumption (m3)'].labels.map(label => capitalizeWords(label)), args.selectedMonths),
                  datasets: [
                    {
                      label: args.state.values.vals['Natural gas consumption (m3)'].graphLabel,
                      data: dataPoints(args.state.values.vals['Natural gas consumption (m3)'].data, args.selectedMonths),
                      backgroundColor: "rgba(75,192,192,0.2)",
                      borderColor: "rgba(75,192,192,1)",
                      borderRadius: 5,
                      fill: true,
                    },
                  ],
                }}
              />
        </div>
    );
}

export default Gas;