import { GET_QUIZES } from './Types';


export const getQuiz = (data)=>{
    return{
        type: GET_QUIZES,
        quizes: data
    }
}