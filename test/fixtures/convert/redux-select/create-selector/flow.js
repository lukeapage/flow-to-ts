// @flow

const a = createSelector<A, B, C, D>();
const b = createSelector<A, void, C, D>();
const c = createSelector<A, undefined, C, D>();
const d = createSelector<A, B, C, D, E, F>();
