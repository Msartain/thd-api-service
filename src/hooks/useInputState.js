import { useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default initialValue => {
    console.log(initialValue)
    const [value, setValue] = useState(initialValue);
    const handleChange = e => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue('');
    };
    return [value, handleChange, reset];
}
