
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Data from './Data';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { IoAdd } from "react-icons/io5";
import Modal from '@mui/material/Modal';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [idList, setIdList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image, setImage] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [text, setText] = useState('');
  const [done, setDone] = useState({
    status: false,
    data: []
  });
  
const[top,settop]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/img/");
        setData(response.data.a);
        settop(response.data.b)
        setLoading(true);
        setIdList([response.data.a[0].id, response.data.a[1].id]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(file);
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    }
};
const handleSubmit = (event) => {
  event.preventDefault();
  
};

  const imageStyle = {
    cursor: 'pointer',
    width: '35vw',
    height: '40vh',
    borderRadius: '8px',
    boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
    width: '500px',
    objectFit: 'contain',
    border: '2px solid #ddd',
    transition: 'transform 0.2s',
  };

  const containerStyle = {
    display: 'flex',
    // grid-template-columns: 'repeat(auto-fit, minmax9250px , 1fer)',
    justifyContent: 'center',
    // padding: '20px',
  };

  const imageContainerStyle = {
    margin: '20px',
  };

  
  const handleImageHover = (event) => {
    event.target.style.transform = 'scale(1.05)';
  };

  const handleImageLeave = (event) => {
    event.target.style.transform = 'scale(1)';
  };

  const imageClick = (id, unid,index) => {
    if (!idList.includes(id)) {
      idList.push(id);
      setIdList([...idList]);
    }
    if (!idList.includes(unid)) {
      idList.push(unid);
      setIdList([...idList]);
    }
    const userDataString = getUserData();

   
    axios.post('http://localhost:8000/api/img/', { ids: idList,selected:id,info:userDataString })
      .then((res) => {
        setData(prevData => {
          const newData = [...prevData];
          newData[index] = res.data; 
          return newData;
        });
      })
      .catch((error) => {
        const filteredData = data.filter(item => item.id == id);
        setDone({
          status: true,
          data: filteredData
        });
      });
  };


  //data

  function getUserData() {
    const browserName = navigator.appName;
    const browserVersion = navigator.appVersion;
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const language = navigator.language;

    const userData = {
        browserName: browserName,
        browserVersion: browserVersion,
        userAgent: userAgent,
        platform: platform,
        language: language
    };

    const userDataString = JSON.stringify(userData);

    return userDataString;
}


  return (
    <>
      {/* {loading ? (
        done.status ? ( */}
          {/* <>

          <div style={{
            display: 'grid',
            placeContent: 'center',
            placeItems: 'center'
          }}>
            <h1>{done.data[0].name ? done.data[0].name : 'This'} won</h1>
            <div style={imageContainerStyle}>
              <img
                src={done.data[0].img}
                alt="Image 1"
                style={imageStyle}
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageLeave}
              />
            </div>
          </div>

         
          </> */}

        {/* ) : ( */}
        <div className='containerFull'>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>
              <h1 className='choose-txt'>Choose</h1>
          <div className='containerStyle'>
            
            <div  style={containerStyle}>
            
              {/* {Data.length > 0 && ( */}
              {Data.filter((x)=> x.id === 1 || x.id === 2).slice(0,2).map((x)=>
                <>
                  <div style={imageContainerStyle}>
                  {/* <h1>{Data[0].id ? Data[0].id : 'This'} </h1> */}
                  <h1>{x.id ? x.id : 'This'}</h1>

                    <img
                      // onClick={() => imageClick(Data[0].id,Data[1].id ,1)}
                      src={x.image}
                      alt="Image 1"
                      style={imageStyle}
                      onMouseEnter={handleImageHover}
                      onMouseLeave={handleImageLeave}
                    />
                  </div>
                  {/* <div style={imageContainerStyle}>
                  <h1>{Data[1].id ? Data[1].id : 'This'} </h1>
                 

                    <img
                      onClick={() => imageClick(Data[1].id,Data[0].id, 0)}
                      src={Data[1].img}
                      src={x.image[1]}
                      alt="Image 2"
                      style={imageStyle}
                      onMouseEnter={handleImageHover}
                      onMouseLeave={handleImageLeave}
                    />
                  </div> */}
                </>
              
               )} 

            


            <div style={{display:'flex', flexDirection:'column',justifyContent:"center",}}>
            <h3>Top 5</h3>
          {Data.slice(0,5).map((mapped, index) => (
    <div key={index} style={{
      width: '140px', 
      height: '140px', 
      border: '2px solid #ccc', 
      borderRadius: '10px', 
      margin: '10px 20px', 
      overflow: 'hidden', 
      position: 'relative' 
    }}>
        <img src={mapped.image} alt={`Top Pick ${index + 1}`} style={{
             width: '100%', 
             height: '100%', 
             objectFit: 'cover' 
        }} />
        <div style={{
           position: 'absolute',
           top: '10px',
           left: '10px',
           color: 'white',
           fontSize: '24px',
           fontWeight: 'bold',
           backgroundColor: 'rgba(0, 0, 0, 0.5)', 
           padding: '5px 10px', 
           borderRadius: '5px' 
        }}>
            {index + 1}
        </div>
    </div>
))}

          </div>
          </div>
            </div>
            </div>
            <div>
      <Button onClick={handleOpen}><IoAdd />Add New</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='boxer'>
        <Box >
        <form onSubmit={handleSubmit}>
          <div className="title">Choose a image and name to upload</div>
        {image && (
                    <div className='preview'>
                        <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                    </div>
                )}
                <div className='accept'>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>
                <div className='accept2'>
                  <input type='text' value={text} onChange={(event)=> setText(event.target.value) } placeholder='Name' required/>
                </div>
                <div>
                    <button type="submit" className='hello'>Upload</button>
                </div>
            </form>
        </Box>
        </div>
      </Modal>
    </div>
    <div className='cato-container'>
        {Data.slice(6,11).map((x,index)=>
      <div className='c-container' >
        <div className='c-image' key={index} style={{
          
          // border: '2px solid #ccc', 
           
          // margin: '10px 20px', 
          // overflow: 'hidden', 
          // position: 'relative' 
        }}>
          <img src={x.image} style={{
           width: '15.1vw', 
           height: '14vh', 
             borderRadius: '10px 10px 0 0',
             margin: '0 0 10px 0 ',
             objectFit: 'fill', 
        }}/>
        
        </div>
        <div className='txt-title'>{x.category}</div>
      </div>
        )}
    </div>

        {/* )
      ) : (
        <h1>Loading....</h1>
      )} */}
    </>
  );
}

export default App;
