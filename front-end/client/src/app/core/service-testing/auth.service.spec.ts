import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AppConfig } from '../../config/app.config';
import { AuthService } from '../auth.service';

describe('AuthService', () => {
    let authService: AuthService;
    let mockAppConfig: jasmine.SpyObj<AppConfig>;
    let mockJwtService: jasmine.SpyObj<JwtHelperService>;
    beforeEach(() => {
        const spyAppConfig = jasmine.createSpyObj('AppConfig', ['apiUrl']);
        const spyJwtService = jasmine.createSpyObj('JwtHelperService', ['tokenGetter', 'decodeToken', 'isTokenExpired']);

        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                HttpClientTestingModule,
            ],
            providers: [
                AuthService,
                { provide: AppConfig, useValue: spyAppConfig },
                { provide: JwtHelperService, useValue: spyJwtService},
            ],
        });
        authService = TestBed.get(AuthService);
        mockAppConfig = TestBed.get(AppConfig);
        mockJwtService = TestBed.get(JwtHelperService);
    });

    it('isAuthenticated method calls tokenGetter', () => {
        // Act
        authService.isAuthenticated();

        // Assert
        expect(mockJwtService.tokenGetter).toHaveBeenCalled();
    });

    it('isAuthenticated calls decodeToken', () => {
        authService.isAuthenticated();

        expect(mockJwtService.decodeToken).toHaveBeenCalled();
    });

    it('isAuthenticated returns false if tokenGetter does not return a token', () => {
        mockJwtService.tokenGetter.and.returnValue('');
        authService.isAuthenticated();
        expect(authService.isAuthenticated()).toBeFalsy();
    });

    it('isAdmin method to have called tokenGetter through isAuthenticated method', () => {
        authService.isAdmin();
        expect(mockJwtService.tokenGetter).toHaveBeenCalled();
    });
});
