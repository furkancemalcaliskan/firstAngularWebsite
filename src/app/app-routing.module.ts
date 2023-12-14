import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { IntroComponent } from './intro/intro.component';
import { ContentComponent } from './content/content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HeaderComponent},
  {path: 'Blog', component: BlogComponent},
  {path: 'About', component: IntroComponent},
  {path: 'Services', component: ContentComponent},
  {path: 'Testimonials', component: TestimonialComponent},
  {path: 'Gallery', component: GalleryComponent},
  {path: 'Clients', component: ClientsComponent},
  {path: 'Pricing', component: PricingComponent},
  {path: 'Article/:id', component: ArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
