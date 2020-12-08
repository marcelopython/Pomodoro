import React from 'react';
import './configurationTime.css';
import {ModalConfiguration} from './modal';

export default class ConfigurationTime extends React.Component{

    constructor(props = false){
        super(props);
    }

    render(): JSX.Element{
        return (
            <div className="configuration">
                <ModalConfiguration/>
            </div>
        )
    }
}