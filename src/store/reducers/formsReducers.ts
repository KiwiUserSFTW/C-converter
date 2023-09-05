import { CurrencyFormState, CurrencyActionTypes, CurrencyFormActions } from "../../types/forms";
import DEFAULT_CURRENCIES from "../../consts/currencies";
const initialState: CurrencyFormState = {
    value: {
        from: 1,
        to: 1
    },
    currency: {
        from: DEFAULT_CURRENCIES.USD,
        to: DEFAULT_CURRENCIES.UAH
    }
}

export const formsReducer = (state: CurrencyFormState = initialState, action: CurrencyFormActions): CurrencyFormState => {
    switch (action.type) {
        case CurrencyActionTypes.SET_FORM_VALUE_FROM:
            return { ...state, value: { ...state.value, from: action.payload } }
        case CurrencyActionTypes.SET_FORM_VALUE_TO:
            return { ...state, value: { ...state.value, to: action.payload } }
        case CurrencyActionTypes.REVERSE_FORM_CURRENCY:
            return { ...state, currency: { from: state.currency.to, to: state.currency.from } }
        case CurrencyActionTypes.SET_FORM_CURRENCY_FROM:
            return { ...state, currency: { from: action.payload, to: state.currency.to } }
        case CurrencyActionTypes.SET_FORM_CURRENCY_TO:
            return { ...state, currency: { from: state.currency.from, to: action.payload } }

        default:
            return state;
    }
}