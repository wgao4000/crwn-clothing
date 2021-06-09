import {createSelector} from 'reselect';
const directory = state => state.directory;


export const sectionItems = createSelector([directory], directory => directory.sections);