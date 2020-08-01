import { useEffect, useState, useRef } from 'react'
import { DiabetesForm } from '../components/DiabetesInterface';

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
        console.log(JSON.stringify(payload));

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
                    console.log("resp api ", data);
                    if(data.results){
                        const out:any = `Usted ${data.results.output1[0].scored_labels} tiene dibetes`;
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
    }

    return { state, callApi };
}
