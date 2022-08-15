export const getToken = state => state.auth.token;
export const getIsLogin = state => state.auth.isLogin;
export const getUserName = state => state.auth.user.name;

export const getStatusFetch = state => state.auth.isFetching;
