import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { useHttp } from '../hooks/http';

import FieldAlert from './FieldAlert';

export default function UsernameField({classNames, placeholder, value, setValue}){
    const [invalidInput, setInvalidInput] = useState(false);
    const [validatingUsername, validUsername] = useHttp(`/register/verify/username?value=${value}`, [value]);

    return(
        <>
        <input
          id="username"
          className={classNames}
          type="text"
          placeholder={placeholder}
          value={value} 
          onChange={e => setValue(e.target.value)} 
        />
          { (validUsername && value != '' && value != null) && <FieldAlert classNames="w-full mt-2 border border-red-400 text-red-700 px-4 py-3 rounded relative" message="Username already exist!" />}
        </>
    )
}