#include "my_list.h"
#include <stdlib.h>
int my_list_size(const linked_list_t *list)
{
    if (list == NULL)
        return(0);

    int size = 0;

	while(list != NULL)
	{
		size = size + 1;
		list = list->next;
	}
	return (size);
}
