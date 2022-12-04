void my_putchar(char c);

void my_print_alpha(void)
{
  int  i = 'a';
 
  while (i <= 'z')
    {
      my_putchar(i);
      i = i + 1;
    }
    my_putchar('\n');
}
