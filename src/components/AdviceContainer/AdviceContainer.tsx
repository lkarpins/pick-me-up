import * as React from 'react';
import "./AdviceContainer.css"

export interface AdviceContainerProps {
  advice: string;
}

export const AdviceContainer = ({
  advice
}: AdviceContainerProps) => {
  return (
    <div className='selection-view advice-background'>
      <h2 className='selection-view-heading'>{advice}</h2>
    </div>
  );
}
