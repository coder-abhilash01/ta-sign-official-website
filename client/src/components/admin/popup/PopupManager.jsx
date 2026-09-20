import React, { useEffect, useState } from "react";
import API from "@/../api/axios";
import { toast } from "sonner";
import PopupForm from "./PopupForm";

export default function PopupManager() {

    const [popup, setPopup] = useState(null);
    const [fetching, setFetching] = useState(false);

    const fetchPopup = async () => {
        try {
            setFetching(true);

            const response = await API.get("/api/popup");

            setPopup(response.data.data || null);

        } catch (error) {
            console.error("Fetch popup error:", error);

            toast.error(
                error.response?.data?.message ||
                "Failed to load popup"
            );

        } finally {
            setFetching(false);
        }
    };

    useEffect(() => {
        fetchPopup();
    }, []);

    return (
        <div className="space-y-8">


            <div>
                <h2 className="text-xl md:text-2xl font-bold text-emerald-400">
                    Manage Popup & Offers
                </h2>

                <p className="text-sm text-neutral-500 mt-1">
                    Manage your partner cashback popup and promotional offers.
                </p>
            </div>


            <PopupForm
                popup={popup}
                fetching={fetching}
                fetchPopup={fetchPopup}
            />

        </div>
    );
}