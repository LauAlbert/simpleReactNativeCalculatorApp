import { NUMBER_CLICKED,PERIOD_CLICKED, SYMBOL_CLICKED, EQUAL_CLICKED, CLEAR_CLICKED, PERCENT_CLICKED, PARENTHESES_CLICKED, SIGN_CLICKED } from './types.js'

export const numberSelect = (number) => {
    return {
        type: NUMBER_CLICKED,
        payload: number
    }
}

export const periodSelect = () => {
    return {
        type: PERIOD_CLICKED,
        payload: "."
    }
}

export const equalSelect = () => {
    return {
        type: EQUAL_CLICKED,
        payload: "="
    }
}

export const symbolSelect = (symbol) => {
    return {
        type: SYMBOL_CLICKED,
        payload: symbol
    }
}

export const clearSelect = () => {
    return {
        type: CLEAR_CLICKED
    }
}

export const percentSelect = () => {
    return {
        type: PERCENT_CLICKED,
        payload: "%"
    }
}

export const parenthesesSelect = () => {
    return {
        type: PARENTHESES_CLICKED
    }
}
export const signSelect = () => {
    return {
        type: SIGN_CLICKED
    }
}
