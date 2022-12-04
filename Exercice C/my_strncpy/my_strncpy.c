#include <string.h>

int my_strlen(const char *str)
{
    int nombreDeCaracteres = 0;
    char caractereActuel = 0;
    
    do
    {
        caractereActuel = str[nombreDeCaracteres];
        nombreDeCaracteres++;
    }
    while(caractereActuel != '\0');
    nombreDeCaracteres --;

    return nombreDeCaracteres;
}

char *my_strncpy(char *dest, const char *src, int n)

{
  int i = 0;
    int srcLen = my_strlen(src);
    while (i <= srcLen && i < n)
{
    dest[i] = src[i];
    i = i + 1;
}
  for ( ; i < n; i++)
  {
    dest[i] = '\0';
  }
   return dest;
}
