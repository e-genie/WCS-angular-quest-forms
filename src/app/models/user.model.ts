export class User {
  constructor(
    public username: string | null,
    public email: string | null,
    public password: string | null,
    public address: string | null
  ) {}
}
