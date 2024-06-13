import { RouterProvider } from "@tanstack/react-router";
import "./App.css";
import { router } from "./router.config";
import supabase from "./supabaseClient";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await supabase
      .schema("footer_navigation")
      .from("team")
      .select();

    console.log(data);
  };

  return <RouterProvider router={router} />;
}

export default App;
