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

    return (
        <div className="dataCard leftDataCard col-5">
            <Line
                data={{
                    labels: args.state.values.vals['Water consumption (m3)'].labels.map(label => capitalizeWords(label)),
                    datasets: [
                        {
                            label: args.state.values.vals['Water consumption (m3)'].graphLabel,
                            data: args.state.values.vals['Water consumption (m3)'].data,
                            borderColor: "#692619",
                            borderRadius: 5,
                        },
                        {
                            label: args.state.values.vals['Water Reycled (m3)'].graphLabel,
                            data: args.state.values.vals['Water Reycled (m3)'].data,
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