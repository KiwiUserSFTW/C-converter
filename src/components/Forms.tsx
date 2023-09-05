import { ChangeEventHandler } from "react";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useState, useEffect } from "react";
import { Input} from "../styles";
import Currency from "./Currency";
interface FormInputProps {
    handleChange: ChangeEventHandler<HTMLInputElement>;
    setType: (type: number) => void;
    type: any;
    id: number;
}

const Forms: React.FC = () => {

    return (
        <>
            <DetectActiveForm />
        </>
    )
}

const DetectActiveForm: React.FC = () => {
    const { value: { from, to }, currency: {from: currencyFrom, to: currencyTo}} = useTypedSelector(state => state.forms)
    const { setValueFrom, setValueTo } = useAction();
    const [type, setType] = useState(1);
    const [value, setValue] = useState(1);
    let currencies = [currencyFrom, currencyTo];
    type ? currencies = [currencyFrom, currencyTo] : currencies = [currencyTo, currencyFrom];

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e: any) => {
        if (!/^-?\d*\.?\d*$/.test(e.target.value)) return; 
          
        setValueFrom(+e.target.value)
        setValue(+e.target.value)

    }
    useEffect(() => {
        let [currencyFrom, currencyTo] = currencies;
        if (value == null || value == 0) return;
        setValueTo(currencyFrom, currencyTo, from)
    }, [from, currencyFrom, currencyTo])

    return (
        <>
            <FormInput handleChange={handleChange} setType={setType} type={type ? from : to} id={1} />
            <FormInput handleChange={handleChange} setType={setType} type={type ? to : from} id={0} />

        </>
    )
}
const FormInput: React.FC<FormInputProps> = ({ handleChange, setType, type, id }) => {
    const control = (e: any) => {
        
        setType(id)
        handleChange(e)
    }

    return (
        <>
            <Currency id = {id} />
            <Input type="text" onChange={control} value={type} /> <br />
        </>
    )
}

export default Forms;