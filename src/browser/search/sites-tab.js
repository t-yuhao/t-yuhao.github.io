function Tab(num)
	{
		var i;
		for(i=1;i<=5;i++)
		{
			if(i==num){
				document.getElementById("L"+i).className="current";
				document.getElementById("d"+i).style.display="block";
			}
			else{
				document.getElementById("L"+i).className="";
				document.getElementById("d"+i).style.display="none";
			}
		}
	}