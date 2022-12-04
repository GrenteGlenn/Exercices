#include "my_list.h"
#include <stddef.h>

linked_list_t *my_find_node(linked_list_t *list, const int data_ref)
{
    linked_list_t *current = list;

    for (current = list;  current != NULL;  current = current->next) {
        if (current->data == data_ref)
            break;
    }

    return current;
}
