import { authActions } from '../actions';

export function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        authActions.logout();
        window.location.reload(true);
      }
      var error = (data && data.message) || response.statusText;
      if (data && data.error.message && response.statusText) {
        error = response.statusText + ' - ' + data.error.message;
      }
      return Promise.reject(error);
    }
    return data;
  });
}
