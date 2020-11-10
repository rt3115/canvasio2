import React from 'react';
import Chat from './chat/Chat';
import '../styles/party.module.css';

const canvases = [
  { name: 'sneakyturtle' },
  { name: 'unapologeticplatypus' },
  { name: 'relentlessgator' },
  { name: 'lazysloth' },
  { name: 'unapologeticplatypus' },
];

export const Party = (props) => {
  return (
    <div>
      <div className='sections'>
        <div className='column'>
          <div className='partyname'>{Party.name}</div>
        </div>
        <div className='column'>
          {canvases.map((canvas, key) => {
            return (
              <div className='canvasPost' key={key}>
                <div className='canvasImage'></div>
                <div className='username'>{canvas.name}</div>
              </div>
            );
          })}
        </div>
        <div className='column'>
          {canvases.map((canvas, key) => {
            return (
              <div className='video' key={key}>
                <div className='videoImage'></div>
                <div className='username'>{canvas.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Chat />
    </div>
  );
};
