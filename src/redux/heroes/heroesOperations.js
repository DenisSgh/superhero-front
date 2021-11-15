import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:4000/api';
axios.defaults.baseURL = 'https://superhero-db.herokuapp.com/api';

export const fetchHeroes = createAsyncThunk(
  'heroes/getHeroes',
  async ({ page }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/heroes?page=${page}&limit=5`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchHeroById = createAsyncThunk(
  'heroes/getHeroById',
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/heroes/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchAddHero = createAsyncThunk(
  'heroes/addHero',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/heroes`, formData);
      return data.hero;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchDeleteHero = createAsyncThunk(
  'heroes/deleteHero',
  async ({ _id }, { rejectWithValue }) => {
    try {
      await axios.delete(`/heroes/${_id}`);
      return _id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchEditHero = createAsyncThunk(
  'heroes/editHero',
  async ({ id, data: dataEdit }, { rejectWithValue }) => {
    try {
      console.log(dataEdit);
      const { data } = await axios.put(`/heroes/${id}`, dataEdit);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const cleanHero = createAsyncThunk(
  'heroes/cleanHero',
  async (_, { rejectWithValue }) => {
    try {
      return null;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
