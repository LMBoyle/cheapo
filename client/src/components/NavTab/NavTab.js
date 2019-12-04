// Imports ========================================================================================

import React, { Fragment } from "react";
import { Link } from 'react-router-dom';


// Functions ======================================================================================

function NavTab(props) {

    return (
        <div>
            <br></br>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" tole="tab" href="#add">Add new goal </a>
                </li>
                {/* link to going to a different page with saved goals */}
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" role="tab" href="#see">See your goals </a>
                </li>
            </ul>

            {props.children}

        </div>

    )

}


// Export =========================================================================================

export default NavTab;