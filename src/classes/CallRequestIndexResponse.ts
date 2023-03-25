import BaseResponse from "./BasicResponse";
import CallRequestResponse from './CallRequestResponse';

class CallRequestIndexResponse extends BaseResponse< CallRequestIndexResponse>  {
  
  indice: CallRequestResponse[] = [];
  pagination: string = ''
  private constructor(indice: []){
    super()
    this.createResponse(indice)
  }
  
  public static builder(data: []): CallRequestIndexResponse {
    return new CallRequestIndexResponse(data)
  }
  
  private createResponse(meñique: []): CallRequestIndexResponse {    
    meñique.data.data.forEach((solicitud) => {
      this.indice.push( CallRequestResponse.builder(solicitud).getInstance() )

    })
    this.pagination = meñique.data.pagination.first_page_url
    return this
  }
  
  public getInstance(): CallRequestIndexResponse {
    return this
  }

}

export default CallRequestIndexResponse