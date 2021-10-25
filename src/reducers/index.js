import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';
import { uniqueId } from 'lodash';
import { uniqueNamesGenerator, countries } from 'unique-names-generator';

const config = {
    dictionaries: [countries]
};

const arrayCountries = [...new Array(10)].map(() => ({  id: uniqueId(), text: uniqueNamesGenerator(config) }));

const data = handleActions({
  [actions.addData](state) {   
    const newData = { id: uniqueId(), text: uniqueNamesGenerator(config) };
    return [...state, newData];
  },
},
arrayCountries);

export default combineReducers({
  data,
});