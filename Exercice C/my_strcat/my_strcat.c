#include <stdio.h>
#include <string.h>

char *my_strcat(char *dest, const char *src)
{
    int i;
    int j;
    
    for (j = 0; dest[j] != '\0'; j++){

    }

    for (i = 0 ; src[i] != '\0'; i++)
    {
        dest[j++] = src[i];
    }
    
    
    dest[j] = '\0';

    return dest;
}
