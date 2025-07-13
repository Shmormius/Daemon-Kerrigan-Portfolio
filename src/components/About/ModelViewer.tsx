import { ReactNode, useEffect } from "react";

// Extend JSX to recognize 'model-viewer' as a valid intrinsic element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { [key: string]: any };
    }
  }
}

export default function ModelViewer(props: JSX.IntrinsicElements["model-viewer"]) {
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