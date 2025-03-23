import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { AboutComponent } from "../tabs/about/about.component";
import { MeetTheTeamComponent } from "../tabs/meet-the-team/meet-the-team.component";
import { ContactComponent } from "../tabs/contact/contact.component";
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
  })
  export class AppModule {}