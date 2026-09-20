import API from "@/../api/axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const PopupForm = ({ popup, fetching, fetchPopup }) => {

    const [isActive, setIsActive] = useState(true);
    const [type, setType] = useState("partner");
    const [cashback, setCashback] = useState(50);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    // =========================
    // LOAD EXISTING POPUP
    // =========================

    useEffect(() => {

        if (!popup) return;

        setIsActive(popup.isActive ?? true);
        setType(popup.type || "partner");
        setCashback(popup.cashback ?? 50);

    }, [popup]);




    const handleSubmit = async (e) => {
        e.preventDefault();

        if (type === "partner") {

            if (
                cashback === "" ||
                cashback === null ||
                cashback === undefined
            ) {
                return toast.error(
                    "Please enter cashback percentage"
                );
            }

            if (Number(cashback) < 0 || Number(cashback) > 100) {
                return toast.error(
                    "Cashback must be between 0 and 100"
                );
            }
        }

        if (type === "offer" && !file && !popup?.offerImage?.url) {
            return toast.error(
                "Please select an offer image"
            );
        }

        const formData = new FormData();

        formData.append("isActive", isActive);
        formData.append("type", type);

        if (type === "partner") {
            formData.append(
                "cashback",
                cashback
            );
        }

        if (type === "offer" && file) {
            formData.append("image", file);
        }

        try {
            setLoading(true);

            await API.put(
                "/api/popup",
                formData
            );

            toast.success(
                "Popup updated successfully!"
            );

            setFile(null);

            fetchPopup();

        } catch (error) {
            console.error(
                "Update popup error:",
                error
            );

            toast.error(
                error.response?.data?.message ||
                "Failed to update popup"
            );

        } finally {
            setLoading(false);
        }
    };


    return (

        <form
            onSubmit={handleSubmit}
            className="bg-neutral-900 p-4 md:p-6 rounded-xl border border-neutral-800 space-y-6"
        >

            <div>

                <label className="block text-xs text-neutral-400 mb-2">
                    Popup Status
                </label>

                <div className="flex items-center gap-3">

                    <button
                        type="button"
                        onClick={() =>
                            setIsActive(!isActive)
                        }
                        className={`relative w-12 h-6 rounded-full transition-all ${
                            isActive
                                ? "bg-emerald-600"
                                : "bg-neutral-700"
                        }`}
                    >

                        <span
                            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                                isActive
                                    ? "left-7"
                                    : "left-1"
                            }`}
                        />

                    </button>

                    <span className="text-sm text-neutral-300">
                        {isActive ? "Popup is Active" : "Popup is Inactive"}
                    </span>

                </div>

            </div>


    

            <div>

                <label className="block text-xs text-neutral-400 mb-2">
                    Popup Type
                </label>

                <select
                    value={type}
                    onChange={(e) =>
                        setType(e.target.value)
                    }
                    className="w-full p-2.5 bg-neutral-800 border border-neutral-700 rounded text-sm text-white"
                >

                    <option value="partner">
                        Become a Partner
                    </option>

                    <option value="offer">
                        Promotional Offer
                    </option>

                </select>

            </div>



            {type === "partner" && (

                <div>

                    <label className="block text-xs text-neutral-400 mb-1">
                        Cashback Percentage
                    </label>

                    <div className="flex items-center gap-2">

                        <input
                            type="number"
                            min="0"
                            max="100"
                            value={cashback}
                            onChange={(e) =>
                                setCashback(e.target.value)
                            }
                            placeholder="e.g. 50"
                            className="w-full md:w-48 p-2.5 bg-neutral-800 border border-neutral-700 rounded text-sm text-white"
                        />

                        <span className="text-neutral-400">
                            %
                        </span>

                    </div>

                    <p className="text-xs text-neutral-500 mt-2">
                        Example: 50 means "Get up to 50% Cashback".
                    </p>

                </div>

            )}



            {type === "offer" && (

                <div className="space-y-4">

                    <div>

                        <label className="block text-xs text-neutral-400 mb-1">
                            Offer Image
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setFile(e.target.files[0])
                            }
                            className="w-full p-2 bg-neutral-800 border border-neutral-700 rounded text-sm text-neutral-300"
                        />

                        <p className="text-xs text-neutral-500 mt-2">
                            Upload the complete promotional offer design.
                        </p>

                    </div>


                    {/* CURRENT IMAGE */}

                    {popup?.offerImage?.url && (

                        <div>

                            <label className="block text-xs text-neutral-400 mb-2">
                                Current Offer
                            </label>

                            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-3 max-w-md">

                                <img
                                    src={popup.offerImage.url}
                                    alt="Current offer"
                                    className="w-full h-auto rounded"
                                />

                            </div>

                        </div>

                    )}

                </div>

            )}


    

            <div className="pt-2">

                <button
                    type="submit"
                    disabled={loading || fetching}
                    className="w-full md:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 rounded font-semibold text-sm transition-all"
                >
                    {loading
                        ? "Saving..."
                        : "Save Popup Settings"}
                </button>

            </div>

        </form>
    );
};

export default PopupForm;