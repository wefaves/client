import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../../../services/bookmark.service';
import { Bookmark } from '../../../models/bookmark/bookmark';
import { History } from '../../../models/history/history';
import { ModalDismissReasons, NgbAccordionConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoryService } from '../../../services/history.service';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.component.html'
})
export class FeedComponent implements OnInit{

<<<<<<< HEAD
  history: [History];
  constructor(config: NgbAccordionConfig, private historyService: HistoryService) {
    // customize default values of accordions used by this component tree
=======
  bookmark: [Bookmark];
  history: [History];
  closeResult: string;

  constructor(config: NgbAccordionConfig,
              private bookmarkService: BookmarkService,
              private modalService: NgbModal) {
>>>>>>> release-1.3.0
    config.closeOthers = true;
    config.type = 'info';
  }

  ngOnInit() {
<<<<<<< HEAD
    this.getHistory();
  }

  getHistory() {
    this.historyService.getUserHistory().then(
      (history) => {
        this.history = history;
        console.log(history);
      }
    ).catch(
    );
=======
    this.bookmarkService.getUserBookmarks().then(
      (bookmark) => {
        this.bookmark = bookmark;
      }
    ).catch();
  }

  open(content) {
    this.modalService.open(content, { size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
>>>>>>> release-1.3.0
  }
}
