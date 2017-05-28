import {Component, Input} from "@angular/core";
import {Form} from "./form.model";
import {FormService} from "./form.service";
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    providers: [FormService]
})


export class FormComponent{
    @Input() form: Form;

    constructor(private formService: FormService) {}


}