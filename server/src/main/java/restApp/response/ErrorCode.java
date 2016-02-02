package restApp.response;
/**
 *
 * @author cir_alex
 */
public enum ErrorCode {
    OK(0,"ok"),
    BAD_REQUEST(1, "bad request"),
    INTERNAL_SERVER_ERROR(2, "internal server error");
    
      private final int code;
      private final String description;

      private ErrorCode(int code, String description) {
        this.code = code;
        this.description = description;
    }

    public int getCode() {
        return code;
    }

    public String getDescription() {
        return description;
    }
      
      
      
}
