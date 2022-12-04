<?php

function is_negative($nb)
{
    if (is_int($nb) == false)
    {
        echo "Le parametre n'est pas un Int\n";
    }
    else if ($nb < 0)
    {
        echo "True\n";
    }
    else if($nb >= 0) {
        echo "False\n";
    }
}
