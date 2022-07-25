import * as React from 'react';
import "./ComplimentContainer.css"

export interface ComplimentContainerProps {
    compliment: string;
}

export function ComplimentContainer({
    compliment
 }: ComplimentContainerProps) {
  return (
    <div className='compliment-container'>
    <h1>Hello</h1>
      <h2 className='compliment-heading'>{compliment}</h2>
    </div>
  );
}
