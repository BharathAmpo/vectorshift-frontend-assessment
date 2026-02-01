import { useState } from 'react';
import { BaseNode } from './baseNode';

export const ImageNode = ({ id }) => {
  const [image, setImage] = useState(null);

  return (
    <BaseNode
      id={id}
      title="Image"
      inputs={[{ id: 'file' }]}
      outputs={[{ id: 'preview' }]}
    >
      <label>
        Upload Image:
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>

      {image && <p>{image.name}</p>}
    </BaseNode>
  );
};
