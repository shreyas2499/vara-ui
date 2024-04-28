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
    console.log(args.state)

    const capitalizeWords = (str) => {
        return str.replace(/\b\w/g, function (char) {
            return char.toUpperCase();
          });
    }

    return (
        <div className="dataCard col-5">
            <Line
                data={{
                  labels: args.state.values.vals['Natural gas consumption (m3)'].labels.map(label => capitalizeWords(label)),
                  datasets: [
                    {
                      label: args.state.values.vals['Natural gas consumption (m3)'].graphLabel,
                      data: args.state.values.vals['Natural gas consumption (m3)'].data,
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