import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}


/**

function (doc) {
      if(doc){
            if(doc.Data.Person.personIwrCode){
                    if(
                    doc.ProcessStatus.ATSPublish == "FAILED" ||
                    doc.ProcessStatus.ATSPublish == "MISSING" ||
                    doc.ProcessStatus.ATSPublish == "STATUS_NOT_FOUND"||
                    doc.ProcessStatus.ATSPublish == "PENDING" ||
                    doc.ProcessStatus.ATSPublish == "MATCH_SCORE_FAILED"||
                    doc.ProcessStatus.ATSPublish === ""){
                          result = [
                                    doc._id,
                                    doc.Data.Person.personId,
                                    doc.Data.Person.personIwrCode,
                                    doc.Data.Person.requisitionId,
                                    doc.Meta.batchId,
                                    doc.ProcessStatus.TK,
                                    doc.ProcessStatus.NLC,
                                    doc.ProcessStatus.Standardization,
                                    doc.ProcessStatus.MatchScore,
                                    doc.ProcessStatus.ATSPublish,
                                    doc.Meta.sessionId,
                                    doc.ProcessStatus.SuccessScore,
                                    doc.ProcessStatus.ReqState]
                          emit(doc.Meta.updateTimeStampAsTick,result);
                  }
            }
                              
    } 
 }

      doc.Data.Client.atsCode,
      doc.Data.Client.clientName,
      doc.Data.Client.atsName

 */