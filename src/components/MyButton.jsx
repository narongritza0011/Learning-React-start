function MyButton() {
  function handleClick() {
    alert("You click me!");
  }
  return (
    <div>
      <button onClick={handleClick}>MyButton</button>
    </div>
  );
}

export default MyButton;
