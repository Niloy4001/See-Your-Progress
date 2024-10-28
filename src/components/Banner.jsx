import { useState } from "react";


const Banner = () => {
    const [examName , setExamName] = useState('')
    const [mark, setMark] = useState(0)
    const [chartItem, setChartItem] = useState([])

    console.log(chartItem);
    

    const handleAdd = () =>{
        const arr = {}
        arr.name = examName;
        arr.mark = mark;
        setChartItem([...chartItem, arr])
        // console.log(chartItem);
        
    }
    
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-lvh">
            {/* Input field */}
            <div>
                <div className="flex md:flex-row flex-col items-center justify-center h-full gap-4">
                    <label>
                        <p className="text-xl font-medium">Exam Name:</p>
                        <input type="text"
                                className="input px-5 py-3 border-2 border-solid border-gray-400 rounded-2xl"
                                onChange={(e)=> setExamName(e.target.value)}
                                />
                    </label>
                    <label>
                        <p className="text-xl font-medium">Mark in Percentage:</p>
                        <input type="text" 
                               className="input px-5 py-3 border-2 border-solid border-gray-400 rounded-2xl"
                               onChange={(e)=> setMark(e.target.value)}
                               />
                    </label>
                    <button className="btn px-5 py-5 bg-blue-600 text-white rounded-xl" onClick={handleAdd}>Add</button>
                </div>
            </div>
            {/* Chart field */}
            <div></div>
        </div>
    );
};

export default Banner;