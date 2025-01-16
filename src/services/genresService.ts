import Genre from '../entities/Genre';
import { APIClient } from './api-client';

const apiClient = new APIClient<Genre>('/genres');

export default apiClient;
