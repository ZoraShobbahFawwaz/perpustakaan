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
import { BookUser } from "../pages/book/BookUser"
import { UpdateUser } from "../pages/user/UpdateUser"
import { UpdateAdmin } from "../pages/admin/UpdateAdmin"
import { UpdatePengembalian } from "../pages/pengembalian/UpdatePengembalian"
import { UpdateReport } from "../pages/report/UpdateReport"
import { UpdateBorrowing } from "../pages/borrowing/UpdateBorrowing"

export const router = createBrowserRouter([
    //login
    {
        path: '/login',
        element: <LoginForm />
    },
    //tampilan awal
    {
        path: '/',
        element: <BookRentalLandingPage />
    },
    //admin
    {
        path: '/admin',
        element: <AdminPage />
    },
    {
        path: '/admin/update/:adminID',
        element: <UpdateAdmin />
    },
    {
        path: '/admin/create',
        element: <CreateAdmin />
    },
    {
        path: '/adminhomepage',
        element: <AdminHomePage />
    },
    //user
    {
        path: '/userhomepage',
        element: < UserHomePage />
    },
    {
        path: '/create/user',
        element: <CreateUser />
    },
    {
        path: '/user',
        element: <UserPage />
    },
    {
        path: '/user/update/:userID',
        element: <UpdateUser />
    },
    //book
    {
        path: '/book/update/:bookID',
        element: <UpdateBook />
    },
    {
        path: '/bookuser',
        element: <BookUser />
    },
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
        path: '/borrowing/create/:bookID',
        element: <AddBorrowing />
    },
    {
        path: '/borrowing/update/:ID_peminjaman',
        element: <UpdateBorrowing />
    },

    //pengembalian
    {
        path: '/pengembalian',
        element: <PengembalianPage />
    },
    {
        path: '/pengembalian/update/:pengembalianID',
        element: <UpdatePengembalian />
    },
    {
        path: '/pengembalian/create',
        element: <CreatePengembalian />
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
        path: '/report/update/:reportID',
        element: <UpdateReport />
    },



])