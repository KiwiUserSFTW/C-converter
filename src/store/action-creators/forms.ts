import { Dispatch } from "react";
import { CurrencyActionTypes, CurrencyFormActions } from "../../types/forms";
import ApiService from "../../api";

const Api = new ApiService();
// Todo Alias
export const setValueFrom = (value: number) => {
    return async (dispatch: Dispatch<CurrencyFormActions>) => {
        try {
            dispatch({ type: CurrencyActionTypes.SET_FORM_VALUE_FROM, payload: value });
        } catch (error) {
            console.log("FORMS-ERROR_setValueFrom = ", error);
        }
    }
}

export const setValueTo = (from: string, to: string, amount: number) => {
    return async (dispatch: Dispatch<CurrencyFormActions>) => {
        try {

            const value = await Api.getConvertedValue(from, to, amount);
            dispatch({ type: CurrencyActionTypes.SET_FORM_VALUE_TO, payload: Math.round(value) });
        } catch (error) {
            console.log("FORMS_ERROR_setValueTo = ", error);
        }
    }
}

export const setCurrencyFrom = (value: string) => {
    return async (dispatch: Dispatch<CurrencyFormActions>) => {
        try {
            dispatch({type: CurrencyActionTypes.SET_FORM_CURRENCY_FROM, payload:value})
        } catch (error) {
            console.log( "FORMS_ERROR_setCurrencyFrom", error)
        }
    }
}

export const setCurrencyTo = (value: string) => {
    return async (dispatch: Dispatch<CurrencyFormActions>) => {
        try {
            dispatch({type: CurrencyActionTypes.SET_FORM_CURRENCY_TO, payload:value})
        } catch (error) {
            console.log( "FORMS_ERROR_setCurrencyTo", error)
        }
    }
}