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
            return {
                labels: ['HP', 'こうげき', 'とくこう', 'すばやさ', 'とくぼう', 'ぼうぎょ'],
                datasets: props.datasets.map((dataset) => ({
                    label: dataset.label,
                    data: dataset.data,
                    backgroundColor: `rgba(${dataset.rgbaColor}, 0.4)`,
                    borderColor: `rgba(${dataset.rgbaColor})`,
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
            },
            scales: {
                r: {
                    min: 0,
                    max: 255
                }
            }
        };

        const { radarChartProps, radarChartRef } = useRadarChart({
            chartData,
            options
        });

        return { radarChartProps, radarChartRef };
    }
});
</script>
