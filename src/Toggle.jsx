function Toggle(props) {
  const handleClick = () => {
    props.handleUpdate(false);
  };
  console.log(props, "toggle");
  return (
    <div>
      Toggle
      <button type="button" onClick={handleClick}>
        {" "}
        Toggle Button
      </button>
    </div>
  );
}

export default Toggle;
