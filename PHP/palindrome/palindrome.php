<?php

function palindrome(string $chain)
{
    $chaine = strtolower($chain);
    // var_dump($chaine);
    $chaine = str_replace([" ", ",", ":", "!", "?", "\"", "\'"], "", $chaine);
    // var_dump($chaine);
    $inverse = strrev($chaine);
    // var_dump($inverse);
    
    if ($chaine == $inverse)
    {
        echo "True\n";
    }
    else
    {
        echo "False\n";
    }
}
