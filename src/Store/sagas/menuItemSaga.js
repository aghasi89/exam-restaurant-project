import {put} from 'redux-saga/effects'
import { recipies } from '../../datas'

export function* helloSaga() {
    console.log("Hello Sagas")
    try {
        const _recipies = recipies;
        yield  put()
    } catch (error) {
        
    }
}

