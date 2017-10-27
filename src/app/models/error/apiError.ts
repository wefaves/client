import { StandardError } from './standardError';

export class ApiError extends StandardError {

  public static fromResponse(response: Response): ApiError {
    const errObject: any = response.json();
    const apiError = new ApiError(response.status, errObject.error_description);

    return apiError;
  }

  constructor(error: number, cause: string) {
    super(error, cause);
  }
}