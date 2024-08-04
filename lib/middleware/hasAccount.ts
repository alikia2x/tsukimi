import { useAtom } from "jotai";
import { accountsStateAtom } from "lib/states/accounts.state"

export default function hasAccount() {
	const [accounts, setAccounts] = useAtom(accountsStateAtom)
	if (accounts.length < 1) {

	}
}