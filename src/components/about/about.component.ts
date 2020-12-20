import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `
    <section class="page-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">About Me</h2>
          </div>
        </div>

        <div class="head-img">
          <div class="col-lg-5 col-sm-6 center-img">
            <img class="img-fluid" src="assets/about/cv.svg"/>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <p>
              As a software engineer, I’m seeking constantly to improve my skills and learn new technologies in order to deliver quality product.
            </p>
            <p>
              On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and fully aware of the latest Front-end Development Tools.
            </p>
            <p>
              In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines.
            </p>
            <p>Below is a list of my current technical skills:</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`p { font-size: 18px; line-height: 1.8rem; margin: 0 0 1.3rem; text-align: justify;}`],
})
export class AboutComponent {}
