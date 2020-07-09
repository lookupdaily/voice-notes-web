import * as React from 'react';

export interface HelloProps { appName: string }

export const Hello = (props: HelloProps) => <h1>Say Hello to {props.appName}!</h1>