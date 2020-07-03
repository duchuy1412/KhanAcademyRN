import firebase from "../lib/firebase";

export function storeDataToDB(uid, data = {}) {
  return () => {
    firebase
      .database()
      .ref("users/" + uid)
      .set({ ...data });
  };
}
