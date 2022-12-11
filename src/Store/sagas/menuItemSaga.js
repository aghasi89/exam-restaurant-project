import {put, takeEvery} from 'redux-saga/effects'
import { recipies } from '../../datas'
import { getDatasAction } from '../actions/menuActions';
import { CHANGE_CATEGORY, GET_DATAS } from '../types/menuTypes';

export function* getDatasWatcher() {
    console.log("lsecinq-")
    try {
        const _recipies = recipies;
        yield  put(getDatasAction(_recipies))
    } catch (error) {
        
    }
}

export function* getDatasWorker(){
    console.log("katarecinq")
    yield takeEvery(CHANGE_CATEGORY, getDatasWatcher)
}
