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

function Water(args) {
    console.log(args.state)

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
                    labels: dataIndexes(args.state.values.vals['Water consumption (m3)'].labels.map(label => capitalizeWords(label)), args.selectedMonths),
                    datasets: [
                        {
                            label: args.state.values.vals['Water consumption (m3)'].graphLabel,
                            data: dataPoints(args.state.values.vals['Water consumption (m3)'].data, args.selectedMonths),
                            borderColor: "#692619",
                            borderRadius: 5,
                        },
                        {
                            label: args.state.values.vals['Water Reycled (m3)'].graphLabel,
                            data: dataPoints(args.state.values.vals['Water Reycled (m3)'].data,args.selectedMonths),
                            borderColor: "#196932",
                            borderRadius: 5,
                        },
                    ],
                }}
            />
        </div>
    );
}

export default Water;