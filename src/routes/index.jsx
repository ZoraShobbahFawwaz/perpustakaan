import { createBrowserRouter } from "react-router-dom"
import { CreateUser } from "../pages/CreateUser"
import { UserPage } from "../pages/UserPage"
import { BookPage } from "../pages/BookPage"
import { AddBook } from "../pages/AddBook"
import { BorrowingPage } from "../pages/BorrowingPage"
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