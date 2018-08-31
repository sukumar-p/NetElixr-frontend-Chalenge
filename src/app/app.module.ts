import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginServices } from './loginservices';
import { userslistService } from './userslist.service';
import { UserslistComponent } from './userslist/userslist.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackServices } from './feedbackservice';
const routes :  Routes=([
  {path : '', redirectTo : 'login', pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'userslist', component : UserslistComponent},
  {path : 'feedback', component : FeedbackComponent}
])


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserslistComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [LoginServices,userslistService,FeedbackServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
