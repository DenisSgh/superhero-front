import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchHeroes,
  fetchHeroById,
  fetchAddHero,
  fetchDeleteHero,
  fetchEditHero,
  cleanHero,
} from './heroesOperations';

const items = createReducer([], {
  [fetchHeroes.fulfilled]: (_, { payload }) => payload.heroes.docs,
  [fetchAddHero.fulfilled]: (state, { payload }) => [...state, payload],
  [fetchDeleteHero.fulfilled]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
  [fetchEditHero.fulfilled]: (
    state,
    {
      payload: {
        id,
        nickname,
        realName,
        originDescription,
        superpowers,
        catchPhrase,
      },
    },
  ) =>
    state.map(el =>
      el.id === id
        ? {
            ...el,
            nickname: nickname,
            realName: realName,
            originDescription: originDescription,
            superpowers: superpowers,
            catchPhrase: catchPhrase,
          }
        : el,
    ),
});

const item = createReducer([], {
  [fetchHeroById.fulfilled]: (_, { payload }) => payload,
  [cleanHero.fulfilled]: (_, { payload }) => payload,
});

const page = createReducer([], {
  [fetchHeroes.fulfilled]: (_, { payload }) => payload.heroes.page,
});

const totalDocs = createReducer([], {
  [fetchHeroes.fulfilled]: (_, { payload }) => payload.heroes.totalDocs,
  [fetchAddHero.fulfilled]: (state, _) => state + 1,
});

export default combineReducers({ items, item, page, totalDocs });
