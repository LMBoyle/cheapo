import React from "react";
import "../DashboardLoggedIn/styles.css";

function DashboardLoggedIn(props) {
    return (
 
            <div className = "container d-flex flex-column">
            <div className="card w-75">
                <div className="card-body">
                    <h5 className="card-title">{props.user}  Logged In!</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href=" " class="btn btn-primary">Button</a>
                </div>
            </div>
            <div className="card w-75">
                <div className="card-body">
                    <h5 className="card-title">Logged In!</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href=" " class="btn btn-primary">Button</a>
                </div>
            </div>
            <div className="card w-75">
                <div className="card-body">
                    <h5 className="card-title">Logged In!</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href=" " class="btn btn-primary">Button</a>
                </div>
            </div>
            </div>

  
    );
}

export default DashboardLoggedIn;
