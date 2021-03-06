import { useEffect, useState, useRef } from 'react'
import { DiabetesForm } from '../models/DiabetesInterface';

export const useFetch = (url: string, initialvalue: any) => {

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

    const callApi = (body: any, callback: any) => {

        const payload: DiabetesForm = {
            inputs: {
                input1: [body],
            },
            globalParameters: {}
        }
        
        setState({ data: null, loading: true, error: null });

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (isMounted.current) {
                    if(data.results){
                        console.log(data.results);
                        const out:any = `Usted ${data.results.output1[0].scored_labels} tiene dibetes | ${data.results.output1[0].scored_probabilities}`;
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
