export class LoginResponse {
    public uid: string;
    public sub: string;
    public accountName: string;
    public roles: Array<string>;
    public phoneNumber: string;
    public exp: string;
}