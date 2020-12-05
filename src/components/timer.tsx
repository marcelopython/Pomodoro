import React from 'react';
import {secoundsToTime} from '../utils/seconds-to-time'

type Props = {
  mainTime: number
}

export function Timer(props: Props): JSX.Element {
    return (
        <div className="timer">
            {secoundsToTime(props.mainTime)}
        </div>
    );
}