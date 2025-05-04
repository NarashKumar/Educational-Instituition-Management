import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import IntroductionPage from "../components/IntroductionPage";
import AddStudent from "../components/AddStudent";
import StudentList from "../components/StudentList";
import SidebarLayout from "../layouts/SidebarLayout";
import Dashboard from "../components/shared/Dashboard";
import FeePayment from "../components/FeePayment";
import PersonalDetails from "../components/PersonalDetails";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <IntroductionPage />,
        },

        {
            path: "/addstudent",
            element: <AddStudent />,
        },

        {
            path: "/studentlist",
            element: <StudentList />,
        },
  
        {
          path: "/",
          element: <SidebarLayout />,
          children: [
            { path: "/dashboard", element: <Dashboard/> },
            { path: "/fee-payment", element: <FeePayment/> },
            { path: "/personal-details", element: <PersonalDetails />}
  
              ],
            },
          ],
        },
  
      ],
    
  );