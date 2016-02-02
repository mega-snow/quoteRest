package restApp.request;


//import com.google.gson.Gson;
/**
 *
 * @author cir_alex
 */
public class RequestListQuotes {
    private Long first;
    private Long count;
    
    /*private static final Gson GSON = new Gson();
    public RequestListQuotes(String body){
        GSON.fromJson(body) ;
    }*/

    public Long getFirst() {
        return first;
    }

    public void setFirst(Long first) {
        this.first = first;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }
    public String toString(){
        return "{count:"+this.getCount()+", first: "+this.getFirst()+"}";
    }
    
}
