import { Select } from "../styles";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAction } from "../hooks/useAction";
import DEFAULT_CURRENCIES from "../consts/currencies";
import { ChangeEventHandler } from "react";

interface CurrencyProps {
    id: number
}
const Currency: React.FC<CurrencyProps> = ({ id }) => {
    const { currency: { from, to } } = useTypedSelector(state => state.forms);
    const { setCurrencyFrom, setCurrencyTo} = useAction();

    let type = id ? from : to;
    let changeCurrency = id ? setCurrencyFrom : setCurrencyTo;

    const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e:any) => {
        changeCurrency(e.target.value);
    }
    return (
        <>
            <Select onChange={handleSelect}>
                <option value={type}> {type} </option>
                {
                    Object.values(DEFAULT_CURRENCIES).map((e) =>  {
                        if(e != type) {
                            return <option value={e} key = {e}> {e} </option>
                        }
                    })

                };
            </Select>
        </>
    )
}



export default Currency;