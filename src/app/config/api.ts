import { environment } from '../../environments/environment';

export const baseUrl = `${environment.backendUrl}/api/v1`;

export let Api = {
  login: `${baseUrl}/login`,
  register: `${baseUrl}/user`,
  getData: `${baseUrl}/user:`
};
