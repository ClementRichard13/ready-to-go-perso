const Switch = (props) => {
  return (
    <div>
      <button
        className={props.state === true ? "active" : "inactive"}
        onClick={() => {
          props.setState(true);
        }}
      >
        ON
      </button>
      <button
        className={props.state === false ? "active" : "inactive"}
        onClick={() => {
          props.setState(false);
        }}
      >
        OFF
      </button>
    </div>
  );
};

export default Switch;
