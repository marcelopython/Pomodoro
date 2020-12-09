import { ConfigurationTime } from "../../components/configuration-time";

export type Configuration = {
    total_work: number,
    short_rest_time: number,
    long_rest_time: number,
    cycle_pomodoro: number
}

export default interface ConfigurationTimeContract{
    create(data: Configuration): Configuration;
    delete(id: string): void;
    get(): Configuration;
}