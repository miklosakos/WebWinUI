function _ajax_request(c)
{
	var r = "XMLHttpRequest" in window ? new XMLHttpRequest() : new ActiveXObject("Msxml2.XMLHTTP");
	r.onreadystatechange = function ()
	{
		if (r.readyState === 4)
		{
			c(r.responseText);
		}
	};
	return r;
}

function _ajax_get(u, c)
{
	var r = _ajax_request(c);
	r.open('GET', u, true);
	r.send(null);
}

function _ajax_post(u, c, q)
{
	var r = _ajax_request(c);
	r.open('POST', u, true);
	r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	r.send(q);
}