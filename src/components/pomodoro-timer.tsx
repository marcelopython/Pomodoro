import React, { useEffect } from 'react';
import { useInterval } from '../hooks/use-interval'
import { Button } from './button';
import { Timer } from './timer';

interface Props {
    pomodoroTime: number;
    shortRestTime: number;
    longRestTime: number;
    cycles: number
}

export function PomodoroTimer(props: Props): JSX.Element {
    const [mainTime, setMainTime] = React.useState(props.pomodoroTime);
    const [timeCounting, setTimeCounting] = React.useState(false);
    const [working, setWorking] = React.useState(false);

    useEffect(()=>{
        if(working){
            document.body.classList.add('working')
        }
    }, [working]);

    useInterval(() => {
        setMainTime(mainTime - 1);
    }, timeCounting ? 1000 : null);

    const configurerWork = () => {
        setTimeCounting(true);
        setWorking(true);
    }

    return (
        <div className="pomodoro">
            <h2>You are: working</h2>
            <Timer mainTime={mainTime} />
            <div className="controls">
                <Button text="Work" onclick={() => configurerWork()} />
                <Button text="teste" onclick={() => console.log(1)} />
                <Button text={timeCounting ? 'Pause' : 'Play'} onclick={() => setTimeCounting(!timeCounting)} />
            </div>
            <div className="details">
                <p>Testando: </p>
            </div>
        </div>
    );
}