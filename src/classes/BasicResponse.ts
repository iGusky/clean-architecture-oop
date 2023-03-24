abstract class BaseResponse<T,Y> {
  data:   T;
  message: string;

  public constructor(data: T, message: string){
    this.data = data
    this.message = message
  }

  // public setMessage(mensaje: string): BaseResponse<T,Y>{
  //   this.message = mensaje
  //   return this
  // }

  // public abstract toModel(): Y;
  public abstract getInstance(): Y;
  public abstract createResponse(): Y;
}

export default BaseResponse