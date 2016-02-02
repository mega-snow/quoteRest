

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

import restApp.response.*;

public interface QuoteServiceLocal {
     ResponseIF createQuote(String text, String authorName);
     ResponseIF listAuthors();
     ResponseIF listQuotes(Long first, Long count );
    
}
