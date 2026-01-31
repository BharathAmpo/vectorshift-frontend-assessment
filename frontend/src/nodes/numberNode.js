import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NumberNode = ({ id }) => {
  const [number, setNumber] = useState(0);

  return (
    <BaseNode
      id={id}
      title="Number"
      outputs={[{ id: 'value' }]}
    >
      <label>
        Number:
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
