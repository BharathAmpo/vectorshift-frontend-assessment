import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const LoggerNode = ({ id }) => {
  const [message, setMessage] = useState('');

  return (
    <BaseNode
      id={id}
      title="Logger"
      inputs={[{ id: 'message' }]}
    >
      <label>
        Message:
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      <div>Console log preview: {message}</div>
    </BaseNode>
  );
};
