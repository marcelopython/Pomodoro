import React from 'react'

type Args = {
    name:string,
    idInput:string,
    title:string
}

export const Input = (args: Args): JSX.Element=>{
    return (
        <div className="form-group">
            <label htmlFor={args.idInput} className="label-control">{args.title}</label>
            <input type="number" name={args.name} id={args.idInput} className="form-control" placeholder={args.title} />
        </div>
    );
}