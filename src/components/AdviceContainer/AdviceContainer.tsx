import * as React from 'react';
import "./AdviceContainer.css"

export interface AdviceContainerProps {
    advice: string;
}

export function AdviceContainer ({
    advice
}: AdviceContainerProps) {
  return (
    <div className='advice-container'>
      <h2 className='advice-heading'>{advice}</h2>
    </div>
  );
}
