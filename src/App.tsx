
import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer 
        pomodoroTime={300}
        shortRestTime={20}
        longRestTime={50}
        cycles={4}
      />
    </div>
  );
}

export default App;
