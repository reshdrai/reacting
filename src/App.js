import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [idList, setIdList] = useState([]);
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

  const imageStyle = {
    cursor: 'pointer',
    width: '40vw',
    height: '40vh',
    borderRadius: '8px',
    objectFit: 'contain',
    border: '2px solid #ddd',
    transition: 'transform 0.2s',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  };

  const imageContainerStyle = {
    margin: '0 10px',
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
      {loading ? (
        done.status ? (
          <>

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

         
          </>

        ) : (
          <div>
            <h1>Choose</h1>
            <div style={containerStyle}>
              {data.length > 0 && (
                <>
                  <div style={imageContainerStyle}>
                  <h1>{data[0].id ? data[0].id : 'This'} </h1>

                    <img
                      onClick={() => imageClick(data[0].id,data[1].id ,1)}
                      src={data[0].img}
                      alt="Image 1"
                      style={imageStyle}
                      onMouseEnter={handleImageHover}
                      onMouseLeave={handleImageLeave}
                    />
                  </div>
                  <div style={imageContainerStyle}>
                  <h1>{data[1].id ? data[1].id : 'This'} </h1>

                    <img
                      onClick={() => imageClick(data[1].id,data[0].id, 0)}
                      src={data[1].img}
                      alt="Image 2"
                      style={imageStyle}
                      onMouseEnter={handleImageHover}
                      onMouseLeave={handleImageLeave}
                    />
                  </div>
                </>
              )}
            </div>

            <h3>Top 5</h3>

            <div style={{display:'flex'}}>
          {top.map((mapped, index) => (
    <div key={index} style={{
      width: '140px', 
      height: '140px', 
      border: '2px solid #ccc', 
      borderRadius: '10px', 
      margin: '10px', 
      overflow: 'hidden', 
      position: 'relative' 
    }}>
        <img src={mapped.img} alt={`Top Pick ${index + 1}`} style={{
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
        )
      ) : (
        <h1>Loading....</h1>
      )}
    </>
  );
}

export default App;
