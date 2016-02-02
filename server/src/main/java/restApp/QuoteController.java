package restApp;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import restApp.quote.*;
import restApp.request.*;
import restApp.response.*;





//gradle build && java -jar build/libs/quotesREST-0.0.1.jar
//lsof -i:8080
// sudo apt-get install postgresql
//ALTER USER postgres with encrypted password '123';
// curl localhost:8080/rest/quote/add -x POST -d text='Моя цитата' -d authorName='Gavrila'
// curl localhost:8080/author/list
// sudo netstat -tunlp | grep 8080
// curl localhost:8080/quote/list -d first=1 -d count=10
/*
*/


@RestController
@RequestMapping(value = "/rest")
public class QuoteController {
    
@Autowired
@Qualifier("jpaQuoteService")
QuoteServiceLocal qService;

    public QuoteController(){
        
    } 
/*
    @RequestMapping(value = "/",  method = RequestMethod.GET)
    //@ResponseBody
    public ModelAndView index() {
        ModelAndView mav = new ModelAndView("index");
        return mav;
        //return "index";
    }
*/
    
    @RequestMapping(value = "/quote/add",  method = RequestMethod.POST)    
    public @ResponseBody ResponseIF addQuote(@RequestBody RequestAddQuote request){                
        ResponseIF response = qService.createQuote(request.getText() ,request.getAuthor() );
        return response;
    }
    
    @RequestMapping(value = "/quote/list",  method = RequestMethod.POST)
    
//    public @ResponseBody ResponseIF listQuotes(@RequestParam("first") Long first, @RequestParam("count") Long count ){
     public @ResponseBody ResponseIF listQuotes(@RequestBody RequestListQuotes request){         
        ResponseIF response = qService.listQuotes(request.getFirst(),request.getCount()); 
        return response;   
    }
    
    
    @RequestMapping(value = "/author/list",  method = RequestMethod.POST)    
    public @ResponseBody ResponseIF listAuthors(){
        ResponseIF response = qService.listAuthors();
        return response;
    }
            
    /*
    @ExceptionHandler
    ResponseIF handleException(Exception ex) {
        return new ErrorResponse(ErrorCode.BAD_REQUEST);
    }*/
    
}