import config from '../config';

export default async function invokeApi({ path, method = 'GET', body }, userToken) {
  const url = `${config.apiGateway.URL}${path}?api_key=${config.apiGateway.KEY}`;
  const headers = {
    // 'api-key': userToken,
    Accept: 'Application/json',
  };

  body = (body) ? JSON.stringify(body) : body;
  const results = await fetch(url, {
    method,
    body,
    headers,
  });

  if (results.status !== 200) {
    throw new Error(await results.text());
  }

  return results.json();
}
