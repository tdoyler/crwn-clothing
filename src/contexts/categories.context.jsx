import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.jsx";

export const CategoriesContext = createContext({
	categoriesMap: {},
});

// async calls can't be made at the start of useEffect. An async function can be created within useEffect however. Like the below

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments("categories");
			setCategoriesMap(categoryMap);
		};

		getCategoriesMap();
	}, []);

	const value = { categoriesMap };
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
