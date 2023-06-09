import { injectable } from "inversify";
import { AuthenticationDataSource, GeneralResponse, GoogleUserResponse, PasswordChangeRequest, PasswordResetRequest, SignInRequest, SignInResponse, SignupRequest, SignupResponse, VerifyCodeRequest } from "./AuthenticationDataSource";


@injectable()
export class AuthenticationDataSourceMock implements AuthenticationDataSource{
    getGoogleUserInfo(token: string): Promise<GoogleUserResponse> {
       var response = {
        id: "1234",
        email: "lmsasajnr@gmail.com",
        verified_email: true,
        name: "Lewis Msasa",
        given_name: "Lewis Msasa",
        family_name: "Lewis Msasa",
        picture: "https://lh3.googleusercontent.com/a/AGNmyxYEledgglHbGC9hySFHSwh0OjiHSeIPxYrH8zxI=s96-c",
        locale: "en-GB"
      }
      return new Promise(resolve => setTimeout(() => resolve(response), 5000)) ;
    
    }
    emailExists(email: string): Promise<GeneralResponse> {
        return new Promise(resolve => setTimeout(() => resolve({
            message :"email not taken",
            success: false
        }), 5000)) ;
    }
    resetPassword(request: PasswordResetRequest): Promise<SignInResponse> {
        var res = new SignupResponse();
        res.refreshToken = "12344"
        res.token = "1234"
        res.success = true
        res.user = {
         email: request.username,
         username: "lmsasajnr",
         name: "Lewis Msasa",
         profilePicPath: "https://picsum.photos/200",
         id: "1234"
        }
        
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
    verifyCode(request: VerifyCodeRequest): Promise<GeneralResponse> {
        return new Promise(resolve => setTimeout(() => resolve({
            message :"code successfully verified",
            success: true
        }), 5000)) ;
    }
    resendCode(username: string): Promise<GeneralResponse> {
        return new Promise(resolve => setTimeout(() => resolve({
            message :"code successfully resend",
            success: true
        }), 5000)) ;
    }
    forgotPassword(email: string): Promise<GeneralResponse> {
        return new Promise(resolve => setTimeout(() => resolve({
            message :"code successfully resend",
            success: true
        }), 5000)) ;
    }
    changePassword(request: PasswordChangeRequest): Promise<GeneralResponse> {
        return new Promise(resolve => setTimeout(() => resolve({
            message :"Password successfully changed",
            success: true
        }), 5000)) ;
    }
    logout(): Promise<void> {
        return Promise.resolve()
    }
    signUp(request: SignupRequest): Promise<SignupResponse> {
        var res = new SignupResponse();
        res.refreshToken = "12344"
        res.token = "1234"
        res.success = true
        res.user = {
         email: request.username,
         username: "lmsasajnr",
         name: "Lewis Msasa",
         profilePicPath: "https://picsum.photos/200",
         id: "1234"
        }
        
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
    
    async signIn(request: SignInRequest): Promise<SignInResponse> {
       var res = new SignInResponse();
       res.refreshToken = "12344"
       res.token = "1234"
       res.success = true
       res.user = {
        email: request.username,
        username: "lmsasajnr",
        name: "Lewis Msasa",
        profilePicPath: "https://picsum.photos/200",
        id: "1234"
       }
       
       return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
}