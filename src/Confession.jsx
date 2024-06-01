import React, { useEffect, useState } from 'react'
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

function Confession() {

  const [dense ,setDense] = useState(null)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleLike = (id) => {
   setDemo(prevDemo =>
    prevDemo.map((x)=> 
      x.id === id ? {...x, likes: x.likes+1 }: x
    )
   )
  };
  const handleUnlike =(id)=>{
    setDemo(
      currentDemo =>
      currentDemo.map((x)=> {
        if (x.id === id){
          const newlike = Math.max(x.likes-1,0);
          return{...x, likes: newlike};
        }
        else{
          return x;
        }
      })
  )
  }
  const handlemore = (id) =>{
    setDense(id)
    setOpen2(true)
    
  }
  const [demo, setDemo] = useState([
    { "id": 1, "comment": "Comment 1", "title": "Title 1", "likes": 0 },
    { "id": 2, "comment": "Comment 2", "title": "Title 2", "likes": 0 },
    { "id": 3, "comment": "Comment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjk dfklsadkfdfk dfksjsdkfjsdjfkldsfk sdfjksfjklsdfjkldsjf sdffsdfskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsjfajsdsf dfjkdfndsfjsdfj dfjksdfj sfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskldComment fsakfjksajfksdfjksdjfk dklsfjdsjfklsklsdjfksdfjkskld", "title": "Title 3", "likes": 0 },
    { "id": 4, "comment": "Comment 4", "title": "Title 4", "likes": 0 },
    { "id": 5, "comment": "Comment 5", "title": "Title 5", "likes": 0 },
    { "id": 6, "comment": "Comment 6", "title": "Title 6", "likes": 0 }
  ]);

 
    
  return (
    <>
    <div className="conf-container">  
    <style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style> 
    <div className="conf-navbar">
       <Link to='/'> <div className="conf-title">Confession <div className="txt-conf">anonymous</div></div></Link>
        <div className="conf-btn"><button onClick={handleOpen}>Add Confession</button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
        <div class="card">
		<div class="card-image">	
			<h2 class="card-heading">
				Confession
				<small>Anonymous</small>
			</h2>
		</div>
		<form class="card-form">
			<div class="input">
				<input type="text" class="input-field" value="Alexander Parkinson" required/>
				<label class="input-label">Title</label>
			</div>
						<div class="input1">
            <label for="description">Description:</label>
            <textarea id="description" name="description" rows="4" cols="50">
  </textarea>
				
			</div>
						
			<div class="action">
				<button class="action-button">Post</button>
			</div>
		</form>
		<div class="card-info">
			<p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
		</div>
	</div>

        </Box>
      </Modal>
        </div>
    </div> 
    <div className="conf-card">
    <React.Fragment>
        {demo.map((x)=> 
    <CardContent>
     <div className="card-title">
        {x.title}
        </div>
      
      
      <div className='comment'>
      { x.comment.substring(0, 10)}
              {dense !== x.id && (
                <div className="txtmore-btn"><button className="txtmore " onClick={() => handlemore(x.id)}>..more</button>
                <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
        <div className="conf-card2">
    <React.Fragment>
    {/* <CardContent> */}
    <div className="card-content">
     <div className="card-title2">
     {demo.find((x)=> x.id === dense)?.title }
        </div>
        <div className='comment2'>
        {demo.find((x)=> x.id === dense)?.comment}
      </div>
      <div className="div"></div>
        <div className="combine2">
          <div className="like" ><GrLike onClick={() => handleLike(x.id )} /></div>
          <div className="unlike"><GrDislike onClick={()=> handleUnlike(x.id)}/></div>
          <div className="count">{x.likes}</div>
        </div>
      </div>
        {/* </CardContent> */}
    
   
    
    </React.Fragment>
      </div>
        </Box>
        </Modal>
       
                </div>
              )}
        </div>
        <div className="div"></div>
        <div className="combine">
          <div className="like" ><GrLike onClick={() => handleLike(x.id )} /></div>
          <div className="unlike"><GrDislike onClick={()=> handleUnlike(x.id)}/></div>
          <div className="count">{x.likes}</div>
        </div>
    </CardContent>
    )}
   
    
  </React.Fragment>
    </div>
    </div>
    </>
  )
}

export default Confession