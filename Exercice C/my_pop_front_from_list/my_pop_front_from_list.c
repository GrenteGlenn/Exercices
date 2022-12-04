#include "my_list.h"
#include <stdlib.h>

linked_list_t *my_pop_front_from_list(linked_list_t *list)
{
    linked_list_t *newfirst = NULL;
 
    newfirst = list->next; // newfirst  prend la liste suivante de list, donc newfirst prend list +1
    free(list); // donc list peut être supprimer, car la first list est de nouveau assigné à newfirst
    return(newfirst);
}
