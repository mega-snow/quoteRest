/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package restApp.request;

/**
 *
 * @author cir_alex
 */
public class RequestAddQuote {
    private String text;
    private String author;
    /*
    public RequestAddQuote(String authorName, String text){
        this.authorName = authorName;
        this.text = text;
    }*/

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
     public String toString(){
        return "{authorName:"+author+", text: "+text+"}";
    }
    
}
