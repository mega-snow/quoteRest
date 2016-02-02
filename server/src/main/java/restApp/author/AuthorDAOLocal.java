package restApp.author;

import java.util.List;

/**
 *
 * @author cir_alex
 */


public interface AuthorDAOLocal {
    public Author findOrCreate(Author author);
    public List<Author> findAll();
    public Long getTotalCount();
}
