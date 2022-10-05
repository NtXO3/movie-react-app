import React, { createContext, useContext } from "react"
import { createUserWithEmailAndPassword, getRedirectResult, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect, signOut, User } from "firebase/auth"
import { auth, db } from "../firebase-config"
import { arrayUnion, doc, DocumentData, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { FirestoreShow, TMDBResponse } from "../types/shows"
import { useNavigate } from "react-router"

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthContextProvider({ children }: any) {
    const [user, setUser] = React.useState<User | null>(null)
    const [isLoading, setIsLoading] = React.useState(true);
    const googleProvider = new GoogleAuthProvider();
    const [oauthLoading, setOauthLoading] = React.useState(false);

    function signUp(email: string, password: string) {
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {
            savedMovies: [],
        })
    }

    function logIn(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    const getUserData = async () => {
        const docRef = doc(db, 'users', `${user?.email}`)
        const docSnap = await getDoc(docRef)
        return docSnap.data()?.savedMovies
    }

    const signInWithGoogle = async () => {
        await signInWithRedirect(auth, googleProvider);
        setOauthLoading(true)
        getRedirectResult(auth)
            .then((result) => {
                if (result) {
                    setUser(result.user)
                }
            })
            .catch(err => {
                setOauthLoading(false)
            })
    }

    const movieID = doc(db, 'users', `${user?.email}`)

    const saveShow = async (item: TMDBResponse, setSaved: (saved: boolean) => void, media_type?: 'movie' | 'tv') => {
        console.log(item)
        if (user?.email) {
            setSaved(true)
            await updateDoc(movieID, {
                savedMovies: arrayUnion({
                    id: item.id,
                    title: item.title || item.name,
                    backdrop_path: item.backdrop_path,
                    media_type: item.media_type || media_type,
                    release_date: item.release_date || item.first_air_date,
                    vote_average: item.vote_average,
                }
                )
            })
        } else {
            alert('Please log in to save a movie')
        }
    }

    const deleteSavedShow = async (item: TMDBResponse, setSaved: (saved: boolean) => void) => {
        setSaved(false)
        const data = await getUserData()
        const result = data?.filter((show: FirestoreShow) => show.id !== item.id)
        await updateDoc(movieID, {
            savedMovies: result
        })
    }

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
            setUser(currentUser)
            setIsLoading(false)
        })
        
        return () => {
            unsubscribe()
        }
    })

    return (
        <AuthContext.Provider value={{
            user, signUp, logIn, logOut, isLoading, saveShow, deleteSavedShow, getUserData, signInWithGoogle, oauthLoading
        }}>
            {children}
        </AuthContext.Provider>
    )

}

type AuthContextType = {
    user: User | null;
    signUp: (email: string, password: string) => void;
    logIn: (email: string, password: string) => void
    logOut: () => void;
    isLoading: boolean;
    saveShow: (item: TMDBResponse, setSaved: (saved: boolean) => void, type?: 'movie' | 'tv') => void;
    deleteSavedShow: (item: TMDBResponse, setSaved: (saved: boolean) => void) => void;
    getUserData: () => Promise<DocumentData | undefined>;
    signInWithGoogle: () => void;
    oauthLoading: boolean;
}

export function UserAuth() {
    return useContext(AuthContext)
}