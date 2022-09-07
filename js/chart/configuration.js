const ctx = document.getElementById('equity').getContext('2d');
		const config = {
			plugins: [ChartDataLabels],
			type: 'doughnut',
			data: {
				labels: ['Sing-A-Port', 'Cash Vault', 'Individual Investors'],
				datasets: [{
					label: 'Equity Interest',
					data: [65, 34, 1],
					backgroundColor: [
						'rgba(6, 188, 193, 1)',
						'rgba(239, 71, 111, 1)',
						'rgba(255, 209, 102, 1)',
					],
					borderColor: [
						'rgba(22, 56, 86, 0)',
						'rgba(22, 56, 86, 0)',
						'rgba(22, 56, 86, 0)',
					],
					borderWidth: 2
				}]
			},
			options: {
				Animation: true,
				responsive: true,
				maintainAspectRatio: false,
				layout: {
					autoPadding: false,
				},
				plugins: {
					datalabels: {
						color: 'black',
						font: {
							size: 20
						},
						formatter: function (value, context) {
							return Math.round(value) + '%';
						}
					},
					title: {
						font: {
							padding: {
								top: 10,
							},
							size: 20,
							family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
						},
						fullsize: true,
						display: true,
						text: 'Equity Interest in AeroSonic',
					},
					legend: {
						position: 'right',
					}
				}
			}
		};
		var equity = new Chart(ctx, config);
		(function () { // self calling function replaces document.ready()

			//adding event listenr to button
			document.querySelector('#button1').addEventListener('click', function () {
				equity.destroy();
				equity = new Chart(ctx, config);
			});

		})();

		Reveal.addEventListener('chartload', function () {
			equity.destroy();
			equity = new Chart(ctx, config);
		});