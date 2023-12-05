import styles from './ProductChart.module.css';
import ApexChart from 'react-apexcharts';

function ProductChart({height}) {
  return (
    <div className={styles.container}>
      <ApexChart
          height={height}
          type="line"
          series= {[
           	 { name: "Price", data:[1000, 800, 3000, 2900]},
          ]}
          options={{
            theme: { mode: "Bootstrap" },
            chart: {
              toolbar: { show: false },
              background: "transparent",
              zoom: {
                enabled: false,
              },
            },
            stroke: { curve: "straight", width: 2 },
            grid: { 
              show: false,
            },
            yaxis: { 
              opposite: true,
              show: true,
            },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
              categories: [1660004640, 1660091040, 1660177440,1660177540],
              type: "date",
              tooltip: {
                enabled: false,
              }
            },
            fill: {
              type: "solid",
            },
            colors: ["#f27f73"],
            tooltip: {
              custom: function({series, seriesIndex, dataPointIndex, w}) {
                var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];    
                const date = new Date(w.globals.labels[dataPointIndex]).toLocaleDateString()
                return `<div style="background-color:rgba(0,0,0,.8); text-align: center; padding:3px;">`+
                          `<p style="font-size:11px; font-weight:400; color: white;">${date}</p>`+
                          `<p style="font-size:11px; font-weight:400; color: white;">${data}원</p>` +
                        `</div>`;
              }
            }
          }}
        />
    </div>
  );
}

export default ProductChart;