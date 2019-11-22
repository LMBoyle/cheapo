// Imports ========================================================================================

import React from "react";

// Functions ======================================================================================

function Input(props) {
  return (
    <div className="input-group input-group-lg">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

// Export =========================================================================================

export default Input;
