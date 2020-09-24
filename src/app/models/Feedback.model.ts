export class FeedbackModel {
  private _type: string;
  private _message: string;


  constructor(type: string, errorMessage: string) {
    this._type = type;
    this._message = errorMessage;
  }

  get type(): string {
    return this._type;
  }

  get message(): string {
    return this._message;
  }
}
