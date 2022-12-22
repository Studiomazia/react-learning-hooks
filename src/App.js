// import React, { useState } from "react";

// const App = () => {
//   const [details, setDetails] = useState({ counter: 0, name: "" });

//   function increaseCounter() {
//     setDetails((prev) => ({
//       ...prev,
//       counter: prev.counter + 1,
//     }));
//   }
//   console.log(details);
//   return (
//     <div>
//       <input type="text" onChange={(e) => e.target.value} />
//       <h1>
//         {details.name} has clicked {details.counter} times
//       </h1>
//       <button onClick={increaseCounter}>Increase</button>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";

const App = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Name:</h3> <input type="text" name="name" onChange={handleChange} />
      <h3>Email:</h3>{" "}
      <input type="email" name="email" onChange={handleChange} />
      <h3>Password:</h3>{" "}
      <input type="password" name="password" onChange={handleChange} />
      <h3>Address:</h3>{" "}
      <textarea onChange={handleChange} name="address"></textarea>
      <button type="submit">Submit Form</button>
    </form>
  );
};

export default App;
