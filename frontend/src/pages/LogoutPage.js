import { useEffect } from "react";
import authStore from "../stores/authStore";

export default function LogoutPage() {
    const store = authStore();

    useEffect(() => {
        store.logout();
    }, [store]);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">You are now logged out</h1>
                <p className="text-lg text-gray-600">Thank you for using our service. Come back soon!</p>
            </div>
        </div>
    );
}
