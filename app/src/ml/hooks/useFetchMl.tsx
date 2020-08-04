import { useEffect, useState, useRef } from 'react'
import { Inputdata } from '../models/Ml';

export const useFetchMl = (url: string, initialvalue: any) => {

    /*
        Esta variable puede ser cambiada
        Sin volver a renderizar el componente
    */
    const isMounted = useRef(true);

    const [state, setState] = useState({ data: null, loading: false, error: null })


    useEffect(() => {
        //Cambio a false cuando se desturye el componente
        return () => {
            isMounted.current = false;
        }
    }, [])

    const callApi = (body: Inputdata, callback: any) => {

        
        setState({ data: null, loading: true, error: null });

        fetch(url, {
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
                        console.log(data);
                        const out:any = `${data.output} | ${data.probability}`;
                        setState({
                            data: out,
                            loading: false,
                            error: null
                        })
                        callback()
                    }else{
                        setState({
                            data: data.error,
                            loading: false,
                            error: null
                        })
                        callback()
                    }
                }
            })
            .catch((e)=>{
                const out:any = `Ubo un error: ${e}`;
                setState({
                    data: out,
                    loading: false,
                    error: null
                });
                callback();
            })
    }

    return { state, callApi };
}
