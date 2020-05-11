function getSearchParams(url) {
  // eg) :3000/?customerRating=5&bookType=paperback,hardcover&language=english,german
  const urlArr = url.slice(1).split("&");

  const urlObj = urlArr.reduce((acc, curr) => {
    const arrKeyValue = curr.split("=");
    acc[arrKeyValue[0]] = arrKeyValue[1];
    // console.log(acc);
    return acc;
  }, {});

  return urlObj;
}

// getSearchParams("?customerRating=5&bookType=paperback");

export default getSearchParams;
