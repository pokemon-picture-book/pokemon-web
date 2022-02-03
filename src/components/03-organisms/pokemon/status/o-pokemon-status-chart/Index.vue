<template>
    <div class="o-status-chart" :style="{ width }">
        <RadarChart v-bind="radarChartProps" />
    </div>
</template>

<script lang="ts">
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { computed, defineComponent, PropType } from 'vue';
import { RadarChart, useRadarChart } from 'vue-chart-3';
import { StyleWidth } from '@/types/common';
import { StatusChartDataset } from '@/components/03-organisms/pokemon/status/o-pokemon-status-chart';

// other color: http://www.netyasun.com/home/color.html
const chartRgbaColors = ['255, 0, 0', '0, 255, 0', '0, 0, 255'];

Chart.register(...registerables);

export default defineComponent({
    name: 'App',
    components: {
        RadarChart
    },
    props: {
        width: {
            type: String as PropType<StyleWidth>,
            default: () => '400px' as StyleWidth
        },
        datasets: {
            type: Array as PropType<StatusChartDataset[]>,
            default: () => []
        }
    },
    setup(props) {
        const chartData = computed<ChartData<'radar'>>(() => {
            if (props.datasets.length > chartRgbaColors.length) {
                console.warn(`[Warning]: Round down lengths ${chartRgbaColors.length} and above.`);
            }
            return {
                labels: ['HP', 'こうげき', 'とくこう', 'すばやさ', 'とくぼう', 'ぼうぎょ'],
                datasets: props.datasets.slice(0, chartRgbaColors.length).map((dataset, i) => ({
                    label: dataset.label,
                    data: dataset.data,
                    backgroundColor: `rgba(${chartRgbaColors[i]}, 0.4)`,
                    borderColor: `rgba(${chartRgbaColors[i]})`,
                    borderWidth: 2,
                    fill: false
                }))
            };
        });
        const options: ChartOptions<'radar'> = {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: (item) => item.formattedValue
                    }
                }
            }
            // scales: {
            //     r: {
            //         min: 0,
            //         max: 255
            //     }
            // }
        };

        const { radarChartProps, radarChartRef } = useRadarChart({
            chartData,
            options
        });

        return { radarChartProps, radarChartRef };
    }
});
</script>
