
import { GET_QUIZES } from './Types';


const initdata = {
    quizes: []
}

export const quizReducer = (state = initdata,actions)=>{
    console.log(actions.quizes);
    switch(actions.type){
        case GET_QUIZES:
        return{
            ...state,
            quizes: actions.quizes
        }
        default: return state;
    }
}