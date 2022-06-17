import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lv-page-home',
  template: `
    <mat-card>
      <mat-card-title> Lorem ipsum </mat-card-title>
      <mat-card-content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          gravida nisi a elementum faucibus. Nulla facilisi. Sed ac consequat
          neque. Sed mi nunc, consequat eget ultricies eget, ullamcorper a diam.
          Maecenas at enim fermentum, rutrum nisl quis, congue orci. Suspendisse
          porttitor dolor erat, at mollis enim pretium ac. Proin placerat dolor
          eget interdum facilisis. Proin non nulla in eros aliquet tristique.
          Mauris vitae est efficitur, vulputate dui sit amet, consequat sapien.
          Donec tempus commodo quam, ut sollicitudin ante vehicula ac.
          Suspendisse nibh nisi, ullamcorper ut porta non, rhoncus vitae nunc.
          Mauris massa turpis, maximus elementum rhoncus vel, tincidunt quis
          risus. Pellentesque placerat, sapien facilisis placerat finibus, arcu
          turpis molestie orci, sodales porttitor mauris urna vel mi. Sed nec
          laoreet erat.
        </p>

        <p>
          Proin aliquam orci tortor, id bibendum nisi tristique eget. Mauris et
          nulla luctus magna pulvinar lobortis vel vitae metus. In ex ipsum,
          fringilla non blandit et, efficitur non orci. Sed pretium, odio eget
          vulputate pulvinar, dolor mauris tempus nisi, eu fermentum urna velit
          at nibh. In arcu eros, lobortis eget elit feugiat, ornare porta arcu.
          Etiam scelerisque elit eu feugiat fringilla. Praesent cursus euismod
          viverra. Aenean interdum congue sodales. Vivamus enim dui, lobortis
          ultricies mi sit amet, porttitor rutrum ligula. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Vivamus porta cursus sem.
          Integer mauris elit, porta nec ullamcorper eu, suscipit ut lacus.
          Morbi vitae mollis nulla. Phasellus at mauris ac felis ultricies
          efficitur. Donec mattis magna neque, sed dignissim est blandit eget.
          Suspendisse eu ex vitae nisl eleifend imperdiet sed a velit.
        </p>
        <p>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla id
          maximus mauris. Fusce id odio vitae lacus malesuada fringilla in quis
          risus. Duis quis volutpat felis. Donec eu condimentum nisl. Cras quis
          lectus eget magna pulvinar dapibus in quis nunc. Nunc efficitur metus
          lorem, id imperdiet nisl placerat a. Nullam mollis tristique metus
          eget fermentum. Donec magna diam, malesuada vel ante quis, mollis
          aliquet ipsum. Sed aliquam ligula sit amet felis vehicula laoreet.
        </p>
      </mat-card-content>
    </mat-card>
  `,
  styles: ['mat-card{margin:2rem;}'],
})
export class HomeComponent {
  constructor() {}
}
