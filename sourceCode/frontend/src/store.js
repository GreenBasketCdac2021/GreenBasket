
import { createStore,applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware=[thunk];


function saveToLocalStorage(state){
    try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('GreenBasketState', serializedState)
    } catch (error) {
    console.log(error);
    }
}

function loadFromLocalStorage(){
    try {
    const serializedState =localStorage.getItem("GreenBasketState")
    if(serializedState === null) return undefined
    return JSON.parse(serializedState);
    } catch (error) {
    console.log(error)
    return undefined;
    }
}

const persistedState = loadFromLocalStorage();

const store=createStore(
    rootReducer,
    persistedState,
    compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

store.subscribe(()=> saveToLocalStorage(store.getState()))

export default store;