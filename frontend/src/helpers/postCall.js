import hosting from './baseUrlAPI';

export async function postCall(endpoint, payload) {
  let url = '';

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
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(payload),
  });

  const status = response.status;
  const data = await response.json();

  return { status, data };
}
