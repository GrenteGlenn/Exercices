<?php

function is_negative_ternary($nb)
{
    echo is_int($nb) == True? $nb >= 0 ? "False\n" : "True\n": "Le parametre n'est pas un Int\n"; 
}
