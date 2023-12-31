import GoogleAuthProvider from '@firebase/auth'

export default function OAuth() {
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
        } catch (error) {
            console.log("could not sign in with google", error);
        }
    }
    return (
        <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
            Continue With Google
        </button>
    )
}
