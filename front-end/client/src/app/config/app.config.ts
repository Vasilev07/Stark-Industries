export class AppConfig {
    public readonly apiUrl: string;
    public readonly jwt_issuer: string;

    constructor() {
        this.apiUrl = 'http://localhost:8000';
        this.jwt_issuer = 'stark';
    }
}
