package restApp.response;
import java.util.List;
import restApp.author.Author;

/**
 *
 * @author snow
 */
public class SuccessListResponse implements ResponseIF{
    private Result result = null;
    private List<?> list;
    private Long totalCount;
    
    public SuccessListResponse(List<?> listAuthors, Long totalCount){
        this.result = new Result(ErrorCode.OK);
        this.list = listAuthors;
        this.totalCount = totalCount;
    }
    
    public Result getResult( ){
        return this.result;
    }

    public List<?> getList() {
        return list;
    }

    public void setList(List<?> list) {
        this.list = list;
    }

    public Long getTotalCount() {
        return totalCount;
    }      
}