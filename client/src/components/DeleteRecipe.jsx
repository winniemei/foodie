import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import AllRecipes from "./Recipes";
import { deleteRecipe } from "../fetching";


export default function DeleteRecipe({specificId}) {
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      const response = await deleteRecipe(specificId);
      navigate("/recipes")
    }
    catch (error) {
      console.error(error);
    }

  }
  return (
    <div>
      <div>
        <button type="button" onClick={handleDelete}>Delete Recipe</button>
      </div>
    </div>
  );
  }