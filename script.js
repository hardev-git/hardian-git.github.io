var Merdeka=new Date("Sep 13, 2022 23:59:59").getTime(),
	xMerdeka=setInterval(function() {
		var e=(new Date).getTime(),
		t=Merdeka-e,
		a=Math.floor(t/864e5),
		n=Math.floor(t%864e5/36e5),
		i=Math.floor(t%36e5/6e4),
		m=Math.floor(t%6e4/1e3);
		document.getElementById("menuju").innerHTML=a+"Hari, "+n+"Jam, "+i+"Mnt, "+m+"Dtk <i class='fa fa-spinner fa-pulse'></i>",
		t<0&&(clearInterval(xMerdeka),
		document.getElementById("menuju").innerHTML="Happy 24's Day!")
	},1e3);
	function countUpFromTime(e,t) {
		e=new Date(e).getTime();
		var a=new Date-(e=new Date(e));
		hariUmur=Math.floor(a/864e5*1),
		jamUmur=Math.floor(a%864e5/36e5*1),
		menitUmur=Math.floor(a%864e5%36e5/6e4*1),
		detikUmur=Math.floor(a%864e5%36e5%6e4/1e3*1);
		var n=document.getElementById(t);
		n.getElementsByClassName("hari")[0].innerHTML=hariUmur+"Hari, ",
		n.getElementsByClassName("jam")[0].innerHTML=jamUmur+"Jam, ",
		n.getElementsByClassName("mnt")[0].innerHTML=menitUmur+"Mnt, ",
		n.getElementsByClassName("dtk")[0].innerHTML=detikUmur+"Dtk <i class='fa fa-spinner fa-pulse'></i>",
		clearTimeout(countUpFromTime.interval),countUpFromTime.interval=setTimeout(function() {
			countUpFromTime(e,t)
		},1e3)
	}
	function tampilkanJam() {
		var e="",
		t=new Date,
		a=t.
		getHours(),
		n=t.getMinutes(),
		i=t.getSeconds();
		a>24&&(e="Pagi"),
		a>0&&(e="Pagi"),
		a>9&&(e="Siang"),
		a>14&&(e="Sore"),
		a>18&&(e="Malam"),
		0==a&&(a=12),
		a>12&&(a=a),
		a=checkTime(a),
		n=checkTime(n),
		i=checkTime(i),
		document.getElementById("jam").innerHTML=a+":"+n+":"+i+" "+e
	}
	function checkTime(e) {
		return e<10&&(e="0"+e),e
	}
	window.onload=function() {
		countUpFromTime("Sep 13, 1998 23:59:59","umur")
	},
	setInterval(tampilkanJam,500);
	var isiBulan=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],
	isiHari=["Minggu","Senin","Selasa","Rabu","Kamis","Jum&#39;at","Sabtu"],
	dateK=new Date,
	dayK=dateK.getDate(),
	monthK=dateK.getMonth(),
	thisDay=isiHari[thisDay=dateK.getDay()],
	yy=dateK.getYear(),
	yearK=yy<1e3?yy+1900:yy;
	document.getElementById("tanggal").innerHTML=thisDay+" - "+dayK+" "+isiBulan[monthK]+" "+yearK+" <i class='fa fa-circle-o-notch fa-spin'></i>";
	var Node=document.getElementsByTagName("li");
	for(i=0;i<Node.length;i++) {
		var span=document.createElement("span"),
		txt=document.createTextNode("×");
		span.className="tutup",
		span.appendChild(txt),
		Node[i].appendChild(span)
	}
	var i,
	tutup=document.getElementsByClassName("tutup");
	for(i=0;i<tutup.length;i++)tutup[i].onclick=function() {
		this.parentElement.style.display="none"};
		var list=document.querySelector("wishlist");
		function newElement() {
			var e=document.createElement("li"),
			t=document.getElementById("ketik").value,
			a=document.createTextNode(t);
			e.appendChild(a),"Babi"==t&&(alert("Kata Ini Dilarang!!!"),e="****"),
			""===t?alert("Yuk, isi harapan Teteh dulu"):document.getElementById("wishlist").appendChild(e),
			document.getElementById("ketik").value="";
			var n=document.createElement("span"),
			m=document.createTextNode("×");
			for(n.className="tutup",
			n.appendChild(m),
			e.appendChild(n),
			i=0;i<tutup.length;i++)tutup[i].onclick=function() {
				this.parentElement.style.display="none"
			}
		}
		function semoga() {
			var e=document.getElementById("persentase"),
			t=0,
			a=setInterval(function() {
				if(t>=100)clearInterval(a),
				document.getElementById("status").className="fade",
				document.getElementById("status").innerHTML="Semoga Kamu Terkabul Ya! <i class='fa fa-smile-o'></i>";
			else {
				t++,
				e.style.width=t+"%";
				var n=t+.01;
				n=n.toFixed(0),
				document.getElementById("proses").innerHTML="<i class='fa fa-magic'></i> Mensemogakan: "+n+"%"
			}
		},100)
	}
	function tik() {
		document.getElementById("tik").play()
	}
	function tung() {
		document.getElementById("tung").play()
	}
	function ting() {
		document.getElementById("ting").play()
	}
	list.addEventListener("click",function(e) {
		"li"===e.target.tagName&&v.target.classList.toggle("checked")
	},!1);



