import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./Firebase"
import { setReduxLogin } from "./Redux Folder"

export const ListenerAuth=(dispatch)=>{
    // Implement authentication listener logic here
     const unsubscribe = onAuthStateChanged(auth,(user)=>{
        if(user){
            //user signed in
         dispatch(setReduxLogin({uid:user.uid,email:user.email}))
        }else{
            dispatch(setReduxLogin(null))
        }
    })
    return unsubscribe
}



// this code is not really need as proted route already does it job, but i am leavin it here just incase i might want to make reference to it later 