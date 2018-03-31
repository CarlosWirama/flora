'use strict';

// const {db} = global;
import db from './initializeFirebase';

export function add (collectionName, doc) {
	return db.collection(collectionName).add(doc)
  	.then( savedDoc => savedDoc.id)
  	.catch(function(error) {
	    console.error("Error add("+collectionName+"): ", error);
	});
}


// db.collection("products").get().then( querySnapshot => {
//     querySnapshot.forEach( doc => {
//         console.log(`${doc.id} => ${doc.data()}`);
//         console.log(doc.data());
//     });
// });

export async function get (collectionName, conditions = [] ) {
  try {
    let query = '';
    let ret = [];
    
    query = db.collection(collectionName);
    // conditions.forEach( i => query.where('description', '==', false) );
    // conditions.forEach( i => query.where('tags.ba', '==', false) );
    conditions.forEach( i => query = query.where(i.key, i.operator, i.value) );

    // console.log('conditions',conditions)
    // console.log('query',query)

    // query = query.where('tags.ba', '==', false);
    let querySnapshot = await query.get();
    // let querySnapshot = await query.where('tags.ba', '==', false).get();
    querySnapshot.forEach( doc => ret.push( doc.data() ) );
    return ret;
  } catch (err) {
    console.err(err)
    alert(err)
  }
}


// function bindDb (collection, docRef)
//   db.collection(collection).doc(docRef).onSnapshot(function(doc) {
//     // console.log("Current data: ", doc.data());
//   });
// }

export default { add, get };