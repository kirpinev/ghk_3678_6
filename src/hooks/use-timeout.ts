import { useEffect, useRef } from 'react';

export const useTimeout = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!delay && delay !== 0) {
            return undefined;
        }

        const id = setTimeout(() => savedCallback.current(), delay);

        return () => {
            clearTimeout(id);
        };
    }, [delay]);
};
