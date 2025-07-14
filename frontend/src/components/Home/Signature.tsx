import { ReactElement } from 'react';

export default function Signature(): ReactElement {
  return (
    <div className="signature-container">
      <img src="/image/signature.png" alt="Signature" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
}