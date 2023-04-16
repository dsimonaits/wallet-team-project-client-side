export const selectIsLoggedIn = state => state.session.isLoggedIn;

export const selectUser = state => state.session.user;

export const selectIsRefreshing = state => state.session.isRefreshing;

export const selectToken = state => state.session.token;
