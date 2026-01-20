import React from 'react'
const Test = () => {
    const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
<>



    <div className="App">
     
    </div>
</>
  )
}

export default Test