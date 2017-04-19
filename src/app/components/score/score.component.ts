import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Board } from '../../classes/board';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  providers: [GameService]
})
export class ScoreComponent implements OnInit {

  service: GameService;

  constructor(private gameService: GameService) { 
    this.service = gameService;
  }

  ngOnInit() {
  }

}
