import { createContext, useState } from "react";

// This is the actual value we want to access. Set to Null at the start but state will provider the User data
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
