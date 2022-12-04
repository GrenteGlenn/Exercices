void my_putchar(char c);

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
