import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sheet } from './components/sheet/sheet';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sheet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ndmtask';
}
