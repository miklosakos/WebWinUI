var progman = {id:"prgman",visibleHeader:true,title:"Programkezelő",content:"<div id='progmanmenu'><button onclick='fwin_show(\x22abt\x22)' class='dropbtn'>Névjegy</button> <button class='dropbtn' onclick='set_fwin_content_by_url(\x22chglog\x22, \x22https://raw.githubusercontent.com/miklosakos/WebWinUI/"+channel+"/change.log\x22, true);' class='dropbtn2' id='changelogbtn'>Változások listája</button></div><a class='link' id='yt' href='https://www.youtube.com/channel/UCXGXHJug86ym9ik0iPiycrQ'></a> <a class='link' id='ig' href='https://instagram.com/miklos.akos99'></a> <a class='link' id='github' href=\x22https://github.com/miklosakos/WebWinUI/tree/"+channel+"\x22></a> <a class='link' id='twitter' href='https://twitter.com/miklos_akos'></a>",callback:"fwin_show(\x22prgman\x22)",width:300,height:200};
var about = {id:"abt",visibleHeader:true,title:"Névjegy",content:"<img id=\x22logo\x22 src=\x22./img/logo.png\x22/><p id=\x22main\x22>WebWinUI<br/>Verzió: " + ver +" (" + builddate + "), " + channel + " csatorna.<br/>Copyright &copy; 2018-2019 miklos_akos</p><p id=\x22about1\x22>A WebWinUI megpróbálja újraörökíteni a régi Windows 3-as felületet, valamint a weboldalam alapja. </p><p id=\x22about2\x22>Ha szeretnéd te is használni ezt az oldaladon, akkor kattints a GitHub linkre a programkezelőben.</p><p id=\x22about3\x22>Figyelem! Az itt felhasznált szellemi anyagok azon tulajdonosaik szellemi tulajdonát képezik!</p>",width:500,height:300,closebtn:true,overlay:true}
var changelog = {id:"chglog",visibleHeader:true,title:"Változások listája",content:"<?php include('./engine/changelog.php');?>",closebtn:true,overlay:true}
function new_fwin(data)
{
	var fwin_caption = document.createElement('div');
	fwin_caption.className = 'fwin-title';
	fwin_caption.innerHTML = data.title;
	console.log("fwin_caption: " + data.title);
	if (data.closebtn === true){
	var fwin_close = document.createElement('button');
	fwin_close.className = 'fwin-close';
	fwin_close.innerHTML = '-';
	fwin_close.onmousedown = function (e)
	{
		this.parentNode.dataset.block = '1';
		var cld = this;
		window.onmouseup = function ()
		{
			cld.parentNode.dataset.block = '0';
			window.onmouseup = null;
		};
	}
	fwin_close.onmouseup = function (e)
	{
		if (this.parentNode.dataset.block == '1' && e.button == 0)
		{
			this.parentNode.dataset.block = '0';
			document.getElementById(data.id).style.visibility = 'hidden';
			overlay_check();
			typeof(data.callback) == 'function' ? data.callback() : 0;
		}
	};}

	var fwin_header = document.createElement('div');
	fwin_header.className = 'fwin-header';
	fwin_header.dataset.block = '0';
	fwin_header.style.visibility = data.visibleHeader === true ? '' : 'hidden';
	fwin_header.onmousedown = function (e)
	{
		if (e.button == 0 && this.dataset.block == '0')
		{
			var z = 0;
			var u = document.getElementsByClassName('fwin-container');
			for (var i = 0; i < u.length; ++i)
			{
				u[i].style.zIndex > z ? z = u[i].style.zIndex : 0;
			}
			var fwin = document.getElementById(data.id);
			fwin.style.zIndex = (parseInt(z) + 1) + '';
			var ox = e.clientX - parseInt(fwin.style.left);
			var oy = e.clientY - parseInt(fwin.style.top);
			window.onmousemove = function (e)
			{
				fwin.style.left = (e.clientX - ox) + 'px';
				fwin.style.top = (e.clientY - oy) + 'px';
			};
			window.onmouseup = function (e)
			{
				if (e.button == 0)
				{
					window.onmouseup = null;
					window.onmousemove = null;
				}
			};
		}
		'stopPropagation' in e ? e.stopPropagation() : 0;
		'preventDefault' in e ? e.preventDefault() : 0;
	};
	if (data.closebtn === true){
	fwin_header.appendChild(fwin_close);}
	fwin_header.appendChild(fwin_caption);

	var fwin_body = document.createElement('div');
	fwin_body.className = 'fwin-content';
	fwin_body.innerHTML = data.content;

	var fwin_container = document.createElement('div');
	fwin_container.id = data.id;
	console.log("Got " + fwin_container.id + " for fwin_container.id, expected: " + data.id);
	fwin_container.className = 'fwin-container';
	fwin_container.setAttribute('data-overlay', data.overlay === true ? '1' : '0');
	fwin_container.style.zIndex = '1000001';
	fwin_container.style.position = 'fixed';
	fwin_container.style.visibility = data.show === true ? '' : 'hidden';
	data.width != undefined && data.width != false ? fwin_container.style.width = data.width + 'px' : 0;
	data.height != undefined && data.height != false ? fwin_container.style.height = data.height + 'px' : 0;
	if (data.center === true)
	{
		fwin_container.style.left = (((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) >> 1) - (data.width >> 1)) + 'px';
		fwin_container.style.top = (((window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) >> 1) - (data.height >> 1)) + 'px';
	}
	else
	{
		fwin_container.style.left = data.left != undefined && data.left != false ? data.left + 'px' : '0px';
		fwin_container.style.top = data.top != undefined && data.top != false ? data.top + 'px' : '0px';
	}
	fwin_container.appendChild(fwin_header);
	fwin_container.appendChild(fwin_body);

	document.body.appendChild(fwin_container);

	data.stretch === true ? fwin_container.childNodes[1].style.height = (fwin_container.clientHeight - (fwin_container.childNodes[0].clientHeight + ((fwin_container.scrollHeight - fwin_container.clientHeight) << 2))) + 'px' : 0;
	if (data.overlay === true && overlay == null)
	{
		overlay = document.createElement('div');
		overlay.className = 'fwin-overlay';
		overlay.style.zIndex = '1000000';
		overlay.style.visibility = 'hidden';
		overlay.style.position = 'fixed';
		overlay.style.width = '100%';
		overlay.style.height = '100%';
		overlay.style.top = '0px';
		overlay.style.left = '0px';
		overlay.style.backgroundColor = data.overlayColor;
		document.body.appendChild(overlay);
		overlay_check();
	}
}

function fwin_show(id)
{
	document.getElementById(id).style.visibility = '';
	overlay_check();
}

function overlay_check()
{
	if (overlay != null)
	{
		var x = document.getElementsByClassName('fwin-container');
		for (var i = 0; i < x.length; ++i)
		{
			if (x[i].getAttribute('data-overlay') != 1)
			{
				continue;
			}
			if (x[i].style.visibility != 'hidden')
			{
				overlay.style.visibility = 'visible';
				return;
			}
		}
		overlay.style.visibility = 'hidden';
	}
}
function fwin_set_content(id, content)
{
	var fwin = document.getElementById(id);
	if (fwin != undefined)
	{
		var sects = fwin.getElementsByClassName('fwin-content');
		if ((sects != undefined) && (sects.length != undefined) && (sects.length > 0))
		{
			sects[0].innerHTML = content;
			return true;
		}
	}
	return false;
}
function set_fwin_content_by_url(id, url, show)
{
	_ajax_get
	(
		url,
		function (r)
		{
			fwin_set_content(id, r);
			if (show === true)
			{
				fwin_show(id);
			}
		}
	);
}
var overlay = null;

new_fwin(progman);
new_fwin(about);
new_fwin(changelog);
fwin_show("prgman");