import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';

const APP_ROUTES : Routes =[
    { path: '', redirectTo: '/donations', pathMatch: 'full'},
    { path: 'donations', component: FormComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);