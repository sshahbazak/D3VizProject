
    // Load and aggregate CSV data using D3
d3.csv("WHO-COVID-19-global-daily-data.csv", function(data) {
    // Aggregate cumulative cases and cumulative deaths by country
    const countryData = d3.nest()
        .key(d => d.Country_code)
        .rollup(d => {
            const maxCases = d3.max(d, g => +g.Cumulative_cases || 0);
            const maxDeaths = d3.max(d, g => +g.Cumulative_deaths || 0);
            return { cumulativeCases: maxCases, cumulativeDeaths: maxDeaths, totalImpact: maxCases + maxDeaths };
        })
        .map(data);

    // Prepare bubbles data for visualization
    const bubblesData = Object.keys(countryData).map(countryCode => {
        const centroid = countryCentroids[countryCode] || { latitude: 0, longitude: 0 };
        return {
            centered: countryCode,
            radius: Math.sqrt(countryData[countryCode].totalImpact) / 300, // Adjusted scaling for bubbles
            fillKey: 'Trouble',
            cumulativeCases: countryData[countryCode].cumulativeCases,
            cumulativeDeaths: countryData[countryCode].cumulativeDeaths,
            totalImpact: countryData[countryCode].totalImpact,
            latitude: centroid.latitude,
            longitude: centroid.longitude
        };
    });

    // Initialize the map and add bubbles
    initializeMap('worldMap', bubblesData);
});

