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

function Food(args) {
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
                    labels: dataIndexes(args.state.values.vals['Food waste (Kg)'].labels.map(label => capitalizeWords(label)), args.selectedMonths),
                    datasets: [
                        {
                            label: args.state.values.vals['Food waste (Kg)'].graphLabel,
                            data: dataPoints(args.state.values.vals['Food waste (Kg)'].data, args.selectedMonths),
                            borderColor: "#692619",
                            backgroundColor: "rgba(217, 156, 174, 0.3)",
                            fill: true,
                            borderRadius: 5,
                        },
                        
                    ],
                }}
            />
        </div>
    );
}

export default Food;