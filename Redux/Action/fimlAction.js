export const actionTip = data => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
      // async database
      const profile = getState().firebaseReducer.profile;
      const authorID = getState().firebaseReducer.auth.uid;
      const firestore = getFirestore();
      firestore
        .collection("anVat")
        .add({
          ...data,
          
      
        })
        .then(() => {
          dispatch({ type: "ADD_FIML", data });
        })
        .catch(err => {
          console.log(err);
        });
    };
  };
  export const actionOder = data => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
      // async database
      const profile = getState().firebaseReducer.profile;
      const authorID = getState().firebaseReducer.auth.uid;
      const firebase = getFirebase()
    firebase
      .push(data.nguoiNhan, data)
        .then(() => {
          dispatch({ type: "ADD_FIML", data });
        })
        .catch(err => {
          console.log(err);
        });
    };
  };
  export const actionMp3 = data => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
      // async database
      const profile = getState().firebaseReducer.profile;
      const authorID = getState().firebaseReducer.auth.uid;
      const firestore = getFirestore();
      firestore
        .collection("mp3")
        .add({
          ...data,
          authorID: authorID,
          createDay: new Date()
        })
        .then(() => {
          dispatch({ type: "ADD_MP3", data });
        })
        .catch(err => {
          console.log(err);
        });
    };
  };
  