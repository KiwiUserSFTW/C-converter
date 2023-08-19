import { CurrencyFormState, CurrencyActionTypes, CurrencyFormActions } from "../../types/forms";

const initialState: CurrencyFormState = {
    value: {
        from: 1,
        to: 1
    },
    currency: {
        from: "USD",
        to: "EUR"
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
        case CurrencyActionTypes.SET_FORM_CURRENCY:
            let [from, to] = action.payload;
            return { ...state, currency: { from: from, to: to } }
        default:
            return state;
    }
}