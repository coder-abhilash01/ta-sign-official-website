import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import React from "react";
import ConfirmationDialog from "../ConfirmationDialog";
import API from "@/../api/axios";

const UtilityList = ({
  utilities = [],
  fetching = false,
  fetchUtilities,
  handleDelete,
  deletingId,
}) => {


  const handleDownload = async (id) => {
  try {
    const response = await API.get(`/api/public/utilities/download/${id}`);

    const downloadUrl = response.data.downloadUrl;

    window.open(downloadUrl, "_blank");
  } catch (error) {
    console.error("Download failed:", error);
  }
};
  return (
    <div className="space-y-4">

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          Existing Utilities
        </h3>

        <button
          type="button"
          onClick={fetchUtilities}
          disabled={fetching}
          className="text-xs px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded text-neutral-300"
        >
          {fetching ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {fetching && (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center text-sm text-neutral-500">
          Loading utilities...
        </div>
      )}

      {!fetching && utilities.length === 0 && (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center text-sm text-neutral-500">
          No utilities uploaded yet.
        </div>
      )}

      {!fetching && utilities.length > 0 && (
        <div className="space-y-3">

          {utilities.map((utility) => (
            <div
              key={utility._id}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >

              <div className="min-w-0">

                <h4 className="font-semibold text-white">
                  {utility.name}
                </h4>

                <div className="flex flex-wrap gap-2 mt-2">

                  <span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">
                    {utility.category}
                  </span>

                  <span className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-400">
                    {utility.version}
                  </span>

                  <span className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-400">
                    {utility.platform}
                  </span>

                </div>

                {utility.file?.originalName && (
                  <p className="text-xs text-neutral-600 mt-2 truncate">
                    {utility.file.originalName}
                  </p>
                )}

              </div>

              <div className="flex gap-2">

              
                  <button
                  onClick={() => handleDownload(utility._id)}
                    className="px-3 py-2 text-xs rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                  >
                    View
                  </button>
              

                <AlertDialog>

                  <AlertDialogTrigger asChild>
                    <button
                      type="button"
                      disabled={deletingId === utility._id}
                      className="px-3 py-2 text-xs rounded bg-red-600/10 hover:bg-red-600/20 cursor-pointer text-red-400 disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </AlertDialogTrigger>

                  <ConfirmationDialog
                    utilityName={utility.name}
                    onConfirm={() => handleDelete(utility._id)}
                  />

                </AlertDialog>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default UtilityList;