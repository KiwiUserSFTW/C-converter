import { Dispatch } from "react";
import { CurrencyActionTypes, CurrencyFormActions } from "../../types/forms";
// Todo Alias
export const setValueFrom = (value: number) => {
    return async (dispatch: Dispatch<CurrencyFormActions>) => {
        try {
            dispatch({ type: CurrencyActionTypes.SET_FORM_VALUE_FROM, payload: value });
        } catch (err) {
            // dispatch error
        }
    }
}

export const setValueTo = (value: number) => {
    return async (dispatch: Dispatch<CurrencyFormActions>) => {
        try {
            dispatch({ type: CurrencyActionTypes.SET_FORM_VALUE_TO, payload: value})
        } catch (err) {
            //dispatch error
        }
    }
}