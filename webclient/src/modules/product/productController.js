'use strict';

import crud from '../../services/firebaseCrud';

//// expect doc = object
export function addProduct (doc) {
  doc.createdAt = new Date();
  return crud.add('products', doc);
}

export async function getProducts () {
  return await crud.get('products');
}

getProducts().then(r=>console.log(r))

export default { addProduct, getProducts };