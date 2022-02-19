//some helper functions which are used over and over again
import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([timeout(TIMEOUT_SEC), fetch(`${url}`)]);
    const data = await res.json();
    console.log(data);
    if (!res.ok) throw new Error(`${data.message}. ${res.status}`);
    return data;
  } catch (err) {
    //propagate error and promise will be rejected when resolved
    throw err;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
    const res = await Promise.race([timeout(TIMEOUT_SEC), fetchPro]);
    const data = await res.json();
    console.log(data);
    if (!res.ok) throw new Error(`${data.message}. ${res.status}`);
    return data;
  } catch (err) {
    //propagate error and promise will be rejected when resolved
    throw err;
  }
};
