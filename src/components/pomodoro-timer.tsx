import React, { useEffect } from 'react';
import { useInterval } from '../hooks/use-interval'
import { Button } from './button';
import { Timer } from './timer';
const bellStart = require('../sounds/bell-start.mp3');
const bellFinish = require('../sounds/bell-finish.mp3');
const audioStartWorking = new Audio(bellStart.default);
const audioFinishWorking = new Audio(bellFinish.default);

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
    const [resting, setResting] = React.useState(false);

    useEffect(()=>{
        if(working){
            document.body.classList.add('working')
        }
        if(resting){
            document.body.classList.remove('working')
        }
    }, [working]);

    useInterval(() => {
        setMainTime(mainTime - 1);
    }, timeCounting ? 1000 : null);

    const configurerWork = () => {
        setTimeCounting(true);
        setWorking(true);
        setResting(false);
        setMainTime(props.pomodoroTime);
        audioStartWorking.play();
    }

    const configurerResting = (long: boolean) => {
        setTimeCounting(true);
        setWorking(false);
        setResting(true);
        setMainTime(props.pomodoroTime);

        if(long){
            setMainTime(props.longRestTime);
        }else{
            setMainTime(props.shortRestTime);
        }
        audioFinishWorking.play();
    }

    return (
        <div className="pomodoro">
            <h2>You are: working</h2>
            <Timer mainTime={mainTime} />
            <div className="controls">
                <Button text="Work" onclick={() => configurerWork()} />
                <Button text="teste" onclick={() => configurerResting(false)} />
                <Button text={
                    timeCounting ? 'Pause' : 'Play'
                    }
                    className={!working && !resting ? 'hidden' : ''}
                    onclick={() => setTimeCounting(!timeCounting)} 
                />
            </div>
            <div className="details">
                <p>Testando: </p>
            </div>
        </div>
    );
}