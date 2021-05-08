import { useState } from "react";
import Card from "./card";
import "./styles.css";

export default function App() {
  const [state, setState] = useState({
    selectedDelivery: {
      id: 1,
      disabled: true,
      total: 89
    }
  });

  const handleUpdate = (disable) => {
    // const temp = {
    //   selectedDelivery: {
    //     ...state.selectedDelivery,
    //     disabled: disable
    //   }
    // };
    // console.log(temp, "temp");
    setState({
      selectedDelivery: {
        ...state.selectedDelivery,
        disabled: disable
      }
    });
    // setState(temp);
  };

  console.log(state, "state");

  return (
    <div className="App">
      <Card delivery={state.selectedDelivery} handleUpdate={handleUpdate} />
    </div>
  );
}
