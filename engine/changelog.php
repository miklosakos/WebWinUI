<?php
	include_once('./engine/config.php');
	$changelog="unset";
	$reader="";
	switch($channel)
	{
		case "dev": $changelog="dev"; break;
		case "rel": $changelog="rel"; break;
	}
	switch($changelog)
	{
		case "unset": echo 'Figyelem! Helytelen konfiguráció! Frissítési csatorna ismeretlen! Kérlek, ellenőrizd a config.php fájl helyességét!'; break;
		case "dev": $reader=file_get_contents("https://raw.githubusercontent.com/miklosakos/WebWinUI/dev/change.log");
			if($reader === FALSE)
			{
				echo "Figyelem! Nem sikerült betölteni a changelog fájlt!";
			}else{
				echo $reader;
			}break;
		case "rel": $reader=file_get_contents("https://raw.githubusercontent.com/miklosakos/WebWinUI/master/change.log");
			if($reader === FALSE)
			{
				echo 'Figyelem! Nem sikerült betölteni a changelog fájlt!';
			}else{
				echo $reader;
			}break;
		default: echo 'Figyelem! Helytelen konfiguráció! Frissítési csatorna ismeretlen! Kérlek, ellenőrizd a config.php fájl helyességét!'; break;
	}
?>
