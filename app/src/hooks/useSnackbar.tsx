import React, { useState } from 'react'
export const useSnackbar = () => {

    /*
        Esta variable puede ser cambiada
        Sin volver a renderizar el componente
    */
    // const isMounted = useRef(true);
    
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const handleClose = (event?: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleOpen = (message?:string) => {
        console.log(message);
        
        setMessage(message || "");
        setOpen(true);
    };

    return { open, handleClose, handleOpen, message};
}
