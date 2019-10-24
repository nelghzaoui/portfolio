import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <navbar></navbar>
    <home id="home"></home>
    <about id="about"></about>
    <skill id="skills"></skill>
    <project id="projects"></project>
    <contact id="contact"></contact>
  `,
  styles: ['']
})
export class AppComponent {}
