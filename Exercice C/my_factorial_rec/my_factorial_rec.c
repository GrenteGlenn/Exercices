int my_factorial_rec(int nb)
{
    if (nb < 0 || nb > 12)
        return 0;
    if (nb == 0 || nb == 1)
        return 1;
    else
        return nb * my_factorial_rec(nb - 1);
 
}
