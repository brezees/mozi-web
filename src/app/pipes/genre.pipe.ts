import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'genreName', standalone: true })
export class GenrePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'action': return 'Akció';
      case 'drama': return 'Dráma';
      case 'comedy': return 'Vígjáték';
      case 'horror': return 'Horror';
      case 'sci-fi': return 'Sci-Fi'; 
      case 'fantasy': return 'Fantasy';
      case 'romance': return 'Romantikus';
      case 'thriller': return 'Thriller';
      case 'animation': return 'Animáció';
      case 'documentary': return 'Dokumentumfilm';
      case 'adventure': return 'Kaland';
      case 'mystery': return 'Rejtély';
      case 'biography': return 'Életrajzi';
      case 'musical': return 'Zenei';
      case 'western': return 'Western';
      case 'crime': return 'Bűnügyi';
      case 'sport': return 'Sport';
      case 'war': return 'Háborús';
      case 'family': return 'Családi';
      case 'history': return 'Történelmi';
      case 'short': return 'Rövidfilm';
      case 'noir': return 'Film Noir';
      case 'superhero': return 'Szuperhős';
      case 'cult': return 'Kultikus';
      default: return value;
    }
  }
}