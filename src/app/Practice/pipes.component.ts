import { Component } from '@angular/core';


@Component({
    selector: 'app-pipe',
    template: `
    Course : {{ course.title | uppercase }} <br />
    Student: {{ course.students | number }} <br />
    Rating : {{ course.rating | number:'1.1-1' }} <br />
    Price : {{ course.price | currency:'INR' }} <br />
    Release Date : {{ course.releaseDate | date }} <br />
    Description : {{ course.description | truncate: '80' }} <br />
    `
})

export class PipesComponent {
    course = {
        title: 'The Angular Course',
        rating: 4.93223,
        students: 123213,
        price: 120.12,
        releaseDate : new Date(2019, 3, 1),
        description: `For every Angular component you write, you may define not only an HTML template,
        but also the CSS styles that go with that template, specifying any selectors, rules,
        and media queries that you need.One way to do this is to set the styles property in the
        component metadata. The styles property takes an array of strings that contain CSS code.
        Usually you give it one string, as in the following example:`
    };
}
