import {useRef, useState} from "react";

const useInputLag = (callback) => {

    const timer = useRef();
    const [isTimeout, setIsTimeout] = useState(false);

    const startTimer = (...args) => {
        if(timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(async () => {
            await callback(...args);
            setIsTimeout(true);
        }, 1000);
    }


    return [startTimer, isTimeout];
}

export default useInputLag;