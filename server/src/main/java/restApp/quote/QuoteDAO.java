package restApp.quote;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceUnit;
import javax.transaction.UserTransaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import static org.springframework.transaction.annotation.Propagation.REQUIRED;
import org.springframework.transaction.annotation.Transactional;
/**
 *
 * @author cir_alex
 */
@Component
@Service
@Repository("jpaQuoteDAO")
@Transactional
public class QuoteDAO implements QuoteDAOLocal{
    @PersistenceContext
    private EntityManager em;
    
    public void setEntityManager(EntityManager entityManager) {
        this.em = entityManager;
    }

    public EntityManager getEntityManager() {
        return em;
    }
    @Transactional
    @Override    
    public Quote addQuote(Quote q) {                
         q = em.merge(q);
        return q;
    }
    @Transactional(readOnly = true)
    @Override
    public List<Quote> listQuotes(Long first, Long count ){
       List<Quote> result = new ArrayList<Quote>();
       try{
       result =  em.createNativeQuery("SELECT * FROM quote WHERE id >= ? LIMIT ?", Quote.class).
            setParameter(1, first).
            setParameter(2, count).
            getResultList();
       }
       catch(Exception ex){
           System.out.println(ex.toString()+" "+ex.getMessage());
       }
       return result;
    }
    @Transactional(readOnly = true)
    @Override
    public Long getTotalCount(){        
        return ((BigInteger)em.createNativeQuery("SELECT MAX(id) FROM quote").getSingleResult()).longValue() ;
    }
    
}