/**
 *
 * @author cir_alex
 */
package restApp.author;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Component
@Service
@Repository("jpaAuthorDAO")
@Transactional
public class AuthorDAO implements AuthorDAOLocal {

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
    public Author findOrCreate(Author author) {
        Author findAuthor = null;
        try {
            findAuthor = (Author) em.createNativeQuery("SELECT * FROM author WHERE name = ?", Author.class).
                    setParameter(1, author.getName()).
                    getSingleResult();
        } catch (NoResultException ex) {
        }
        if (findAuthor == null) {
            em.persist(author);
            return author;
        }
        return findAuthor;
    }
    @Transactional(readOnly = true)
    public List<Author> findAll() {
         return em.createNativeQuery("SELECT * FROM author", Author.class).getResultList();
    }
    @Transactional(readOnly = true)
    @Override
    public Long getTotalCount() {
        return (Long)em.createNativeQuery("SELECT MAX(id) FROM author").getSingleResult();
    }

}
