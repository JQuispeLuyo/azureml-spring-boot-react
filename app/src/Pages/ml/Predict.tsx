import React, {useEffect} from 'react'

//CustomHooks
import { useSnackbar } from '../../hooks/useSnackbar';
import { useFetchMl } from '../../hooks/useFetchMl';

//Components
import { MlForm } from '../../components/ml/form';
import { HistoryC } from '../../components/ml/history';
import { SnackbarC } from '../../components/Snackbar';

//Config
import { BASE_URL } from '../../config/config';

export const IndexForm: React.FC = () => {


    //Snackbar
    const { open, handleClose, handleOpen, message} = useSnackbar();

    //API
    const { predicts, loading, error, callApi } = useFetchMl(`${BASE_URL}`);
    console.log("adata use", predicts);

    //Submit
    const handleSubmit = (values: any) => {
        handleClose();
        const platform = values.plataforma === "A" ? "azureml" : "bigml";
        callApi(`/api/${platform}/predict`, values, () => handleOpen("Successful!:D"));
    }

    useEffect(() => {
        if(error.message !== ""){
            handleOpen(error.message);
        }
    }, [error,handleOpen])

    return (
        <div>
            <SnackbarC open={open} handleClose={handleClose} message={message} />
            <MlForm loading={loading} handleSubmit={handleSubmit} />
            <HistoryC predicts={predicts} />
        </div>
    );
}
