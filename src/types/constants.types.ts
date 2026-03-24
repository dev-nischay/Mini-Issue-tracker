export type ApiResponse<T> = {
  status: number;
  message?: string;
  data?: T;
};

export type ApiError = {
  success: false;
  error: string;
  fieldErrors?: {};
};