// Function to initialize the map
function initializeMap(containerId, bubblesData) {
    // Clear the map container before creating a new map
    document.getElementById(containerId).innerHTML = '';

    var map = new Datamap({
        scope: 'world',
        element: document.getElementById(containerId),
        geographyConfig: {
            popupOnHover: false,
            highlightOnHover: false,
            borderColor: '#007bff',
            borderWidth: 0.5
        },
        bubblesConfig: {
            popupTemplate: function(geography, data) {
                return `<div class="hoverinfo">Country: ${data.centered}<br>
                        Cumulative Cases: ${data.cumulativeCases.toLocaleString()}<br>
                        Cumulative Deaths: ${data.cumulativeDeaths.toLocaleString()}<br>
                        Total Impact: ${data.totalImpact.toLocaleString()}</div>`;
            },
            fillOpacity: 0.5
        },
        fills: {
            'Visited': '#4caf50',
            'neato': '#2196f3',
            'Trouble': '#ff9800',
            defaultFill: '#f0f0f0'
        },
        height: document.getElementById(containerId).clientHeight,
        width: document.getElementById(containerId).clientWidth,
        responsive: true,
        svg: {
            viewBox: `0 0 ${document.getElementById(containerId).clientWidth} ${document.getElementById(containerId).clientHeight}`
        }
    });

    // Add bubbles for cumulative cases and deaths data
    map.bubbles(bubblesData, {
        popupTemplate: function(geo, data) {
            return `<div class="hoverinfo">${data.centered}<br>
                    Cumulative Cases: ${data.cumulativeCases.toLocaleString()}<br>
                    Cumulative Deaths: ${data.cumulativeDeaths.toLocaleString()}<br>
                    Total Impact: ${data.totalImpact.toLocaleString()}</div>`;
        }
    });

    map.fit();
}


    // Adjust map size on window resize
    window.addEventListener('resize', function() {
        initializeMap('worldMap', []);
    });

    // Function to show selected tab
    function showTab(tabId) {
        // Hide all tab content
        d3.selectAll('.tab-content').style('display', 'none');

        // Remove 'active' class from all buttons
        d3.selectAll('.tab-button').classed('active', false);

        // Show the selected tab content
        d3.select('#' + tabId).style('display', 'block');

        // Add 'active' class to the selected button
        d3.select(event.currentTarget).classed('active', true);
    }

    // Set default tab to display on load
    document.addEventListener('DOMContentLoaded', function() {
        showTab('world-tab'); // Show World Cases and Deaths by default
    });

    // Function to process data
    function processData(data) {
        var casesByCountry = {};
        var deathsByCountry = {};
        var cumulativeCasesOverTime = {};
        var cumulativeDeathsOverTime = {};
        var newCasesOverTime = {};
        var newDeathsOverTime = {};

        var totalCases = 0;
        var totalDeaths = 0;
        var lastDate = '';
        var lastDayCases = 0;
        var lastDayDeaths = 0;
        var percentChangeCases = 0;
        var percentChangeDeaths = 0;
        var previousDayCases = 0;
        var previousDayDeaths = 0;

        data.forEach(function(row, index) {
            var date = row.Date_reported;
            var country = row.Country;
            var newCases = +row.New_cases || 0;
            var cumulativeCases = +row.Cumulative_cases || 0;
            var newDeaths = +row.New_deaths || 0;
            var cumulativeDeaths = +row.Cumulative_deaths || 0;

            // Set total cases and deaths using the last row data
            totalCases = cumulativeCases;
            totalDeaths = cumulativeDeaths;
            lastDate = date;

            // Calculate cases and deaths for the last reported day
            if (index === data.length - 1) {
                lastDayCases = newCases;
                lastDayDeaths = newDeaths;
            }

            // Get previous day cases and deaths
            if (index === data.length - 2) {
                previousDayCases = newCases;
                previousDayDeaths = newDeaths;
            }

            // Calculate percentage change (new vs previous day)
            if (previousDayCases > 0) {
                percentChangeCases = ((lastDayCases - previousDayCases) / previousDayCases) * 100;
            }
            if (previousDayDeaths > 0) {
                percentChangeDeaths = ((lastDayDeaths - previousDayDeaths) / previousDayDeaths) * 100;
            }

            casesByCountry[country] = (casesByCountry[country] || 0) + cumulativeCases;
            deathsByCountry[country] = (deathsByCountry[country] || 0) + cumulativeDeaths;

            cumulativeCasesOverTime[date] = (cumulativeCasesOverTime[date] || 0) + cumulativeCases;
            cumulativeDeathsOverTime[date] = (cumulativeDeathsOverTime[date] || 0) + cumulativeDeaths;

            newCasesOverTime[date] = (newCasesOverTime[date] || 0) + newCases;
            newDeathsOverTime[date] = (newDeathsOverTime[date] || 0) + newDeaths;
        });

        return {
            totalCases,
            totalDeaths,
            lastDate,
            lastDayCases,
            lastDayDeaths,
            percentChangeCases,
            percentChangeDeaths,
            casesByCountry,
            deathsByCountry,
            cumulativeCasesOverTime,
            cumulativeDeathsOverTime,
            newCasesOverTime,
            newDeathsOverTime
        };
    }

    // Load CSV data and update KPI values
    d3.csv("WHO-COVID-19-global-daily-data.csv", function(error, data) {
        if (error) {
            console.error('Error loading or processing the CSV data:', error);
            return;
        }

        var processedData = processData(data);

        // Update KPI values
        d3.select("#total-cases").text(processedData.totalCases.toLocaleString());
        d3.select("#total-deaths").text(processedData.totalDeaths.toLocaleString());
        d3.select("#last-date").text(processedData.lastDate);
        d3.select("#last-day-cases").text(processedData.lastDayCases.toLocaleString());
        d3.select("#last-day-deaths").text(processedData.lastDayDeaths.toLocaleString());
        d3.select("#percent-change-cases").text(`Cases: ${processedData.percentChangeCases.toFixed(2)}%`);
        d3.select("#percent-change-deaths").text(`Deaths: ${processedData.percentChangeDeaths.toFixed(2)}%`);

        // Create the charts
        createPieChart('cases-pie-chart', processedData.casesByCountry);
        createPieChart('deaths-pie-chart', processedData.deathsByCountry);
        createBarChart('cumulative-cases-bar-chart', processedData.cumulativeCasesOverTime, 'Cumulative Cases', '#36A2EB');
        createBarChart('cumulative-deaths-bar-chart', processedData.cumulativeDeathsOverTime, 'Cumulative Deaths', '#FF6384');
        createLineChart('new-cases-line-chart', processedData.newCasesOverTime, 'New Cases', '#36A2EB');
        createLineChart('new-deaths-line-chart', processedData.newDeathsOverTime, 'New Deaths', '#FF6384');

        // Generate the map
        generateMap(processedData.casesByCountry, processedData.deathsByCountry);
    });

    // Chart creation functions (pie, bar, and line charts)
    function createPieChart(chartId, data) {
        var ctx = document.getElementById(chartId).getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                datasets: [{
                    data: Object.values(data),
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }],
                labels: Object.keys(data)
            },
            options: {
                responsive: true
            }
        });
    }

    function createBarChart(chartId, data, label, color) {
        var ctx = document.getElementById(chartId).getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    label: label,
                    data: Object.values(data),
                    backgroundColor: color
                }]
            },
            options: {
                responsive: true
            }
        });
    }

    function createLineChart(chartId, data, label, color) {
        var ctx = document.getElementById(chartId).getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    label: label,
                    data: Object.values(data),
                    borderColor: color,
                    fill: false
                }]
            },
            options: {
                responsive: true
            }
        });
    }


