export interface AuthContent {
    token: string,
    saveToken: (token: string) => void
    clearToken: () => void
    isAuthorized: boolean,
}