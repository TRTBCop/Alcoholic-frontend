import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const mockInstance = new MockAdapter(axios);
