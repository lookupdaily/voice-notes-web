import * as React from 'react';
import './Hello.css'

interface HelloProps { appName: string }

export const Hello = (props: HelloProps) => {
  return(
    <h1 className="header">
      Say Hello to {props.appName}!
    </h1>
  );
};
