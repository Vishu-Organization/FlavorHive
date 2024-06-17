import { RouterProvider } from "@tanstack/react-router";
import "./App.css";
import { router } from "./router.config";
import supabase from "./supabaseClient";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useGetAllCustomerSupportLinks } from "./services/use-queries";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 5,
      retryDelay: 1000,
    },
  },
});

function App() {
  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   const { data } = await supabase
  //     .schema("footer_navigation")
  //     .from("team")
  //     .select();

  //   console.log(data);
  // };

  // const data = useGetAllCustomerSupportLinks();

  // console.log(data);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
