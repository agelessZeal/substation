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
    /**
     * Return only Response Body
     * @param accessToken
     * @param url
     */
    public httpGetRequest(accessToken: string, url: string) {
        const httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
        };
        return this.http.get<ResponseData>(url, httpOptions);
    }

    /**
     * Return both Header and Response Body
     * @param accessToken
     * @param url
     */
    public httpGetRequestWithHeader(accessToken: string, url: string) {
        return this.http.get<ResponseData>(url, {headers:new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }),observe: 'response'});
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

    public httpPutRequest(accessToken: string, url: string, putBody: any) {
        const httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };
        return this.http.put<ResponseData>(url, putBody, httpOptions);
    }
    public httpPatchRequest(accessToken: string, url: string, putBody: any) {
        const httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };
        return this.http.patch<ResponseData>(url, putBody, httpOptions);
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
