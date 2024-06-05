import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebase.config";

export default function GoogleLogin() {
  // Using the Google sign-in hook from Firebase authentication
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleGoogleSignIn = async () => {
    const result = await signInWithGoogle();

    // If user's email is available, prepare user info and send it to backend
    if (result?.user?.email) {
      const userInfo = {
        email: result?.user?.email,
        displayName: result?.user?.displayName,
        phoneNumber: result?.user?.phoneNumber,
        photoURL: result?.user?.photoURL,
        password: result?.user?.password
      };
      console.log(userInfo);

      // Sending user info to backend
      fetch("https://techtutorium-server.onrender.com/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          // Storing the JWT token received from backend in local storage
          localStorage.setItem("token", data?.token);
        })
        .catch((error) => {
          console.error("Error sending user info to backend:", error);
        });
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="px-5 py-3 bg-yellow-500 text-white w-full rounded-lg"
      >
        Google Login
      </button>
    </div>
  );
}
