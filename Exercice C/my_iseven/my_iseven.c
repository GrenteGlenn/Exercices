void my_putchar(char c);

void my_iseven(int n)
{
    
    int result;

    result = n % 2;
    if (result == 0)
    {
        my_putchar('E');
    }
    else
    {
        my_putchar('O');
    }
}
