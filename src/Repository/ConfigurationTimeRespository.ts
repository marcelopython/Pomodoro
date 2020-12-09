import ConfigurationTimeContract, {Configuration} from "./Contracts/ConfigurationTimeContract";


export default class ConfigurationTimeRepository implements ConfigurationTimeContract{

    create(data: Configuration): Configuration{
        localStorage.setItem('configuration', JSON.stringify(data));
        return data;
    }

    delete(id: string): void{
        localStorage.removeItem(id);
    }

    get(): Configuration{
        const dataConfiguration = localStorage.getItem('configuration') as string;
        return JSON.parse(dataConfiguration);
    }
}