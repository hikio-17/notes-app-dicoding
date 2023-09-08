import React from 'react';

function useInput(defaultValue) {
   const [value, setValue] = React.useState(defaultValue);

   const onChangeValue = (event) => setValue(event.target.value);

   return [value, onChangeValue];
}

export default useInput;