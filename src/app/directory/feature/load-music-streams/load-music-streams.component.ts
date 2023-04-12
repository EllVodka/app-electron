import { Component } from '@angular/core';

@Component({
  selector: 'app-load-music-streams',
  templateUrl: './load-music-streams.component.html',
  styleUrls: ['./load-music-streams.component.scss']
})
export class LoadMusicStreamsComponent {
  streams = [
    {
      image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_meloniemac-440x248.jpg',
      title: 'Ura biggit harry [Hard/ Hufflepuff]',
      avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1a9da63c-0934-452e-9360-13e2c4f23799-profile_image-50x50.png',
      streamer: 'MelonieMac',
      game: 'Hogwarts Legacy',
      tags: ['Christian'],
      viewers: '50'
    },
    {
      image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_fengrush-440x248.jpg',
      title: 'LEARNIN',
      avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/662cd845a9342f2e-profile_image-50x50.jpeg',
      streamer: 'FENGRUSH',
      game: 'Company of Heroes 3',
      tags: ['English'],
      viewers: '50'
    },
    {
      image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_ozku-440x248.jpg',
      title: '🔴 Daditos x2!! - EL Magozku, besto maguito en howartion, cual era mi casa? | !dados !tienda',
      avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f4020214-f9ad-4e3c-9577-e5adf2054f29-profile_image-50x50.png',
      streamer: 'Ozku',
      game: 'Hogwarts Legacy',
      tags: ['spanish', 'ClosedCaptions', 'ESP'],
      viewers: '50'
    },
    {
      image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_illojuan-440x248.jpg',
      title: '🪓 HOY NOS TOCA TRABAJAR (no se lo cree ni tu prima la coja) - Sons of the Forest ft. Andrés #2',
      avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/37454f0e-581b-42ba-b95b-416f3113fd37-profile_image-50x50.png',
      streamer: 'IlloJuan',
      game: 'Sons of the Forest',
      tags: ['DropsActivados', 'Español'],
      viewers: '50'
    },
    {
      image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_fextralife-440x248.jpg',
      title: '!GIVEAWAY !MAP THE END??? Hogwarts Hard Mode with Yuria',
      avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/a28b0d37-81d0-415a-8ed8-1a1f998ea26d-profile_image-50x50.png',
      streamer: 'Fextralife',
      game: 'Hogwarts Legacy',
      tags: ['English', 'hardmode'],
      viewers: '50'
    },
  ];
}
