import React, { useEffect, useState } from "react";
import API from "@/../api/axios";
import { toast } from "sonner";
import UtilityList from "./utilities/UtilityList";
import UtilityForm from "./utilities/UtilityForm";

export default function UtilityManager() {



    const [utilities, setUtilities] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [deletingId, setDeletingId] = useState(null);

    // =========================
    // GET EXISTING UTILITIES
    // =========================

    const fetchUtilities = async () => {
        try {
            setFetching(true);

            const response = await API.get("/api/utilities");

            setUtilities(response.data.data || []);

        } catch (error) {
            console.error("Fetch utilities error:", error);

            toast.error(
                error.response?.data?.message ||
                "Failed to load utilities"
            );

        } finally {
            setFetching(false);
        }
    };

    useEffect(() => {
        fetchUtilities();
    }, []);



    // =========================
    // DELETE UTILITY
    // =========================

    const handleDelete = async (id) => {

        try {
            setDeletingId(id);

            await API.delete(
                `/api/utilities/${id}`
            );

            toast.success(
                "Utility deleted successfully!"
            );

            // Remove from UI immediately
            setUtilities((prev) =>
                prev.filter(
                    (utility) => utility._id !== id
                )
            );

        } catch (error) {
            console.error(
                "Delete utility error:",
                error
            );

            toast.error(
                error.response?.data?.message ||
                "Failed to delete utility"
            );

        } finally {
            setDeletingId(null);
        }
    };


    return (
        <div className="space-y-8">


            <div>
                <h2 className="text-xl md:text-2xl font-bold text-emerald-400">
                    Manage Utilities & Drivers
                </h2>

                <p className="text-sm text-neutral-500 mt-1">
                    Upload and manage DSC utilities, token drivers
                    and runtime files.
                </p>
            </div>


            <UtilityForm fetchUtilities={fetchUtilities} />


            <UtilityList
                utilities={utilities}
                fetching={fetching}
                fetchUtilities={fetchUtilities}
                handleDelete={handleDelete}
                deletingId={deletingId}

            />



        </div>
    );
}