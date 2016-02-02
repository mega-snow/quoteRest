/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author snow
 */
package restApp.quote;

import java.util.List;

public interface QuoteDAOLocal {
    public Quote addQuote(Quote q); 
    public List<Quote> listQuotes(Long first, Long count );
    public Long getTotalCount();
}
