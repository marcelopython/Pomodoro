import React from 'react';

type Props = {
    text: string;
    onclick?: ()=> void;
    className?: string;
}

export function Button(props: Props): JSX.Element {
    return (
        <button onClick={props.onclick} className={props.className}>
            {props.text}
        </button>
    );
}