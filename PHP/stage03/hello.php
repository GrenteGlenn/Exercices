<?php

function Hello($argv)
{
    if($argv[1] == "lesassets") {
    echo "Hello les assets!\n";
    }
    else {
        echo "Hello world!\n";
    }
}
Hello($argv);
