import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import axios from 'axios'

const Creatjob = () => {


    const [file, setFile] = useState(null)


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        data.skills = selettedOption;
        data.image = file ? file : data.image
        // console.log(data);

        fetch("http://localhost:3000/post-job", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                if (result.acknowledged === true) {
                    Swal.fire({
                        title: "Successfully Posted job!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                }
                reset();
            });
    }

    const [selettedOption, setSelectedOption] = useState(null);
    const options = [
        { value: "Javascript", label: "Javascript" },
        { value: "C++", label: "C++" },
        { value: "HTML", label: "HTML" },
        { value: "CSS", label: "CSS" },
        { value: "React", label: "React" },
        { value: "Node.js", label: "Node.js" },
        { value: "Mongodb", label: "Mongodb" }
    ]

// Imag load imgbb.com
    const imghandle = async (image) => {
        const formData = new FormData();
        formData.append('image', image)

        try {
            const response = await axios.post("https://api.imgbb.com/1/upload?expiration=63072000&key=049f5de46f50089e0838be15e6fe26fd", formData);
            console.log(response.data.data.url);
            setFile(response.data.data.url)
        } catch (error) {
            console.error(error);
            throw error; // Re-throw the error to propagate it to the caller
        }
    }




    return (
        <div className='max-w-screen-full container mx-auto'>
            {/* Form */}
            <div className='bg-[#f9f9f9] py-5 px-4  lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

                    {/* Frist Row  */}
                    <div className='flex  flex-col lg:flex-row  items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full '>
                            <label className=' block mb-2 text-lg'> Job Title</label>
                            <input type="text" placeholder="Web Developer" required {...register("jobTitle",)} className='block  w-full  border-1 flex-1 bg-white py-1.5  pl-3 text-gray-900 placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6 ' />
                        </div>
                        <div className='lg:w-1/2 w-full '>
                            <label className=' block mb-2 text-lg'> Company Name</label>
                            <input type="text" placeholder="EX : Microsoft" required {...register("companyName",)} className='block  w-full  border-1 flex-1 bg-white py-1.5  pl-3 text-gray-900 placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6 ' />
                        </div>
                    </div>
                    {/* 2nd Row */}
                    <div className='flex  flex-col lg:flex-row  items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full '>
                            <label className=' block mb-2 text-lg'> Minimum salary</label>
                            <input type="text" placeholder="$20k" required {...register("minPrice",)} className='block  w-full  border-1 flex-1 bg-white py-1.5  pl-3 text-gray-900 placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6' />
                        </div>
                        <div className='lg:w-1/2 w-full '>
                            <label className=' block mb-2 text-lg'> Maximum Salary </label>
                            <input type="text" placeholder="$150k" required {...register("maxPrice",)} className='block  w-full  border-1 flex-1 bg-white py-1.5  pl-3 text-gray-900 placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6 ' />
                        </div>
                    </div>

                    {/* 3nd Row */}
                    <div className='flex  flex-col lg:flex-row  items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full '>
                            <label className=' block mb-2 text-lg'>Salary Type </label>
                            <select required {...register("salaryType")} className='create-job-input'>
                                <option value=""> Choose your salary </option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div className='lg:w-1/2 w-full '>
                            <label className=' block mb-2 text-lg'> Job Location </label>
                            <input type="text" placeholder="Ex: New york" {...register("jobLocation",)} className='block w-full border-1 flex-1 bg-white py-1.5  pl-3 text-gray-900 placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6 ' />
                        </div>
                    </div>
                    {/* 4th Row */}
                    <div className='flex  flex-col lg:flex-row  items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full '>
                            <label className=' block mb-2 text-lg'> Job Posting Data </label>
                            <input type="date" placeholder="Ex: 2023-11-04" {...register("postingDate",)} className='block  w-full  border-1 flex-1 bg-white py-1.5  pl-3 text-gray-900 placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6 ' />
                        </div>
                        <div className='lg:w-1/2 w-full '>
                            <label className=' block mb-2 text-lg'>Experience Level </label>
                            <select {...register("experienceLevel")} className='create-job-input'>
                                <option value=""> Choose your Exprience </option>
                                <option value="NoExperience">No Experience</option>
                                <option value="Intership">Intership</option>
                                <option value="Work remotely">Work remotely</option>
                            </select>
                        </div>
                    </div>
                    {/* 5nd Row */}
                    <div>
                        <label className=' block mb-2 text-lg'>Required Skill Sets: </label>
                        <CreatableSelect
                         required
                            // defaultValue={selettedOption}            
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                            className='create-job-input'
                        />
                    </div>

                    {/* 6th Row */}
                    <div className='flex  flex-col lg:flex-row  items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full '>
                            <label className=' block mb-2 text-lg'>Company Logo</label>
                            <input type="file" placeholder="Upload Logo" {...register("companyLogo",)} className='block w-full border-1 flex-1 bg-white py-1.5  pl-3 text-gray-900 placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6 ' onChange={(e) => imghandle(e.target.files[0])} />
                        </div>
                        <div className='lg:w-1/2 w-full '>
                            <label className=' block mb-2 text-lg'>Employment Type </label>
                            <select required {...register("employmentType")} className='create-job-input'>
                                <option value=""> Employment Type </option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                        </div>
                    </div>

                    {/* 7th Row */}
                    <div className='w-full'>
                        <label className=' block mb-2 text-lg'>Job Description: </label>
                        <textarea
                        required
                              defaultValue={"A book or other written or printed work, regarded in terms of its content rather than its physical form." } 
                            className='w-full pl-3  focus:outline-none'
                            rows={6}
                            placeholder='Job Description'
                            {...register("description")}
                        />
                    </div>

                    {/* last Row */}
                    <div>
                        <label className=' block mb-2 text-lg'>Job Posted By </label>
                        <input
                            type="email"
                            placeholder='Your email'
                            {...register("postedBy")}
                            className='create-job-input'

                        />
                    </div>

                    <input type="submit" className='block mt-12 bg-blue text-white font-semibold  px-8 py-2 rounded-sm' />
                </form>
            </div>
        </div>
    )
}

export default Creatjob