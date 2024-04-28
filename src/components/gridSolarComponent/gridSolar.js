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
import { Bar } from "react-chartjs-2";

function GridSolar(args) {
    console.log(args.state)

    const capitalizeWords = (str) => {
        return str.replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        });
    }

    return (
        <>
            <div className='col-2'></div>
            <div className="dataCard leftDataCard col-7">
                <Bar
                    data={{
                        labels: args.state.values.vals['Grid Electricity Consumption (KWh)'].labels.map(label => capitalizeWords(label)),
                        datasets: [
                            {
                                label: args.state.values.vals['Grid Electricity Consumption (KWh)'].graphLabel,
                                data: args.state.values.vals['Grid Electricity Consumption (KWh)'].data,
                                backgroundColor: "#692619",
                                fill: false,
                                borderRadius: 5,
                            },
                            {
                                label: args.state.values.vals['Solar KWh'].graphLabel,
                                data: args.state.values.vals['Solar KWh'].data,
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