import React, { useState } from 'react'
export const useSnackbar = () => {

    /*
        Esta variable puede ser cambiada
        Sin volver a renderizar el componente
    */
    // const isMounted = useRef(true);
    
    const [open, setOpen] = useState(false);
    const handleClose = (event?: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    // useEffect(() => {
    //     //Cambio a false cuando se desturye el componente
    //     return () => {
    //         isMounted.current = false;
    //     }
    // }, [])



    return { open, handleClose, handleOpen};
}
