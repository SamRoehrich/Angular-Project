import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Form } from "./form.model";


@Injectable()
export class FormService {
    private form: Form[] = [];

    constructor(private http: Http) {}

    addForm(form: Form) {
        this.form.push(form);
        const body = JSON.stringify(form);
        const headers = new Headers({'Content-type': 'application/json'});

        return this.http.post('http://localhost:3000/', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

}