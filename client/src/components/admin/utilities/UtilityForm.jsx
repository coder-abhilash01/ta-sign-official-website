import API from "@/../api/axios";
import React from 'react'
import { useState } from 'react';
import { toast } from 'sonner';

const UtilityForm = ({fetchUtilities}) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("dsc_utility");
    const [version, setVersion] = useState("");
    const [loading, setLoading] = useState(false);
    const [platform, setPlatform] = useState("Windows");
    const [file, setFile] = useState(null);



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            return toast.error(
                "Please select an EXE, ZIP or MSI file"
            );
        }

        if (!name.trim() || !version.trim()) {
            return toast.error(
                "Please fill in all the required fields"
            );
        }

        const formData = new FormData();

        formData.append("name", name.trim());
        formData.append("category", category);
        formData.append("version", version.trim());
        formData.append("platform", platform);
        formData.append("file", file);

        try {
            setLoading(true);

            await API.post(
                "/api/utilities",
                formData
            );

            toast.success(
                "Utility uploaded successfully!"
            );

            setName("");
            setVersion("");
            setFile(null);

            // Refresh list
            fetchUtilities();

        } catch (err) {
            console.error("Upload utility error:", err);

            toast.error(
                err.response?.data?.message ||
                "Failed to upload file"
            );

        } finally {
            setLoading(false);
        }
    };

    return (

        <form
            onSubmit={handleSubmit}
            className="bg-neutral-900 p-4 md:p-6 rounded-xl border border-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-4"
        >

            {/* NAME */}

            <div>
                <label className="block text-xs text-neutral-400 mb-1">
                    Item Name
                </label>

                <input
                    type="text"
                    placeholder="e.g. Care4Sign Utility"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                    className="w-full p-2.5 bg-neutral-800 border border-neutral-700 rounded text-sm text-white"
                    required
                />
            </div>


            {/* CATEGORY */}

            <div>
                <label className="block text-xs text-neutral-400 mb-1">
                    Category
                </label>

                <select
                    value={category}
                    onChange={(e) =>
                        setCategory(e.target.value)
                    }
                    className="w-full p-2.5 bg-neutral-800 border border-neutral-700 rounded text-sm text-white"
                >
                    <option value="dsc_utility">
                        DSC Utility
                    </option>

                    <option value="token_driver">
                        Token Driver
                    </option>

                    <option value="runtime_setup">
                        Runtime Environment
                    </option>
                </select>
            </div>


            {/* VERSION */}

            <div>
                <label className="block text-xs text-neutral-400 mb-1">
                    Version
                </label>

                <input
                    type="text"
                    placeholder="e.g. v4.0 / Latest"
                    value={version}
                    onChange={(e) =>
                        setVersion(e.target.value)
                    }
                    className="w-full p-2.5 bg-neutral-800 border border-neutral-700 rounded text-sm text-white"
                    required
                />
            </div>


            {/* PLATFORM */}

            <div>
                <label className="block text-xs text-neutral-400 mb-1">
                    Platform
                </label>

                <select
                    value={platform}
                    onChange={(e) =>
                        setPlatform(e.target.value)
                    }
                    className="w-full p-2.5 bg-neutral-800 border border-neutral-700 rounded text-sm text-white"
                >
                    <option value="Windows">
                        Windows
                    </option>

                    <option value="Mac">
                        Mac
                    </option>

                    <option value="Windows / Mac">
                        Windows / Mac
                    </option>
                </select>
            </div>


            {/* FILE */}

            <div className="md:col-span-2">

                <label className="block text-xs text-neutral-400 mb-1">
                    Executable File (.exe, .zip, .msi)
                </label>

                <input
                    type="file"
                    accept=".exe,.zip,.msi"
                    onChange={(e) =>
                        setFile(e.target.files[0])
                    }
                    className="w-full p-2 bg-neutral-800 border border-neutral-700 rounded text-sm text-neutral-300"
                    required
                />

            </div>


            {/* SUBMIT */}

            <div className="md:col-span-2 mt-2">

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 rounded font-semibold text-sm transition-all"
                >
                    {loading
                        ? "Uploading to Cloud..."
                        : "Publish Setup File"}
                </button>

            </div>

        </form>
    )
}

export default UtilityForm
