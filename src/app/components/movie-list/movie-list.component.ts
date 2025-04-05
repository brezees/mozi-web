import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Movie } from '../../models/movie.model';
import { GenrePipe } from '../../pipes/genre.pipe';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, GenrePipe],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  @Output() selectMovie = new EventEmitter<Movie>();

  movies: Movie[] = [
    { id: 1, title: 'Nosferatu', genre: 'horror', duration: 132, posterUrl: 'assets/images/nosferatu.jpg' },
    { id: 2, title: 'The Wolf of Wall Street', genre: 'thriller', duration: 180, posterUrl: 'assets/images/thewolfofwallstreet.jpg' },
    { id: 3, title: 'Interstellar', genre: 'sci-fi', duration: 169, posterUrl: 'assets/images/interstellar.jpg' },
  ];

  onSelect(movie: Movie) {
    this.selectMovie.emit(movie);
  }
}