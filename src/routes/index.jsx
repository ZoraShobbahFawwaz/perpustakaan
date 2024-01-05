import { createBrowserRouter } from "react-router-dom"
import { CreateUser } from "../pages/user/CreateUser"
import { UserPage } from "../pages/user/UserPage"
import { BookPage } from "../pages/book/BookPage"
import { AddBook } from "../pages/book/AddBook"
import { AddBorrowing } from "../pages/borrowing/AddBorrowing"
import { BorrowingPage } from "../pages/borrowing/BorrowingPage"
import { BookRentalLandingPage } from "../pages/HomePage"
import { PengembalianPage } from "../pages/pengembalian/PengembalianPage"
import { ReportPage } from "../pages/report/ReportPage"
import { CreateReport } from "../pages/report/CreateReport"
import { UpdateBook } from "../pages/book/UpdateBook"
import { LoginForm } from "../pages/Login"
import { UserHomePage } from "../pages/UserHomePage"
import { CreatePengembalian } from "../pages/pengembalian/CreatePengembalian"

export const router = createBrowserRouter([
    //Homepage
    {
        path: '/userhomepage',
        element: < UserHomePage/>
    },
    {
        path: '/create/user',
        element: <CreateUser />
    },
    {
        path: '/login',
        element: <LoginForm />
    },
    {
        path: '/user',
        element: <UserPage />
    },
    {
        path: '/book',
        element: <BookPage />
    },
    {
        path: '/addbook',
        element: <AddBook />
    },
    {
        path: '/borrowing',
        element: <BorrowingPage />
    },
    {
        path: '/borrowing/create',
        element: <AddBorrowing />
    },
    {
        path: '/',
        element: <BookRentalLandingPage />
    },
    {
        path: '/pengembalian',
        element: <PengembalianPage />
    },
    {
        path: '/report',
        element: <ReportPage />
    },
    {
        path: '/report/create',
        element: <CreateReport />
    },
    {
        path: '/updatebook',
        element: <UpdateBook />
    },
    {
        path: '/pengembalian/create',
        element: <CreatePengembalian />
    },
    // {
    //     path: '/admin/create',
    //     element: <CreateAdmin />
    // },
])