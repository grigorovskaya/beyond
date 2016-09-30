import { loginSuccess, loginFail } from '../redux/reducers/auth';
import { store } from '../redux/store';

export function fetchAuthStatus(store) {
  fetch('/auth/status', {credentials: 'same-origin'}).then((response) => {
    if(response.status !== 200) {
      store.dispatch(loginFail('attempted login on load, failed'));
    } else {
      return response.json().then((user) => {
        store.dispatch(loginSuccess(user));
      }); 
    }
  }).catch((err) => {
    store.dispatch(loginFail(err));
    console.error(err);
  });
};
