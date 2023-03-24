import BaseResponse from "./BasicResponse";

class CallRequestResponse extends BaseResponse<Object,CallRequestResponse> {
    id:                 number =  0;
    level_id:           number =  0;
    status_id:          number =  0;
    call_id:            number =  0;
    particular_id:      number =  0;
    active:             number =  0;
    global_visit:       number =  0;
    uuid:               string = '';
    date_register:      string = '';
  
    folio!:             null;
    payment_folio!:     null;
    payment_date!:      null;
    payment_attachment!:null;
    date_viewer!:       null;
    date_inspection!:   null;
    date_log!:          null;
    comments!:          null;
    comment_accept!:    null;
    comment_reject!:    null;
    logs!:              null;


  private constructor(data: Object, mensaje: string){
    super(data, mensaje )
  }

  public static builder(data: Object, mensaje: string): CallRequestResponse {
    return new CallRequestResponse(data, mensaje)
  }

  public createResponse(): CallRequestResponse {
    this.id = this.data.id
    this.level_id = this.data.level_id
    this.uuid = this.data.uuid
    return this
  }

  // public toModel(): Object {
  //   throw new Error("Method not implemented.");
  // }
  public getInstance(): CallRequestResponse {
    return this
  }
}

export default CallRequestResponse