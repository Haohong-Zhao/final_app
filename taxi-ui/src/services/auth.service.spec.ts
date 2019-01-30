import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthService } from './auth.service';

fdescribe('Authentication using a service', () => {
  let authService: AuthService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AuthService ]
    });
    authService = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should allow a user to sign up for a new account', () => {
    // Set up the data.
    const userData = UserFactory.create();
    const photo = new File(['photo'], userData.photo, {type: 'image/jpeg'});
    // Execute the function under test.
    authService.signUp(
      userData.username,
      userData.first_name,
      userData.last_name,
      'pAssw0rd!',
      userData.group,
      photo
    ).subscribe(user => {
      expect(user).toBe(userData);
    });
    const request = httpMock.expectOne('http://localhost:8000/api/sign_up/');
    request.flush(userData);
  });
});
