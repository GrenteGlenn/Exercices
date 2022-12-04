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
int my_strncmp(const char *s1, const char *s2, int n)
{
    int i = 0;

  while ((s1[i] != '\0' && s1[i] == s2[i] && i < n)) // tant que s1 est égale à s2 et tant que i est inférieur ou égal à n
  {
    i = i + 1;
  }
  if (s1[i] < s2[i] && != 0)
  {
    return -1;
  }
  else if (s2[i] < s1[i] && != 0)
  {
    return 1;
  }
    return(n);
}

char *my_strstr(char *str, const char *to_find)
{
  {
  int i = 0;
  while (str[i] != '\0')
  {
    if (my_strncmp(&str[i], to_find, my_strlen(to_find)) == 0)
      return (&str[i]);
    i++;
  }
  return NULL;
  }
}
