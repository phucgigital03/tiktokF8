import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [result, setResult] = useState(value);
    useEffect(() => {
        const idSetTimeOut = setTimeout(() => {
            setResult(value);
        }, delay);
        return () => {
            clearTimeout(idSetTimeOut);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return result;
}

export default useDebounce;
