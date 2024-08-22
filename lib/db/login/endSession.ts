export default function endSession() {
	return localStorage.removeItem("login-session");
}
