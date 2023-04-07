import { storage } from "./firebase";

// rules_version = '2';
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if
//           request.time < timestamp.date(2023, 5, 6);
//     }
//   }
// }
async function uploadAvatarImg(imageUri, uid) {
  const response = await fetch(imageUri);
  const blob = await response.blob();
  const filename = `${uid}-${new Date().getTime()}`;
  const ref = storage.ref().child(`images/${uid}/avatar/${filename}`);
  await ref.put(blob);

  const url = await ref.getDownloadURL();
  return url;
}

export default uploadAvatarImg;
// const imageUrl = await uploadImage("file:///path/to/image");