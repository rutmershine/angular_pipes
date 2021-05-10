import { Component } from '@angular/core';
import { CurrentUserService } from './services/current-user.service';//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAgent: boolean;

  constructor(private currentUser: CurrentUserService){//
    this.isAgent = this.currentUser.getIsAgent();//זה לא עובד ולא משפיע כי זה משתנה פרימיטיב, ולכן זה לא 2 הפניות לאותו אוביקט, ואין פה סינכרון, לכן השתמשתי במשתנה אאוטפוט שזה לא הדרך האידיאלית, ובשביל זה יש איבנט, בשיעור הבא--
    // console.log("in ctor app:",this.isAgent)
  }

  setIsAgent(isAgentParam: boolean){// הערך של האיז איגנט לא מתעדכן בתצוגה של האפ אם לא משתמשים באינפוט שההקומפוננטה של עריכת משתמש נוכחי שולחת לאפ 
    this.isAgent = isAgentParam;
    console.log("inSetIsAgent:",isAgentParam)
  }
};
