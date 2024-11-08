//     import React, { ChangeEvent, useState } from 'react'
//   import { Appbar } from '../components/Appbar'
// import axios from 'axios'
// import { BACKEND_URL } from '../config'
// import { useNavigate } from 'react-router-dom'

//     const Publish = () => {
//       const [title,setTitle] = useState("");
//       const [description,setDescription] = useState("");
//       const navigate = useNavigate();
//       return (
//         <div>
//           <Appbar/>
//         <div className="flex justify-center pt-6">
//           <div className='w-1/3'> 
//     <label  className="block mb-2 text-md font-medium text-gray-900 ">Title</label>

//     <input onChange={(e)=>{setTitle(e.target.value)}}  type="text" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required    placeholder="title"/>
//     <TextEditor onChange={(e)=>{setDescription(e.target.value)}}/>
//     <div className='flex justify-center'>
//         <button onClick={async()=>{
//         const response =  await axios.post(`${BACKEND_URL}/api/v1/blog`,{
//             title,content:description
//           },{
//             headers:{
//               Authorization:localStorage.getItem("token")
//             }
//           });
//           navigate(`/blog/${response.data.id}`)
//         }} type="submit" className=" px-4 py-2 text-sm font-medium text-center justify-center mt-1
//         text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-white-900
//         hover:bg-blue-800">
//         Publish post
//         </button>
//      </div>
      
//         </div>
//         </div>
//         </div>
//       )
//     }


//     function TextEditor({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
//       return <div className="mt-2">
//       <div className="w-full mb-4 ">
//       <div className="flex items-center justify-between border">
//       <div className="my-2 bg-white rounded-b-lg w-full">
//       <label className="sr-only">Publish post</label>
//       <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-full dark:text-white dark:bg-gray-700 rounded-lg
//       px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an article ... " required />
//       </div>
//       </div>
//       </div>
//       </div>
//     }

//     export default Publishimport React, { ChangeEvent, useState } from 'react';
import { Appbar } from '../components/Appbar';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Appbar />
      <div className="flex justify-center pt-6">
        <div className="w-2/3">
          
          {/* Title Input with even spacing */}
          <div className="mb-6">
            <label className="block mb-2 text-md font-medium text-gray-900">Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="bg-gray-900 py-3 dark:text-white dark:bg-gray-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              placeholder="title" 
            />
          </div>

          

          {/* Editor and Preview side-by-side */}
          <div className="flex mt-4 gap-4">
            
            {/* Text Editor with even spacing */}
            <div className="w-1/2">
              <div className="mb-6">
                <label className="block mb-2 text-md font-medium ">Content</label>
                <TextEditor onChange={(e) => setDescription(e.target.value)} />
              </div>
            </div>

            {/* Preview Area with even spacing */}
            <div className="w-1/2">
              <h3 className="text-md font-medium">Preview:</h3>
              <div
                className="p-4 bg-gray-100 border border-gray-300 rounded-lg mt-2 whitespace-pre-wrap"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {description}
              </div>
            </div>
          </div>

          {/* Publish Button moved below the Title */}
          <div className="flex justify-left mt-4 mb-6">
            <button
              onClick={async () => {
                const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                  title,
                  content: description,
                }, {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                });
                navigate(`/blog/${response.data.id}`);
              }}
              type="submit"
              className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
            >
              Publish post
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
  return (
    <textarea
      onChange={onChange}
      rows={8}
      className="focus:outline-none block w-full dark:text-white dark:bg-gray-700 rounded-lg px-0 text-sm text-gray-800 bg-white border border-gray-300 px-5 py-3"
      placeholder="Write an article ..."
      required
    />
  );
}

export default Publish;
