import './pieChartBox.scss';
import {Pie, PieChart, Cell, ResponsiveContainer, Tooltip} from "recharts";

const data = [
    {id: 1, name: 'Group A', value: 400, color: '#0088FE'},
    {id: 2, name: 'Group B', value: 300, color: '#00C49F'},
    {id: 3, name: 'Group C', value: 300, color: '#FFBB28'},
    {id: 4, name: 'Group D', value: 200, color: '#FF8042'},
];

export const PieChartBox = () => {
    return (
        <div className="pieChartBox">
            <h2>Leads by Source</h2>
            <div className="chart">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{background: "white", borderRadius: "5px"}}
                        />
                        <Pie
                            data={data}
                            innerRadius={70}
                            outerRadius={95}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map(item => (
                                <Cell key={item.id} fill={item.color}/>
                            ))}
                        </Pie>
                        <Pie
                            data={data}
                            cx={420}
                            cy={200}
                            startAngle={180}
                            endAngle={0}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map(item => (
                                <Cell key={item.id} fill={item.color}/>
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <ul className="options">
                {
                    data.map(item => {
                        return (
                            <li className="option" key={item.id}>
                                <div className="title">
                                    <div className="dot" style={{background: item.color}}></div>
                                    <span>{item.name}</span>
                                </div>
                                <span>{item.value}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}