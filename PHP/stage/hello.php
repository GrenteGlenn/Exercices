<?php

function Hello($argv)
{
    if($argv[1] == ["les assets"]) {
        echo "Hello les assets!\n";
    }
    else {
        echo "Hello world!\n";
    }
}
Hello($argv);
