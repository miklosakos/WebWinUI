<?php
	include("./engine/config.php") ;
?>
<html>
	<head>
		<title>akos_tech</title>
		<link rel="stylesheet" type="text/css" href="./engine/style.css">
		<meta charset="utf-8">
		<meta name="author" content="miklos_akos">
		<meta name="description" content="akos_tech, minden ami engem érdekel">
		<meta name="keywords" content="miklos_akos,YT,tech">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="shortcut icon" type="image/png" href="./engine/favicon.png">
		
	</head>
	<body>
			<script src="./engine/aboutshowhide.js"></script>
			<div id="progman">
				<div id="progmanheader">Programkezelő</div>
					<div id="progmanmenu">
						<button onclick="openhelp()" class="dropbtn">Névjegy</button>
					</div>
				<a class="link" id="yt" href="https://www.youtube.com/channel/UCXGXHJug86ym9ik0iPiycrQ"></a> <a class="link" id="fb" href="#"></a> <a class="link" id="ig" href="https://instagram.com/miklos.akos99"></a> <a class="link" id="github" href="https://github.com/miklosakos/WebWinUI/"></a>
			</div>
			<div id="about" class="dropdown-content">
							<div id="aboutheader"> <button id="close" onclick="openhelp()" class="dropbtn">-</button>A WebWinUI névjegye</button></div>
						<img id="logo" src="https://via.placeholder.com/128x128">
						<p id="main">WebWinUI<br/>
						Verzió: <?php echo $ver."(".$builddate.")";?>, <?php echo $channel;?> csatorna.<br/>
						Copyright &copy; 2018 miklos_akos</p>
						<button onclick="openhelp()" class="dropbtn" id="ok">OK</button>						<p id="about1">A WebWinUI megpróbálja újraörökíteni a régi Windows 3-as felületet, valamint a <a href="https://miklosakos.eu">weboldalam</a> alapja.</p>
						<p id="about2">Ha szeretnéd te is használni ezt az oldaladon, akkor kattints a GitHub linkre a programkezelőben, vagy <a href="#">ide</a>.</p>
						<p id="about3">Figyelem! Az itt felhasznált szellemi anyagok azon tulajdonosaik szellemi tulajdonát képezik!</p>
						</div>
			<script src="./engine/script.js"></script>
			<script src="./engine/script2.js"></script>
			<script src="./engine/aboutmv.js"></script>
	</body>
</html>