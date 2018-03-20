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

export async function get (collectionName) {
  let ret = [];
  let querySnapshot = await db.collection(collectionName).get();
  querySnapshot.forEach( doc => ret.push( doc.data() ) );
  return ret;
}


// function bindDb (collection, docRef)
//   db.collection(collection).doc(docRef).onSnapshot(function(doc) {
//     // console.log("Current data: ", doc.data());
//   });
// }

export default { add, get };