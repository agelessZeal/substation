import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

interface ResponseData {
    data: any;
}

@Injectable()
export class HttpServiceHelper {
    constructor(private http: HttpClient) {
    }

    public httpAuthGetRequest(accessToken: string, url: string) {
        const httpOptions = {
            headers: {
                'Content-Type':  'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };
        return this.http.get<ResponseData>(url, httpOptions);
    }

    public httpGetRequest(accessToken: string, url: string) {
        // https://stackoverflow.com/questions/45286764/angular-httpclient-doesnt-send-header
        const httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };
        return this.http.get<ResponseData>(url, httpOptions);
    }

    public httpFileDownload(accessToken: string, url: string) {
        const httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },

        };
        return this.http.get<ResponseData>(url, {responseType: 'arraybuffer' as 'json', headers:httpOptions.headers});
    }

    public httpPostRequest(accessToken: string, url: string, postBody: any) {
        const httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };
        return this.http.post<ResponseData>(url, postBody, httpOptions);
    }

    public httpFileUploadRequest(accessToken: string, url: string, fileContent: string) {
        const httpOptions = {
            headers: {
                'Content-Type': 'text/plain',
                'Authorization': 'Bearer ' + accessToken
            }
        };
        return this.http.post<ResponseData>(url, fileContent, httpOptions);
    }

    public httpPutRequest(accessToken: string, url: string, putBody: any) {
        const httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };
        return this.http.put<ResponseData>(url, putBody, httpOptions);
    }

    public httpDeleteRequest(accessToken: string, url: string) {
        const httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };
        return this.http.delete<ResponseData>(url, httpOptions);
    }
}
