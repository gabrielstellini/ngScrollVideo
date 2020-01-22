import {AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  videoRef: HTMLVideoElement;

  @ViewChild('videoPlayer', { static: true })
  set mainVideoEl(el: ElementRef) {
    this.videoRef = el.nativeElement;
  }

  frameNumber = 0; // start video at frame 0
  playbackConst = 1000; // speed of video. lower is faster

  ngAfterContentInit(): void {
    window.requestAnimationFrame(this.scrollPlay.bind(this));
  }

  scrollPlay() {
    this.frameNumber  = window.pageYOffset / this.playbackConst;
    this.videoRef.currentTime  = this.frameNumber;
    window.requestAnimationFrame(this.scrollPlay.bind(this));
  }
}
