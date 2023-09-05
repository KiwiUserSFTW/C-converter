export interface CurrencyFormState {
    value: {
        from: number,
        to: number
    },
    currency: {
        from: string,
        to: string
    }
}

export enum CurrencyActionTypes {
    SET_FORM_VALUE_FROM = "SET_FORM_VALUE_FROM",
    SET_FORM_VALUE_TO = "SET_FORM_VALYE_TO",
    REVERSE_FORM_CURRENCY = "REVERSE_FORM_CURRENCY",
    SET_FORM_CURRENCY_TO = "SET_FORM_CURRENCY_TO",
    SET_FORM_CURRENCY_FROM = "SET_FORM_CURRENCY_FROM"
}

interface SetFormValueFrom {
    type: CurrencyActionTypes.SET_FORM_VALUE_FROM;
    payload: number
}

interface SetFormValueTo {
    type: CurrencyActionTypes.SET_FORM_VALUE_TO;
    payload: any
}

interface ReverseFormCurrency {
    type: CurrencyActionTypes.REVERSE_FORM_CURRENCY;
}

interface SetFormCurrencyFrom {
    type: CurrencyActionTypes.SET_FORM_CURRENCY_TO;
    payload: string
}

interface SetFormCurrencyTo {
    type: CurrencyActionTypes.SET_FORM_CURRENCY_FROM;
    payload: string
}

export type CurrencyFormActions = SetFormValueFrom | SetFormValueTo | ReverseFormCurrency | SetFormCurrencyFrom | SetFormCurrencyTo;