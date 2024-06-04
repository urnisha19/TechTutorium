import { useSignInWithGithub } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebase.config";

export default function GitHubLogin() {
    // Using the GitHub sign-in hook from Firebase authentication
    const [signInWithGithub] = useSignInWithGithub(auth);

    const handleGitHubSignIn = async () => {
        const result = await signInWithGithub();

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
            fetch("http://localhost:3000/user", {
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
                onClick={handleGitHubSignIn}
                className="px-5 py-3 text-white bg-black w-full rounded-lg"
            >
                GitHub Login
            </button>
        </div>
    );
}
