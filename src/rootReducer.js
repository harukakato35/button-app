import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import click from './modules/Click';



export const rootReducer = history => combineReducers({

    router: connectRouter(history),
    //左側の名前はなんでも良い、右側はimportしたものの名前
    click: click
});