var userInfo = {};

const NewUserHandler = (firebaseInst, userInfo) =>{
    try {
        firebaseInst.signUpWithEmail(userInfo)
    } catch (err) {
        console.log(err);
    }  
}

export default NewUserHandler