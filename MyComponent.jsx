import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsemployed] = useState(false);

  const updateName = () => {
    setName("Halima");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleIsEmployed = () => {
    setIsemployed(!isEmployed);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Update name</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment age</button>
      <p>IsEmployed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleIsEmployed}>Toggle isEmployed</button>
    </div>
  );
}
export default MyComponent;
