import styles from './ProductChart.module.css';
import ApexChart from 'react-apexcharts';
import { simpleDateFormat } from '../../../utils/StringUtil';

function ProductChart({height, info}) {

  let chartData;

  if(info.length === 1){
    chartData = [{x:"2000-01-01T01:01:01.000+00:00", y:info[0].dealPrice},{x:info[0].dealDate, y:info[0].dealPrice}]
  } else {
    chartData = info.map(i=>{
      return{
        x:i.dealDate,
        y:i.dealPrice,
      }
     });
  }
  console.log(chartData);
  
  return (
    <div className={styles.container}>
      <ApexChart
          height={height}
          type="line"
          series= {[
           	 {data: chartData},
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
                return `<div style="background-color:rgba(0,0,0,.8); text-align: center; padding:3px;">`+
                          `<p style="font-size:11px; font-weight:400; color: white;">${simpleDateFormat(data.x)}</p>`+
                          `<p style="font-size:11px; font-weight:400; color: white;">${data.y}원</p>` +
                        `</div>`;
              }
            }
          }}
        />
    </div>
  );
}

export default ProductChart;