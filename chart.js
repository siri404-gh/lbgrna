import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg';
import { View } from 'react-native';

class PieChartWithCenteredLabels extends React.PureComponent {

    render() {

        const data = [
            {
                key: 1,
                amount: 10,
                svg: { fill: '#78b537' },
            },
            {
                key: 2,
                amount: 20,
                svg: { fill: '#094c81' }
            },
            {
                key: 3,
                amount: 30,
                svg: { fill: '#0a6441' }
            },
            {
                key: 4,
                amount: 30,
                svg: { fill: '#8b9194' }
            },
            {
                key: 5,
                amount: 10,
                svg: { fill: '#619ab5' }
            },
        ]

        return (
            <View style={{ position: 'relative', overflow: 'hidden' }}>
                <PieChart
                    style={{ height: 300, marginTop: -150 }}
                    valueAccessor={({ item }) => item.amount}
                    data={data.concat(data)}
                    spacing={0}
                    outerRadius={'100%'}
                    innerRadius={'75%'}
                    startAngle={-4.71}
                    padAngle={0.0249066}
                    animate>
                    {/* <Labels /> */}
                </PieChart>
            </View>
        )
    }

}

export default PieChartWithCenteredLabels