export interface APIList<Type> {
	data: Type[];
	pagination: {
		offset: number;
		limit: number;
	};
}
