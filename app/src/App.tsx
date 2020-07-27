import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils  from '@date-io/moment';
import FormComponent from './components/FormComponent';

function App() {
  return (
    <div>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <FormComponent />
      </MuiPickersUtilsProvider>
    </div>

  );
}

export default App;
