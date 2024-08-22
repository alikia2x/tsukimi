export default function createSession(domain: string) {
	localStorage.setItem("login-session", domain);
}
