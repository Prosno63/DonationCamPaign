import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getStoredDonationDetails } from "../../utility/localStorage";

import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';


const Statistics = () => {


    const places = useLoaderData();

    const [giveDonation, setGiveDonation] = useState([]);


    useEffect(() => {
        const storedPlaceIds = getStoredDonationDetails();
        if (places.length > 0) {
            const donationsGiven = [];
            for (const id of storedPlaceIds) {
                const place = places.find(place => place.id === id);
                if (place) {
                    donationsGiven.push(place);
                }
            }
            setGiveDonation(donationsGiven);

        }
    })

    const number = giveDonation.length;
    const result = number * 299;

    const data = [
        { name: "Total Donation", value: 20000 },
        { name: "My Contribution", value: result },
    ];

    const COLORS = [ 'red', 'orange'];


    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          const dataItem = payload[0].payload; // Get the data item
          return (
            <div className="custom-tooltip">
              <p>{`${dataItem.name}`}</p>
              <p>$ {`${dataItem.value}`}</p>
            </div>
          );
        }
      
        return null;
      };




    return (



        <div>

            <h1 className='text-4xl font-semibold text-center mt-6 text-amber-900' >Donation Chart</h1>


            <div className='flex flex-col pb-2 lg:flex-row items-center  gap-x-9'>
            <div className='text-center' >
                <PieChart width={400} height={400} className='md:ml-2  lg:ml-96 mt-10'>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={180}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                   
                </PieChart>
            </div>

            <div>
                <h1>Total Donation: </h1>
                <div className='border m-1 p-2 bg-red-500'>
                </div>
                <h1 className='text-orange-300 mt-2' >Your Contribution: </h1>
                <div className='border m-1 p-2 bg-orange-300'>
                </div>
            </div>
            </div>





        </div>
    );
};

export default Statistics;