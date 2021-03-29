import JSL from '../core';

/**
 * функция позволяет получать данные с сервера методом get
 * @param {String} url адрес запроса
 * @param {String} dataTypeAnswer тип ответа, по-умолчанию json
 * @returns возвращается ответ с сервера, вид данных определяется параметром dataTypeAnswer
 */
JSL.prototype.get = async function (url, dataTypeAnswer = 'json') {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  switch (dataTypeAnswer) {
    case 'json':
      return await res.json();
    case 'text':
      return await res.text();
    case 'blob':
      return await res.blob();
  }
};

/**
 * функция позволяет отправлять данные на сервер методом post
 * @param {String} url адрес запроса
 * @param {any} data данные, которые нужно передать на сервер
 * @param {String} dataTypeAnswer тип ответа, по-умолчанию text
 * @returns возвращается ответ с сервера, вид данных определяется параметром dataTypeAnswer
 */
JSL.prototype.post = async function (url, data, dataTypeAnswer = 'text') {
  let res = await fetch(url, {
    method: 'POST',
    body: data
  });

  switch (dataTypeAnswer) {
    case 'json':
      return await res.json();
    case 'text':
      return await res.text();
    case 'blob':
      return await res.blob();
  }
};