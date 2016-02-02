/**
 *
 * @author cir_alex
 */
package restApp.quote;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;
import javax.persistence.CascadeType;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Temporal;
import restApp.author.*;

@Entity
@Table(name="quote")

public class Quote implements Serializable{
    private static final long serialVersionUID = 1L;
    
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)    
    private Long id;
    @Column
    private String text;
    @Temporal(javax.persistence.TemporalType.TIMESTAMP)
    @Column(updatable = false, nullable = false)
    private Date date;
    
    
    @ManyToOne(cascade = CascadeType.ALL)
   private Author author;
    
    public Quote(){}
    public Quote(String text){        
        this.text = text;
        this.date = new Date();
    }
    
    public Quote(String text, Author author){        
        this.text = text;
        this.author = author;
        this.date = new Date();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    
    public String getAuthorName(){
        return this.author.getName();
    }
    
    
    
    
    @Override
    public int hashCode() {
        int hash = 7;
        hash = 13 * hash + Objects.hashCode(this.id);
        hash = 13 * hash + Objects.hashCode(this.text);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Quote other = (Quote) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        if (!Objects.equals(this.date, other.date)) {
            return false;
        }
        if (!Objects.equals(this.author, other.author)) {
            return false;
        }
        
        return Objects.equals(this.text, other.text);
    }

    @Override
    public String toString() {
        return "Quote{" + "id=" + id + '}';
    }
    


}
