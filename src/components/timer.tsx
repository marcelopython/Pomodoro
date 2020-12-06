import React from 'react';
import {secoundsToMinutes} from '../utils/seconds-to-minute'

type Props = {
  mainTime: number
}

export function Timer(props: Props): JSX.Element {
    return (
        <div className="timer">
            {secoundsToMinutes(props.mainTime)}
        </div>
    );
}