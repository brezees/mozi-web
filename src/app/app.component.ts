import { Component } from '@angular/core';
import { Movie } from './models/movie.model';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieListComponent, TicketFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedMovie!: Movie;

  handleMovieSelect(movie: Movie) {
    this.selectedMovie = movie;
  }
}
