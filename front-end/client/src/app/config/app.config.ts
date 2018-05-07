export class AppConfig {
    public readonly apiUrl: string;
    // tslint:disable-next-line:variable-name
    public readonly jwt_issuer: string;

    constructor() {
        this.apiUrl = 'http://localhost:8000';
        this.jwt_issuer = 'stark';
    }
}
