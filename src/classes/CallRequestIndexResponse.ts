import BaseResponse from "./BasicResponse";
import CallRequestResponse from './CallRequestResponse';


class CallRequestIndexResponse extends BaseResponse<Object[], CallRequestIndexResponse>  {
  
  indice: CallRequestResponse[] = [];
  
  
  private constructor(indice: [], mensaje: string){
    super(indice, mensaje)
  }
  
  public static builder(data: []): CallRequestIndexResponse {
    return new CallRequestIndexResponse(data.data, data.message)
  }
  
  public createResponse(): CallRequestIndexResponse {
    console.log(this.data);
    
    this.data.data.forEach((solicitud) => {
      this.indice.push( CallRequestResponse.builder(solicitud).createResponse().getInstance() )
    })
    return this
  }
  
  public getInstance(): CallRequestIndexResponse {
    return this
  }

}

export default CallRequestIndexResponse