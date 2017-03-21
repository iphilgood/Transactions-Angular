export class LoginInfo {
  public static fromDto(data: any): LoginInfo {
    return new LoginInfo(data.login, data.password);
  }

  constructor(public login: string,
              public password: string) {
  }

  toDto(): any {
    return {
      login: this.login,
      password: this.password
    };
  }
}
