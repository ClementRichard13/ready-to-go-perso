const Switch = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.setState(true);
        }}
      >
        ON
      </button>
      <button>OFF</button>
    </div>
  );
};

export default Switch;
