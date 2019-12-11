import React from "react";
import "./style.css";

function DashboardLoggedIn(props) {
  return (

    <div className="container d-flex flex-column">
      <p>
        Look at what your friends have been up to!
      </p>
      <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title"> Sammy saved 25% of their goal!</h5>
          <button> <i class="material-icons">insert_comment</i> </button>
          <button> <i class="material-icons">emoji_emotions</i> </button>
        </div>
      </div>
      <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">Sarah achieved her travel goal!</h5>
          <button> <i class="material-icons">insert_comment</i> </button>
          <button> <i class="material-icons">emoji_emotions</i> </button>
        </div>
      </div>
      <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">Tommy just added his first savings towards his goal!</h5>
          <button> <i class="material-icons">insert_comment</i> </button>
          <button> <i class="material-icons">emoji_emotions</i> </button>
        </div>
      </div>
    </div>


  );
}

export default DashboardLoggedIn;
