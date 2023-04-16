import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDetailedCardInterface } from './detailed-card.interface';
import { MockService } from '../../../shared/services/mock.service';

@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.scss'],
})

export class DetailedCardComponent implements OnInit {
  id!: string;

  class!: string;

  detailedCard?: IDetailedCardInterface;

  constructor(
    private router: ActivatedRoute,
    private mock: MockService,
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.class = this.router.snapshot.queryParamMap.get('class')!;

    this.detailedCard = {
      ...this.mock.getCardByTitle(this.id),
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias assumenda aut consequuntur culpa doloremque illo laudantium magni molestias, nesciunt nisi placeat quaerat quasi quibusdam repellat, soluta voluptates! In, saepe! ',
    };
  }
}
