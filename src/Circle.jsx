import { useEffect, useState } from "react";

function Circle(props) {
  // const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   if (total !== props.total) {
  //     setTotal(props.total);
  //   }
  //   console.log("useeffect");
  // }, [props.total]);

  console.log(props, "circle");
  return (
    <div>
      Circle
      <p>{props.delivery.total}</p>
    </div>
  );
}

export default Circle;
