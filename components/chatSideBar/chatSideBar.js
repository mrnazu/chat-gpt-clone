import Link from "next/link";

export const chatSideBar = () => {
    return (
    <div className="bg-gray-700">
        <Link href={'/api/auth/logout'}>
            Logout
        </Link>
    </div>
    );
}