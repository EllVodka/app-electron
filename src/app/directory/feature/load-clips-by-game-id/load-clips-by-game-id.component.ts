import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap, forkJoin, of, switchMap } from 'rxjs';
import { ClipsService } from 'src/app/shared/data-access/clips/clips.service';
import { ClipDto } from 'src/app/shared/dto/clip.dto';

@Component({
  selector: 'app-load-clips-by-game-id',
  templateUrl: './load-clips-by-game-id.component.html',
  styleUrls: ['./load-clips-by-game-id.component.scss']
})
export class LoadClipsByGameIdComponent implements OnInit{
  game = {
    title: 'Sons of the Forest',
    image: 'https://static-cdn.jtvnw.net/ttv-boxart/515479_IGDB-144x192.jpg',
    viewers: '50',
    followers: '150',
    tags: ['tag1', 'tag2']
  };
  clipId = "ANY_CLIP_ID";

  clips$?: Observable<ClipDto[]>
  constructor(private clipsService: ClipsService,private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.clips$ = this.clipsService.getClipsByGameId$(21779);
    this.route.params.pipe(
      switchMap(params => this.clipsService.getClipsById$(params["clipId"])
      ))}
  }
