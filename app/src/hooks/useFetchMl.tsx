import { useEffect, useState, useRef } from 'react'
import { Inputdata, OutPredictionDto } from '../models/Ml';

export const useFetchMl = (url: string) => {

    /*
        Esta variable puede ser cambiada
        Sin volver a renderizar el componente
    */
    const isMounted = useRef(true);

    const [predicts, setPredicts] = useState<OutPredictionDto[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({message: ""});

    useEffect(() => {
        //Cambio a false cuando se desturye el componente
        return () => {
            isMounted.current = false;
        }
    }, [])

    const callApi = (path: string, body: Inputdata, callback: any) => {
        
        setLoading(true);

        fetch(url + path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (isMounted.current) {
                    if(data){
                        setPredicts([{output: data.output , probability: data.probability},...predicts])
                        setLoading(false)
                        callback()
                    }else{
                        setError({message: "Not Found"})
                        setLoading(false)
                    }
                }
            })
            .catch((e)=>{
                const out:any = `Ubo un error: ${e}`;
                setError({message: out})
                setLoading(false)
            })
    }

    return { predicts, loading, error, callApi };
}
