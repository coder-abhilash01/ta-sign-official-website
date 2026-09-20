import React, { useEffect, useState } from "react";
import {
  ShieldCheck,
  HardDrive,
  Settings,
} from "lucide-react";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";

import API from "../../api/axios";
import UtilityTable from "@/components/UtilityTable";


const Utilities = () => {
  const [utilities, setUtilities] = useState([]);

  // -----------------------------------
  // Filter utilities by category
  // -----------------------------------

  const dscUtilities = utilities.filter(
    (utility) => utility.category === "dsc_utility"
  );

  const runtimeSetupUtilities = utilities.filter(
    (utility) => utility.category === "runtime_setup"
  );

  const tokenDriversUtilities = utilities.filter(
    (utility) => utility.category === "token_driver"
  );

  // -----------------------------------
  // GSAP Animation
  // -----------------------------------

  useGSAP(() => {
    gsap.from(".utility-card", {
      y: 30,
      duration: 1,
      ease: "power4.out",
    });
  });

  // -----------------------------------
  // Fetch Utilities
  // -----------------------------------

  const fetchUtilities = async () => {
    try {
      const response = await API.get("/api/public/utilities");


      setUtilities(response.data.data);
    } catch (error) {
      console.error("Error fetching utilities:", error);
    }
  };

  useEffect(() => {
    fetchUtilities();
  }, []);

  // -----------------------------------
  // Download Utility
  // -----------------------------------

  const handleDownload = async (id) => {
    try {
      const response = await API.get(
        `/api/public/utilities/download/${id}`
      );

      const downloadUrl = response.data.downloadUrl;

      window.open(downloadUrl, "_blank");
    } catch (error) {
      console.error("Error downloading utility:", error);
    }
  };

  return (
    <div className="utility-card w-full min-h-screen bg-[#F6F9FF]">
      <div className="w-full mx-auto pb-15">

     

        <div className="w-full sm:h-[40vh] relative bg-[url('/hero-section-imgs/heroImg2.jpg')] bg-cover bg-bottom p-4 pt-8 sm:p-8 text-white">

          <div className="absolute top-0 left-0 w-full h-full z-1 bg-black/70 p-6" />

          <div className="relative z-12 max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium mb-5">
              <ShieldCheck className="h-4 w-4" />

              DSC Resources & Downloads
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              DSC Installation Center
            </h1>

            <p className="text-white/70 mt-4 sm:mt-5 sm:text-lg leading-7 tracking-wide">
              Download all required DSC utilities, token drivers,
              Java runtime environments, and setup tools required
              for secure digital signature operations.
            </p>

          </div>
        </div>

    

        <div className="w-full sm:px-20">

          {/* DSC Utilities */}

          <UtilityTable
            title="DSC Utilities"
            description="Install DSC signing utilities required for digital signature authentication and usage."
            icon={Settings}
            data={dscUtilities}
            nameLabel="Utility Name"
            versionLabel="Version"
            platformLabel="Platform"
            onDownload={handleDownload}
          />

          {/* Token Drivers */}

          <UtilityTable
            title="Token Drivers"
            description="Download token drivers required to detect and use your DSC USB token securely."
            icon={HardDrive}
            data={tokenDriversUtilities}
            nameLabel="Driver Name"
            versionLabel="Version"
            platformLabel="Platform"
            onDownload={handleDownload}
          />

          {/* Runtime Environment */}

          <UtilityTable
            title="Runtime Environment Setup"
            description="Install required runtime environments for DSC applications and browser compatibility."
            icon={ShieldCheck}
            data={runtimeSetupUtilities}
            nameLabel="Software"
            versionLabel="Required Version"
            platformLabel="Platform"
            onDownload={handleDownload}
          />

        </div>
      </div>
    </div>
  );
};

export default Utilities;