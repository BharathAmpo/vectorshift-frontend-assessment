import { useState } from 'react';
import { BaseNode } from './baseNode';

export const BooleanNode = ({ id }) => {
  const [flag, setFlag] = useState(false);

  return (
    <BaseNode
      id={id}
      title="Boolean"
      outputs={[{ id: 'value' }]}
    >
      <label>
        Flag:
        <input
          type="checkbox"
          checked={flag}
          onChange={(e) => setFlag(e.target.checked)}
        />
      </label>
    </BaseNode>
  );
};
