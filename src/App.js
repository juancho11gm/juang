import React from 'react';
import { css } from '@emotion/css';

const color = 'blue';

function App() {
  return (
    <div
      className={css`
        &:hover {
          color: ${color};
        }
      `}
    >
      <h1>JuanG</h1>
    </div>
  );
}

export default App;
