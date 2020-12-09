import React, { ElementRef, SyntheticEvent } from 'react';
import './configurationTime.css';
import {ModalConfiguration} from './modal';
import ConfigurationDto from '../Dto/ConfigurationDto'

export const ConfigurationTime = (): JSX.Element =>{


    const handleSubmitConfiguration = (event: React.ChangeEvent<HTMLInputElement[]>): void=>{
        event.preventDefault()
        let form = event.target;
        if(!form)return;
        console.dir(form)
        // new ConfigurationDto(input.name);


    }

    return (
        <div className="configuration">
            <ModalConfiguration formEvent={handleSubmitConfiguration}/>
        </div>
    )
}