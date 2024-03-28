export class BaseHttpError extends Error {
  code: number;
  constructor(message: string = 'Unhandled Exception', code: number = 500) {
    super(message);
    this.code = code;
  }
}
