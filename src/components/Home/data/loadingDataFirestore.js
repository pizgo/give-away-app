// import db from "../../firebase/firebase.js";
//
// export const getDataReceivers = (setAllData) => db.collection("receivers").get().then((querySnapshot) => {
//     const receivers = [];
//     querySnapshot.forEach((doc) => {
//         receivers.push({
//             ...doc.data(),
//             id: doc.id
//         });
//     });
//     setAllData(receivers);
// });
//
