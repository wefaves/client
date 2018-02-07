import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../../services/bookmark.service';
import { Bookmark } from '../../models/bookmark/bookmark';
import { History } from '../../models/history/history';
import { ModalDismissReasons, NgbAccordionConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as FileSaver from 'file-saver';
import { FacebookService, InitParams, UIParams, UIResponse } from 'ngx-facebook';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.component.html'
})
export class FeedComponent implements OnInit{

  closeResult: string;

  constructor(config: NgbAccordionConfig,
              private modalService: NgbModal,
              private fb: FacebookService) {
    config.closeOthers = true;
    config.type = 'info';

    let initParams: InitParams = {
      appId: environment.facebook_app_id,
      xfbml: true,
      version: 'v2.9'
    };

    fb.init(initParams);
  }

  ngOnInit() {
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
  }

  downloadFile() {
    const bookmarksModel =  new Array<any>();

    // for (const bookmark of this.bookmarks) {
    //   bookmarksModel.push(Bookmark.GetModel(bookmark));
    // }

    const json = JSON.stringify(bookmarksModel);
    const blob = new Blob([json], {type: "application/json"});

    FileSaver.saveAs(blob, 'feed.json');
  }

  shareOnFacebook() {
    let params: UIParams = {
      href: 'https://www.wefaves.com',
      method: 'share'
    };

    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
  }
}
