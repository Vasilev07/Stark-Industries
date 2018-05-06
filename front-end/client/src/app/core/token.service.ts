export class TokenService {
    public setTokenToLocalStorage(value: string): void {
        localStorage.setItem('access_token', value);
    }
    public setTokenToSessionStorage(value: string): void {
        sessionStorage.setItem('access_token', value);
    }
}
