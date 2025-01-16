import Game from '../entities/Game';
import { APIClient } from './api-client';

const apiClient = new APIClient<Game>('/games');

export default apiClient;
