int my_strncmp(const char *s1, const char *s2, int n)
{
    int i = 0;

  while ((s1[i] != '\0' && s1[i] == s2[i] && i < n) // tant que s1 est égale à s2 et tant que i est inférieur ou égal à n
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
    return(0);
}
