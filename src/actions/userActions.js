import firebase from "../lib/firebase";
export const UPDATE_BOOKMARK = "UPDATE_BOOKMARK";

export function storeDataToDB(uid, data = {}) {
  return () => {
    firebase
      .database()
      .ref("users/" + uid)
      .set({ ...data });
  };
}

export const updateBookmark = (data) => ({
  type: UPDATE_BOOKMARK,
  data,
});
