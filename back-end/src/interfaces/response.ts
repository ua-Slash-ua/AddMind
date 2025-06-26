export interface IResponse {
    status: 'success' | 'error';
    message: string;
    data?: Object;
    status_code?: 200 | 201 | 400 | 401 | 403 | 404 | 500;
}
