import { Component } from '@angular/core';

@Component({
    selector: 'app-header', //Avoid using any semantics because it could be gobal
    standalone: true, //standalone:false = module component
    template: './header.component.html', //Links to html semantics
})

export class HeaderComponent{ // Header -- Subject(Item), Component -- Verb(Job)

} 
