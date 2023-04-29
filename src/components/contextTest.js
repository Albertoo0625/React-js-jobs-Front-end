import React from "react";
import { ContextConsumer } from "../context";

const Test=()=>{
return (   
   <ContextConsumer>
      {
         (value)=>{
            const {testValue}=value;
         return(
         <div>
         This is a test from the context Component {testValue}
         </div>
         )}
      }
   
   </ContextConsumer>
)
}

export default Test