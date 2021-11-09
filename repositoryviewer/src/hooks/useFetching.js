import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args) => {
        try {
            setIsLoading(true);
            await callback(...args);
        }
        catch (err) {
            setError(err);
            console.log('-----------------------------------');
            console.error(err);
            console.log('-----------------------------------');
        }
        finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];
}








//
// export const useAltFetching = (callback) => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState('');
//
//     const fetching = async ({action, ...args}) => {
//         try {
//             setIsLoading(true);
//             await callback({action, ...args});
//         }
//         catch (err) {
//             setError(err);
//         }
//         finally {
//             setIsLoading(false);
//         }
//     }
//
//     return [fetching, isLoading, error];
// }
//
