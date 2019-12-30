import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <Button variant="contained" color="primary">
      What's going on here?
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
