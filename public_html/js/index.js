/** Draw "windows vs linux" malware chart" **/
window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		data: [              
		{
			type: "column",
			dataPoints: [
				{ label: "HOW GOOD LINUX IS",  y: 172207  },
				{ label: "HOW BAD IT IS", y: 64405568  },
				{ label: "AND HOW MUCH IT SUCKS", y: 578702687  }
	
			]
		}
		]
	});
	chart.render();
}
