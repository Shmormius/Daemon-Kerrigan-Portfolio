import { ReactElement } from 'react';

export default function Signiture(): ReactElement {
  return (
    <div className="signiture-container">
      <img src="/image/signiture.png" alt="Signature" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
}