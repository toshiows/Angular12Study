import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/Photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private photoService: PhotoService,
    private actvatedRoute: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    const userName = this.actvatedRoute.snapshot.params.userName;
    this.photoService.listFromUser(userName).subscribe(photos => { 
      this.photos = photos 
    });
  }

}
