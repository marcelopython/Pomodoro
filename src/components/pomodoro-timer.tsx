import React, { useEffect, useState, useCallback } from 'react';
import { useInterval } from '../hooks/use-interval'
import { secoundsToTime } from '../utils/seconds-to-time';
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
    const [mainTime, setMainTime] = useState(props.pomodoroTime);
    const [timeCounting, setTimeCounting] = useState(false);
    const [working, setWorking] = useState(false);
    const [resting, setResting] = useState(false);
    const [cyclesQtdManage, setCyclesQtdManage] = useState(
        new Array(props.cycles - 1).fill(true),
    );
    const [completedCycles, setCompletedCycles] = useState(0);
    const [fullWorkingTime, setFullWorkingTime] = useState(0);
    const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

    useInterval(() => {
        setMainTime(mainTime - 1);
        if ( working ) setFullWorkingTime(fullWorkingTime + 1); 

    }, timeCounting ? 1000 : null);

    const configurerWork = useCallback(() => {
        setTimeCounting(true);
        setWorking(true);
        setResting(false);
        setMainTime(props.pomodoroTime);
        audioStartWorking.play();
    }, [
        props.pomodoroTime,
        setTimeCounting,
        setWorking,
        setResting,
        setMainTime,
        audioStartWorking
    ])

    const configurerResting = useCallback((long: boolean) => {
        setTimeCounting(true);
        setWorking(false);
        setResting(true);
        setMainTime(props.pomodoroTime);
        if (long) {
            setMainTime(props.longRestTime);
        } else {
            setMainTime(props.shortRestTime);
        }
        audioFinishWorking.play();
    }, [
        props.longRestTime,
        props.shortRestTime,
        props.pomodoroTime,
        setTimeCounting,
        setWorking,
        setResting,
        setMainTime,
        setMainTime,
        audioFinishWorking
    ]);

    useEffect(() => {
        if (working) {
            document.body.classList.add('working')
        }
        if (resting) {
            document.body.classList.remove('working')
        }
        if (mainTime > 0) return;
        if (working && cyclesQtdManage.length > 0) {
            configurerResting(false);
            cyclesQtdManage.pop();
        } else if (working && cyclesQtdManage.length <= 0) {
            configurerResting(true);
            setCyclesQtdManage(new Array(props.cycles - 1).fill(true));
            setCompletedCycles(completedCycles + 1);
        }
        if (working) {
            setNumberOfPomodoros(numberOfPomodoros + 1);
        }
        if (resting) {
            configurerWork();
        }
    }, [
        working,
        resting,
        mainTime,
        cyclesQtdManage,
        numberOfPomodoros,
        completedCycles,
        configurerResting,
        configurerWork,
        props.cycles,
        configurerResting,
        setCyclesQtdManage,
    ]);

    return (
        <div className="pomodoro">
            <h2>Você está: {working ? 'Trabalhando' : 'Descansando'}</h2>
            <Timer mainTime={mainTime} />
            <div className="controls">
                <Button text="Work" onclick={() => configurerWork()} />
                <Button text="Rest" onclick={() => configurerResting(false)} />
                <Button text={
                    timeCounting ? 'Pause' : 'Play'
                }
                    className={!working && !resting ? 'hidden' : ''}
                    onclick={() => setTimeCounting(!timeCounting)}
                />
            </div>
            <div className="details">
                <p>Ciclos concluídos: {completedCycles}</p>
                <p>Horas trabalhadas: {secoundsToTime(fullWorkingTime)}</p>
                <p>Pomodoros concluidos: {numberOfPomodoros}</p>
            </div>
        </div>
    );
}