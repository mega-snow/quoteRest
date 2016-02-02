/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author snow
 */
package restApp;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import restApp.author.*;
import restApp.quote.Quote;
import restApp.quote.QuoteDAOLocal;
import restApp.response.*;

//@Repository
@Service("jpaQuoteService")

public class QuoteService implements QuoteServiceLocal {

    @Autowired
    @Qualifier("jpaQuoteDAO")
    QuoteDAOLocal qDAO;

    @Autowired
    @Qualifier("jpaAuthorDAO")
    AuthorDAOLocal authorDAO;

    public ResponseIF createQuote(String text, String authorName) {
        Quote quote;      
        Long totalCount = null;
        try {
            Author author = new Author(authorName);
            author = authorDAO.findOrCreate(author);
            quote = new Quote(text, author);
            quote = qDAO.addQuote(quote);            
            totalCount = qDAO.getTotalCount();
        } catch (RuntimeException ex) {            
            return new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR);
        }
        return new SuccessAddQuoteResponse(quote,totalCount);
    }
    
    
    public ResponseIF listAuthors(){
        List<Author> list;        
        try{
            list = authorDAO.findAll();                        
        }
        catch(RuntimeException ex){
            return new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR);
        }                
        return new SuccessListResponse(list, Long.valueOf((long)list.size()) );
    }
    
    public ResponseIF listQuotes(Long first, Long count ){
        List<Quote> list;
        Long totalCount;
        try{
            list = qDAO.listQuotes(first, count);
            totalCount = qDAO.getTotalCount();
        }
        catch(RuntimeException ex){
            return new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR);
        }
        return new SuccessListResponse(list, totalCount);
    }

}
