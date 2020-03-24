export const actionsignIn = cer => {
    return (dispatch, getState, { getFirebase }) => {
      console.log(cer.email)
      const firebase = getFirebase();
      firebase
        .auth()
        .signInWithEmailAndPassword(cer.email, cer.password)
        .then(() => {
            console.log("OKE")
          dispatch({ type: "LOGIN_OKE", cer });
        })
        .catch(error => {
          dispatch({ type: "LOGIN_ERR", error });
        });
    };
  };
  export const actionsignOut = () => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("OUT")
          dispatch({ type: "LOGOUT" });
        });
    };
  };
  
  export const actionSignUp = reg => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
      firebase
        .auth()
        .createUserWithEmailAndPassword(reg.email, reg.password)
        .then(res => {
          return firestore
            .collection("user")
            .doc(res.user.uid)
            .set({
              firstName: reg.firstName,
              lastName: reg.lastName,
              nickname: reg.lastName[0] + reg.firstName[0]
            });
        })
        .then(
          dispatch({
            type: "REG"
          })
        )
        .catch(error => {
          dispatch({ type: "REG_ERR", error });
        });
    };
  };
  