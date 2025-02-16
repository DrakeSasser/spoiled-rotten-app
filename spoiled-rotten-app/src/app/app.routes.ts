import { Routes } from '@angular/router';
import { AboutComponent } from '../tabs/about/about.component';
import { MeetTheTeamComponent } from '../tabs/meet-the-team/meet-the-team.component';
import { ContactComponent } from '../tabs/contact/contact.component';
import { FaqComponent } from '../tabs/faq/faq.component';
import { BookNowComponent } from '../tabs/book-now/book-now.component';

export const routes: Routes = [
    //{ path: "", redirectTo: "/about", pathMatch:"full"},
    { path: "about", component: AboutComponent },
    { path: "book-now", component: BookNowComponent },
    { path: "meet-the-team", component: MeetTheTeamComponent },
    { path: "contact", component: ContactComponent},
    { path: "faq", component: FaqComponent}
];
