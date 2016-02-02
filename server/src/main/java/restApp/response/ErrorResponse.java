package restApp.response;
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author cir_alex
 */
public class ErrorResponse implements ResponseIF{
    private Result result = null;
    
    public ErrorResponse(ErrorCode code){
        this.result = new Result(code);
    }
    
    public Result getResult( ){
        return this.result;
    }
    
}
