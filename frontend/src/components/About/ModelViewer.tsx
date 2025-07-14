import { ReactNode, useEffect } from "react";

// Model Viewer specific props
interface ModelViewerProps {
  src: string;
  alt: string;
  'shadow-intensity'?: string;
  'camera-controls'?: boolean;
  'touch-action'?: string;
  style?: React.CSSProperties;
  autoplay?: boolean;
  'auto-rotate'?: boolean;
  'environment-image'?: string;
}

// Extend JSX to recognize 'model-viewer' as a valid intrinsic element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & ModelViewerProps;
    }
  }
}

export default function ModelViewer(props: ModelViewerProps): ReactNode {
    useEffect(() => {
        if (!window.customElements.get('model-viewer')) {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js';
            document.body.appendChild(script);
        }
    }, []);

    return (
        <model-viewer {...props}></model-viewer>
    );
}