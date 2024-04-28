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

    return (
        <div className="dataCard leftDataCard col-5">
            <Line
                data={{
                    labels: args.state.values.vals['Food waste (Kg)'].labels.map(label => capitalizeWords(label)),
                    datasets: [
                        {
                            label: args.state.values.vals['Food waste (Kg)'].graphLabel,
                            data: args.state.values.vals['Food waste (Kg)'].data,
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