Reveal.initialize({
    controls: true,
    progress: true,
    history: false,
    center: true,
    hash: true,
    //transition: 'fade', // default/cube/page/concave/zoom/linear/fade/none
    chart: {
        defaults: {
            color: 'black', // color of labels
            options: {
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Pie Chart'
                    }
                }
            },
            scale: {
                beginAtZero: true,
                ticks: { stepSize: 1 },
                grid: { color: "black" }, // color of grid lines
            },
        },
        line: { borderColor: ["rgba(20,220,220,.8)", "rgba(220,120,120,.8)", "rgba(20,120,220,.8)"], "borderDash": [[5, 10], [0, 0]] },
        bar: { backgroundColor: ["rgba(20,220,220,.8)", "rgba(220,120,120,.8)", "rgba(20,120,220,.8)"] },
        pie: {
            backgroundColor: [["var(--r-secondary)", "rgba(220,20,20,.8)", "rgba(20,220,20,.8)", "rgba(220,220,20,.8)", "rgba(20,20,220,.8)"]]
        },
        doughnut: {
            backgroundColor: [["rgba(0,255,0,.8)", "rgba(220,20,20,.8)", "rgba(20,220,20,.8)", "rgba(220,220,20,.8)", "rgba(20,20,220,.8)"]],
        }
    },
    plugins: [RevealHighlight, RevealChart, RevealNotes, RevealZoom],
    parallaxBackgroundImage: '/assets/images/bgTexture.jpg',
    parallaxBackgroundSize: '2200px 1020px',
    dependencies: [
        { src: 'plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },
        { src: 'plugin/notes/notes.js', async: true, condition: function () { return !!document.body.classList; } },
        { src: 'plugin/mark/mark.js', async: true, condition: function () { return !!document.body.classList; } },
    ]
});