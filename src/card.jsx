import Toggle from "./Toggle";
import Circle from "./Circle";
import List from "./List";
import { useMemo } from "react";

function Card(props) {
  const { total } = props.delivery;
  const circleComponent = useMemo(() => <Circle delivery={props.delivery} />, [
    total
  ]);
  return (
    <div>
      <Toggle delivery={props.delivery} handleUpdate={props.handleUpdate} />
      {circleComponent}
      <List />
    </div>
  );
}

export default Card;
