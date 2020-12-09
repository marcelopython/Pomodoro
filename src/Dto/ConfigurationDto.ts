
export default class ConfigurationDto{

    constructor(
        private _totalWork: HTMLInputElement,
        private _shortRestTime: HTMLInputElement,
        private _longRestTime: HTMLInputElement,
        private _cyclePomodoro: HTMLInputElement
    ){}

    get totalWork(): string {
        return this._totalWork.value;
    }

    set totalWork(totalWork: HTMLInputElement) {
        this._totalWork = totalWork;
    }

    get shortRestTime(): number {
        return this._shortRestTime;
    }

    set shortRestTime(shortRestTime: number) {
        this._shortRestTime = shortRestTime;
    }

    get longRestTime(): number {
        return this._longRestTime;
    }

    set longRestTime(longRestTime: number) {
        this._longRestTime = longRestTime;
    }
    
    get cyclePomodoro(): number {
        return this._cyclePomodoro;
    }

    set cyclePomodoro(cyclePomodoro: number) {
        this._cyclePomodoro = cyclePomodoro;
    }
}