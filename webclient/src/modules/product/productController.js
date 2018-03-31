'use strict';

import crud from '../../services/firebaseCrud';

//// expect doc = object
export function addProduct (doc) {
  doc.createdAt = new Date();
  return crud.add('products', doc);
}

//// expect keywords = [ 'red', 'rose', 'tulip', 'etc' ]	
export const getProducts = ( keywords=[] ) => crud.get('products',
  keywords.map( key => ({ key:'tags.'+key, operator:'==', value:true }) )
)

export default { addProduct, getProducts };