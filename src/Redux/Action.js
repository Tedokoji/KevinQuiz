
import { QUIZDATA } from './Types';

export const quizData = (data)=>{
    return{
        type: QUIZDATA,
        quizData: data
    }
}