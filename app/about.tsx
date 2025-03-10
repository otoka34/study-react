import React from 'react';

const App = () => {
  const handleClick = () => {
    alert("ボタンがクリックされました");
  };

  return (
    <div>
      <button onClick={handleClick}>クリック</button>
    </div>
  );
};

export default App;
