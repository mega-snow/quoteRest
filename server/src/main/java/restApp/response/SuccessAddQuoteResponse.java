package restApp.response;
import restApp.quote.Quote;
/**
 *
 * @author cir_alex
 */
public class SuccessAddQuoteResponse  implements ResponseIF{
    private Result result = null;
    private Quote quote;
    private Long totalCount;
    
    public SuccessAddQuoteResponse(Quote quote , Long totalCount){
        this.result = new Result(ErrorCode.OK);
        this.quote = quote;
        this.totalCount = totalCount;
    }
    
    public Result getResult( ){
        return this.result;
    }

    public Quote getQuote() {
        return quote;
    }

    public void setQuote(Quote quote) {
        this.quote = quote;
    }

    public Long getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Long totalCount) {
        this.totalCount = totalCount;
    }
    
    
    
}
