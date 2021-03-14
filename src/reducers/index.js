import {
    APPLY_NUMBER,
    CHANGE_OPERATION,
    CLEAR_DISPLAY,
    MEMORY_CLEAR,
    MEMORY_ADD,
    MEMORY_RECALL
} from './../actions';

export const initialState = {
    total: 100,
    operation: "*",
    memory: 100
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
        default:
            return num1;
    }
}

const reducer = (state, action) => {
    switch(action.type) {

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total: 0
            });

        case(MEMORY_CLEAR):
            return ({
                ...state,
                memory: 0
            });

        case(MEMORY_ADD):
            return ({
                ...state,
                memory: calculateResult(state.memory, state.total, '+')
            });

        case(MEMORY_RECALL):
            return ({
                ...state,
                total: state.memory
            });
    
        default:
            return state;
    }
}

export default reducer;