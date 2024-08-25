
import Content from "../Content";
import ContentList from "./ContentList";




function Tabs() {
   const tabsList=[{id:1,name:"tab1"},{id:2,name:"tab2"},{id:3,name:"tab3"}
,{id:4,name:"tab4"}];


  return (
  
    <div>
        <ul>
          {tabsList.map((tab=>
          <Content key={tab.id}  data={tab}/>
      
          ))}
         
        </ul>
        
        <ContentList id={[1,2,3,4]} />
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique nobis, tempora quas quos, delectus quis distinctio fugiat veritatis beatae ipsum sapiente consequatur tempore cum? Quisquam quibusdam praesentium amet. Harum sed ipsam dolores porro numquam! Voluptas, quos. Magnam dolorem asperiores magni eum ullam veritatis ut. In saepe impedit minus tempore?</p>
        
       
       
    </div>
   
  )
}

export default Tabs;