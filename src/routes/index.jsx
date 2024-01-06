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
import { CreateAdmin } from "../pages/admin/CreateAdmin"
import { AdminPage } from "../pages/admin/AdminPage"
import { AdminHomePage } from "../pages/AdminHomePage"

export const router = createBrowserRouter([
    //Homepage
    {
        path: '/userhomepage',
        element: < UserHomePage/>
    },
    //admin
    {
        path: '/admin',
        element: <AdminPage />
    },
    //user
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
    //book
    {
        path: '/book',
        element: <BookPage />
    },
    {
        path: '/addbook',
        element: <AddBook />
    },
    //borrowing
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
    //pengembalian
    {
        path: '/pengembalian',
        element: <PengembalianPage />
    },
    //report
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
    {
         path: '/admin/create',
         element: <CreateAdmin />
    },
    {
        path: '/adminhomepage',
        element: <AdminHomePage />
    },
])