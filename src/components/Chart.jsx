/* eslint-disable react/prop-types */
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, } from 'recharts';

const Chart = ({ chartItem }) => {






    return (
        <div>

            <BarChart width={300} height={250} data={chartItem}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="mark" fill="#8884d8" />
                {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
            </BarChart>

        </div>
    );
};

export default Chart;