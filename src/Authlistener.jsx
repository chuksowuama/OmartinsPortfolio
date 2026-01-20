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