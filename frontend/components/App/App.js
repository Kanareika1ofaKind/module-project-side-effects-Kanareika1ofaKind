import React, { useState } from 'react';


function App()  {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
const [count, setCount] = useState(0)
  console.log('Rendering component');
  return (
    <div>
      <h2>Hello, World!</h2>
      <div>The count is {count}</div>
      <button onClick={() => setCount(count + 1)}>inc</button>
    </div>
  )   
};

export default App;
