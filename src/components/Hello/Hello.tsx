import * as React from 'react';

interface HelloProps { appName: string }

export const Hello = (props: HelloProps) => <h1>Say Hello to {props.appName}!</h1>