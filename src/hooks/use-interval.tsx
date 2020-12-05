import { clear } from 'console';
import { useEffect, useRef } from 'react';


export function useInterval(
    callback:  CallableFunction, 
    delay: number | null,
    ): void{

    const savedCallback = useRef< CallableFunction>();

    useEffect(()=>{
        savedCallback.current = callback;
    }, [callback]);

    useEffect(()=>{
        function tick() {
            if (savedCallback.current) savedCallback.current();
        }
        if (delay !== null){
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}