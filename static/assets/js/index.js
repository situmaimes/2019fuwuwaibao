var chart;
var legend;

var chartData = [{
    country: "证券",
    value: 260},
{
    country: "期货",
    value: 201},
{
    country: "银行",
    value: 65},
{
    country: "基金",
    value: 39},
{
    country: "信托",
    value: 19},
{
    country: "保险",
    value: 59},
{
    country: "交易所",
    value: 9},
{
    country: "私募",
    value: 10}];

AmCharts.ready(function() {
    // PIE CHART
    chart = new AmCharts.AmPieChart();
    chart.dataProvider = chartData;
    chart.titleField = "country";
    chart.valueField = "value";
    chart.outlineColor = "";
    chart.outlineAlpha = 0.8;
    chart.outlineThickness = 2;
    // this makes the chart 3D
    chart.depth3D = 20;
    chart.angle = 30;

    // WRITE
    chart.write("chartdiv");
});