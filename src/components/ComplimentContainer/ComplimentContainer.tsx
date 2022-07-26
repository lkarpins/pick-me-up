import * as React from 'react';
import "./ComplimentContainer.css"

export interface ComplimentContainerProps {
  compliment: string;
}

export const ComplimentContainer = ({
  compliment
}: ComplimentContainerProps) => {
  return (
    <div className='compliment-container'>
      <h2 className='compliment-heading'>{compliment}</h2>
    </div>
  );
}
