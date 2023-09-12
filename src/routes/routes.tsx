import { createBrowserRouter } from 'react-router-dom';
import { UserPage } from '../pages/UserPage';
import ErrorPage from '../pages/ErrorPage';
import { PlansPage } from '../pages/PlansPage';
import { PaymentsPage } from '../pages/PaymentsPage';
import { TransactionsPage } from '../pages/transactionsPage';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/",
        element: <UserPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/plans",
        element: <PlansPage/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/payments",
        element: <PaymentsPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/transactions",
        element: <TransactionsPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/*",
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
    },
  ]);
