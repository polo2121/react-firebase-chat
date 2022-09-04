import React, { useState } from "react";

const Main = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="content">
      <h1>Fun facts about React</h1>
      <ul>
        <li>
          <span>Was First released in 2013</span>
        </li>
        <li>
          <span>Was originally created by Jordan Walke</span>
        </li>

        <li>
          <span>Has well over 100K stars on Github</span>
        </li>

        <li>
          <span>Is maintained by Facebook</span>
        </li>
        <li>
          <span>
            Powers thousands of enterprise apps, including mobile apps
          </span>
        </li>
      </ul>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
    </div>
  );
};

export default Main;
