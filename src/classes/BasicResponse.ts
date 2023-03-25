abstract class BaseResponse<Y> {
  // public abstract toModel(): Y;
  public abstract getInstance(): Y;
  public abstract createResponse(): Y;
}

export default BaseResponse