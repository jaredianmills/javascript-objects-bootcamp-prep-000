function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function updateObjectWithKeyAndValue(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

const recipe = {eggs: 3}

console.log(updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup'))

console.log(recipe)
