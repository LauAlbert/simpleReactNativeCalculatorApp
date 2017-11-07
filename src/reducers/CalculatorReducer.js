import { NUMBER_CLICKED, PERIOD_CLICKED, SYMBOL_CLICKED, EQUAL_CLICKED, CLEAR_CLICKED, PERCENT_CLICKED, PARENTHESES_CLICKED, SIGN_CLICKED } from '../actions/types'

const INITIAL_STATE = { current:"", total:"", symbol:"", float:false, equalSelected: false, firstSymbolSelected: false, symbolSelected:false, percentSelected: false, parenthesesAmount: 0, parentheses: false };

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CLEAR_CLICKED:
            return INITIAL_STATE;

        case PERIOD_CLICKED:
            if(state.float) {
                return state;
            } else {
                if(state.symbolSelected)
                    return {...state, total: eval((state.current+"0.").split("%").join("/100")+Array(state.parenthesesAmount+1).join(")")), current: state.current+"0.", symbolSelected:false };
                return {...state, current: state.current+action.payload, float:true, symbolSelected:false  };
                
            }

        case NUMBER_CLICKED:
            console.log(state.parenthesesAmount);
            if(state.equalSelected) {
                return {...INITIAL_STATE, current: INITIAL_STATE.current+action.payload};
            }
            if(state.current === "0" && action.payload == "0")
                return state;
            if(state.percentSelected)
                return {...state, total: eval((state.current+"*"+action.payload).split("%").join("/100")+Array(state.parenthesesAmount+1).join(")")), current: state.current+"*"+action.payload, symbolSelected:false,  percentSelected: false };
            if(state.firstSymbolSelected)
                return {...state, total: eval((state.current+action.payload).split("%").join("/100")+Array(state.parenthesesAmount+1).join(")")), current: state.current+action.payload, symbolSelected:false };
            return {...state, current: state.current+action.payload, symbolSelected:false };

        case SIGN_CLICKED:
            if(state.current !== "") {
                if(!state.symbolSelected) {
                    return {...state, total: eval((state.current+"*-1").split("%").join("/100")+Array(state.parenthesesAmount+1).join(")")), equalSelected: false, current: state.current+"*-1", symbolSelected:false,  percentSelected: false };
                }
            } else {
                return {...state, total: "-1", current:"-1"};
            }
        
        case SYMBOL_CLICKED:
            if(state.current !== "") {
                if(!state.symbolSelected) {
                    return {...state, total: "", equalSelected: false, current: state.current+action.payload, firstSymbolSelected: true, symbolSelected:true, percentSelected: false };
                } else {
                    return {...state, total: "", equalSelected: false, current: state.current.slice(0,-1)+action.payload, firstSymbolSelected: true, symbolSelected:true, percentSelected: false };
                }
            }

        case EQUAL_CLICKED:
            if(state.total !== "" && state.parenthesesAmount === 0 && !state.symbolSelected) {
                return {...state, equalSelected: true, total: "", current: eval((state.current).split("%").join("/100")), symbolSelected:false, percentSelected: false };
            } else {
                return state;
            }


        case PERCENT_CLICKED:
            if(state.current !== "") {
                if(!state.symbolSelected && !state.percentSelected && !state.parentheses) {
                    return {...state, equalSelected: false, total: eval((state.current+action.payload).split("%").join("/100")+Array(state.parenthesesAmount+1).join(")")), current: state.current+action.payload, symbolSelected:false, percentSelected: true };
                }
            }

        case PARENTHESES_CLICKED:
            if(state.equalSelected || state.percentSelected) {
                return {...state, equalSelected:false, percentSelected: false, total: "", current: state.current+"*(", parenthesesAmount: state.parenthesesAmount+1, parentheses: true };
            }
            if(state.current.length>0 && !isNaN(state.current.slice(-1)) && state.parentheses) {
                return {...state, total: "", current: state.current+")", parenthesesAmount: state.parenthesesAmount-1, parentheses: false };
            }
            if(state.current.length>0 && !isNaN(state.current.slice(-1)) && !state.parentheses) {
                return {...state, total: "", current: state.current+"*(", parenthesesAmount: state.parenthesesAmount+1, parentheses: false, firstSymbolSelected: true };
            }
            return {...state, total: "", current: state.current+"(", parenthesesAmount: state.parenthesesAmount+1, parentheses: true, firstSymbolSelected: true };

        default:
            return state;
    }
}