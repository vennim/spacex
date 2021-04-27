import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

export default function MyForm(props) {
  const { register, handleSubmit, errors } = useForm();
  return (
    <>
      <form onSubmit={handleSubmit((form)=>props.func(form))}>
        <label>
          Mission Name :
          </label>
       
          <input
            type="text"
            name="mission_name"
            {...register('mission_name')}
          />
        <label>
          Rocket Name:
          </label>
          <input
            type="string"
            name="rocket_name"
            {...register('rocket_name')}
          />
        
        <label>
        Launch Year:
        </label>
          <input
            type="string"
            name="launch_year"
            {...register('launch_year')}
          />
          
        
        
        <br />
        <br />
        <input type="submit" value="Search" />
      </form>
    </>
  );
}
