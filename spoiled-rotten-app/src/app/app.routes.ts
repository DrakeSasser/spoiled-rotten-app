import { Routes } from '@angular/router';
import { AboutComponent } from '../tabs/about/about.component';
import { MeetTheTeamComponent } from '../tabs/meet-the-team/meet-the-team.component';
import { ContactComponent } from '../tabs/contact/contact.component';

export const routes: Routes = [
    { path: "", redirectTo: "/about", pathMatch:"full"},
    { path: "about", component: AboutComponent },
    { path: "meet-the-team", component: MeetTheTeamComponent },
    { path: "contact-us", component: ContactComponent},
];
