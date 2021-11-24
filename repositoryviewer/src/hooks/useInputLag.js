import {useRef, useState} from "react";

const useInputLag = (callback) => {

    const timer = useRef();
    const [isTimeout, setIsTimeout] = useState(false);

    const startTimer = (...args) => {
        setIsTimeout(true);
        if(timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(async () => {
            await callback(...args);
            setIsTimeout(false);
        }, 1000);
    }


    return [startTimer, isTimeout];
}

export default useInputLag;