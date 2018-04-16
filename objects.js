function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

const recipe = {eggs: 3}
