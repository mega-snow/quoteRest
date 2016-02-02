package restApp;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

@Controller
//@RequestMapping(value="/main")
public class WebController {

    @RequestMapping(value = "/", method=RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public ModelAndView indexPage() {        
        return new ModelAndView("index");
        
    }
    
    @RequestMapping(value = "/page", method=RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public String page() {
        return "page";
        //return "index";
    }
    
    

}