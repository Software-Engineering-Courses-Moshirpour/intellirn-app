import hosting from './baseUrlAPI';

export async function postCall(endpoint, payload) {
  let url = '';

  let requestHeader = {
    'Content-Type': 'application/json',
  };

  if (localStorage.getItem('Auth') === '1') {
    requestHeader['Authorization'] = `Bearer ${window.localStorage.getItem('token')}`;
  }

  if (endpoint !== '' && endpoint !== undefined && endpoint.charAt(0) !== '/') {
    url = hosting.concat('/', endpoint);
  } else {
    url = hosting.concat(endpoint);
  }

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: requestHeader,
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(payload),
  });

  const status = response.status;
  const data = await response.json();

  return { status, data };
}
