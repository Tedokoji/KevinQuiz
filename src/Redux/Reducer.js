
import { QUIZDATA } from './Types';


const initdata = {
    dataQuiz: []
}
export const reducer = (state = initdata,actions)=>{
    console.log(actions.quizData);
    switch(actions.type){
        case QUIZDATA:
            return{
                ...state,
                dataQuiz: actions.quizData
            }
        default: return state}
}