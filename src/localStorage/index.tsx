export const getValueByKey = (key: string): any => {
	const get = localStorage.getItem(key);
	return JSON.parse(get || "");
};

export const deleteValueByKey = (key: string): void => {
	localStorage.removeItem(key);
};

export const saveKeyValue = (key: string, value: any): void => {
	localStorage.setItem(key, JSON.stringify(value));
};
