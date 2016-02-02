package restApp.response;
//import org.codehaus.jackson.map.annotate.JsonSerialize;


/**
 *
 * @author cir_alex
 */
//@JsonSerialize(using = JsonSerializer.class, include = JsonSerialize.Inclusion.NON_NULL)
public class Result {
    public static final int api_version = 1;
    private final ErrorCode code;    
    
    public Result(ErrorCode code){
        this.code = code;
    }

    public String getDesc() {
        return code.getDescription();
    }
    
    public int getCode(){
        return code.getCode();
    }
    
    public int getApiVers(){
        return this.api_version;
    }
    
    
    
}
