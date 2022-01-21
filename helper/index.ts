import {useEffect, useState} from "react";

export const useMouse = () => {
    const [mousePosition, setMousePosition] = useState<any>({
        x: null,
        y: null
    });

    useEffect(() => {
        const handler = (e: any) => {
            setMousePosition({
                x: e.pageX,
                y: e.pageY
            })
        }
        window.addEventListener('mouseover', handler)
        return () => window.removeEventListener('mouseover', handler)
    }, []);

    return mousePosition
}