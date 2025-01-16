export const load = async({ locals, url }) => {
	if (locals.user) {
		return {
			user: locals.user
		};
	}
	return {
		user: undefined
	};
};