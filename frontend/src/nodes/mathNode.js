import { useState } from 'react';
import { BaseNode } from './baseNode';

export const MathNode = ({ id }) => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const result = Number(a) + Number(b);

  return (
    <BaseNode
      id={id}
      title="Math"
      inputs={[{ id: 'a' }, { id: 'b' }]}
      outputs={[{ id: 'result' }]}
    >
      <label>
        A:
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </label>

      <label>
        B:
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </label>

      <div>Result: {result}</div>
    </BaseNode>
  );
};
