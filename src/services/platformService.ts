import Platform from '../entities/Platform';
import { APIClient } from './api-client';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

export default apiClient;
