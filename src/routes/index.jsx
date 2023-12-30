import { createBrowserRouter } from "react-router-dom"
import { CreateUser } from "../pages/user/CreateUser"
import { UserPage } from "../pages/user/UserPage"
import { BookPage } from "../pages/book/BookPage"
import { AddBook } from "../pages/book/AddBook"
import { AddBorrowing } from "../pages/borrowing/AddBorrowing"
import { BorrowingPage } from "../pages/borrowing/BorrowingPage"
import { BookRentalLandingPage } from "../pages/HomePage"
import { PengembalianPage } from "../pages/PengembalianPage"
import { ReportPage } from "../pages/ReportPage"

export const router = createBrowserRouter([
    {
        path: '/createuser',
        element: <CreateUser />
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
])